"use client";

import { cn } from "@/lib/utils";
import { useUserInfoStore } from "@/store/userInfo.store";

interface UserInfoBadgeProps {
  questionDone: boolean;
}

export const UserInfoBadge = ({ questionDone }: UserInfoBadgeProps) => {
  const { userInfo } = useUserInfoStore();

  if (!userInfo) return null;

  return (
    <div
      className={cn(
        "flex w-full justify-end px-2 pt-1 text-sm transition-all duration-700",
        questionDone
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <div className="flex gap-1 rounded-xl px-3 py-1 text-[15px]">
        <span className="text-gray-9">
          <span className="text-gray-9">{userInfo.nickname}</span>님 환영해요!
        </span>
      </div>
    </div>
  );
};
