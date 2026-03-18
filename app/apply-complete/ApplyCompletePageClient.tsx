"use client";

import { ApplyCompleteHeader } from "./_components/ApplyCompleteHeader";
import { CheckBox } from "./_components/CheckBox";
import { DepositBox } from "./_components/DepositBox";
import { GoHomeButton } from "./_components/GoHomeButton";
import { NoticeBox } from "./_components/NoticeBox";

export const ApplyCompletePageClient = () => {
  return (
    <div className="bg-applyBackgroundColor smd:mx-auto flex h-svh max-w-175 flex-col text-white">
      <ApplyCompleteHeader />
      <div className="relative flex h-full flex-1 flex-col items-center gap-4 overflow-y-auto px-4 py-6">
        <CheckBox />
        <DepositBox />
        <NoticeBox />
        <GoHomeButton />
      </div>
    </div>
  );
};
