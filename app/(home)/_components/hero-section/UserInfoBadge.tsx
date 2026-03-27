"use client";

import { cn, formatAgeGroup } from "@/lib/utils";
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
        "flex w-full justify-between px-2 pt-1 text-sm transition-all duration-700",
        questionDone
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <div className="text-gray-6">
        {formatAgeGroup(userInfo.ageGroup)}{" "}
        {userInfo.gender === "male" ? "🙋🏻‍♂️" : "🙋🏻‍♀️"}{" "}
      </div>
      <span className="text-primaryNavy/80 font-medium">
        {userInfo.nickname}
      </span>
    </div>
  );
};
