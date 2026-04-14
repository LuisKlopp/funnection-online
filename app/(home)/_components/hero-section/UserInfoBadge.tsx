"use client";

import { cn, getGenderEmoji } from "@/lib/utils";
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
      <div className="box-shadow-1 flex gap-1 rounded-xl bg-white px-3 py-1 text-sm">
        <span>{getGenderEmoji(userInfo.gender)}</span>
        <span className="text-gray-6">{userInfo.nickname}</span>
      </div>
    </div>
  );
};
