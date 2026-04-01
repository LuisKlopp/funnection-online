import { AdminAuthSession } from "@/types/admin-auth.type";

export const ADMIN_AUTH_STORAGE_KEY = "funnection-admin-session";
export const ADMIN_SESSION_DURATION_MS = 12 * 60 * 60 * 1000;

const isBrowser = () => typeof window !== "undefined";

export const clearAdminSession = () => {
  if (!isBrowser()) return;

  window.localStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
};

export const readAdminSession = (): AdminAuthSession | null => {
  if (!isBrowser()) return null;

  const storedSession = window.localStorage.getItem(ADMIN_AUTH_STORAGE_KEY);

  if (!storedSession) {
    return null;
  }

  try {
    const parsedSession = JSON.parse(storedSession) as AdminAuthSession;

    if (!parsedSession?.expiresAt || parsedSession.expiresAt <= Date.now()) {
      clearAdminSession();
      return null;
    }

    return parsedSession;
  } catch {
    clearAdminSession();
    return null;
  }
};

export const saveAdminSession = ({
  username,
  accessToken,
  expiresAt,
}: {
  username: string;
  accessToken?: string | null;
  expiresAt?: number;
}) => {
  if (!isBrowser()) return null;

  const nextSession: AdminAuthSession = {
    username,
    accessToken: accessToken ?? null,
    expiresAt: expiresAt ?? Date.now() + ADMIN_SESSION_DURATION_MS,
  };

  window.localStorage.setItem(
    ADMIN_AUTH_STORAGE_KEY,
    JSON.stringify(nextSession)
  );

  return nextSession;
};

export const getAdminAccessToken = () => {
  return readAdminSession()?.accessToken ?? null;
};
