"use client";

import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { AdminApplicationsHeader } from "@/app/admin-applications/_components/AdminApplicationsHeader";
import { AdminEventCard } from "@/app/admin-applications/_components/AdminEventCard";
import { AdminLoginModal } from "@/app/admin-applications/_components/AdminLoginModal";
import { useAdminLoginMutation } from "@/hooks/react-query/useAdminLoginMutation";
import { useAllApplicationsQuery } from "@/hooks/react-query/useAllApplicationsQuery";
import { useApplicationMutation } from "@/hooks/react-query/useApplicationMutation";
import {
  clearAdminSession,
  readAdminSession,
  saveAdminSession,
} from "@/lib/admin-auth";
import { AdminLoginResponse } from "@/types/admin-auth.type";

const getLoginErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    const responseMessage =
      (error.response?.data as { message?: string } | undefined)?.message ??
      error.response?.statusText;

    return (
      responseMessage || "로그인에 실패했습니다. 인증 정보를 확인해주세요."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "로그인에 실패했습니다. 잠시 후 다시 시도해주세요.";
};

const resolveSessionExpiry = (response: AdminLoginResponse) => {
  if (response.expiresAt) {
    return response.expiresAt;
  }

  if (response.expiresInSeconds) {
    return Date.now() + response.expiresInSeconds * 1000;
  }

  return undefined;
};

export const AdminApplicationsPageClient = () => {
  const queryClient = useQueryClient();
  const [openEventIds, setOpenEventIds] = useState<number[]>([]);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null
  );

  const { mutateAsync: loginAdmin, isPending: isLoginPending } =
    useAdminLoginMutation();
  const { data: adminEventData, isLoading } =
    useAllApplicationsQuery(isAuthenticated);
  const { confirm, cancel, isConfirming, isCancelling } =
    useApplicationMutation();

  useEffect(() => {
    const currentSession = readAdminSession();

    setIsAuthenticated(Boolean(currentSession));
    setIsAuthReady(true);
  }, []);

  const toggleEvent = (eventId: number) => {
    setOpenEventIds((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    setLoginErrorMessage(null);

    try {
      const response = await loginAdmin(values);

      saveAdminSession({
        username: response.username ?? values.username,
        accessToken: response.accessToken ?? response.token ?? null,
        expiresAt: resolveSessionExpiry(response),
      });

      setIsAuthenticated(true);
    } catch (error) {
      setLoginErrorMessage(getLoginErrorMessage(error));
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    setOpenEventIds([]);
    setIsAuthenticated(false);
    setLoginErrorMessage(null);
    queryClient.removeQueries({ queryKey: ["applications"] });
  };

  if (!isAuthReady) {
    return (
      <div className="mx-auto flex min-h-svh max-w-3xl items-center justify-center px-4 py-6">
        <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
          관리자 인증 상태를 확인하는 중입니다.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-5xl px-3 py-4 sm:px-5 sm:py-6">
        <AdminApplicationsHeader
          totalEvents={adminEventData?.length ?? 0}
          onLogout={isAuthenticated ? handleLogout : undefined}
        />

        {isAuthenticated ? (
          <div className="mt-4 space-y-4">
            {isLoading ? (
              <div className="mx-auto flex min-h-[32vh] max-w-3xl items-center justify-center px-4 py-6">
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                  신청자 데이터를 불러오는 중입니다.
                </div>
              </div>
            ) : (
              <>
                {adminEventData?.map((event) => (
                  <AdminEventCard
                    key={event.eventId}
                    event={event}
                    isOpen={openEventIds.includes(event.eventId)}
                    isActionPending={isConfirming || isCancelling}
                    onToggle={() => toggleEvent(event.eventId)}
                    onConfirm={confirm}
                    onCancel={cancel}
                  />
                ))}

                {!adminEventData?.length && (
                  <div className="rounded-3xl border border-dashed border-gray-200 bg-white/80 px-5 py-8 text-center shadow-sm">
                    <p className="text-sm font-semibold text-gray-700">
                      아직 집계된 신청자가 없습니다.
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      모임 신청이 들어오면 여기서 한 번에 관리할 수 있습니다.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="mt-4 rounded-3xl border border-dashed border-blue-100 bg-white/60 px-5 py-14 text-center shadow-sm">
            <p className="text-sm font-semibold text-gray-700">
              관리자 인증 후 신청자 목록을 확인할 수 있습니다.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              로그인 전에는 신청 데이터 요청이 전송되지 않습니다.
            </p>
          </div>
        )}
      </div>

      {!isAuthenticated && (
        <AdminLoginModal
          errorMessage={loginErrorMessage}
          isPending={isLoginPending}
          onSubmit={handleLogin}
        />
      )}
    </>
  );
};
