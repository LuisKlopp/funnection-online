"use client";

import { useEffect, useState } from "react";

import { ApplyCompleteHeader } from "./_components/ApplyCompleteHeader";
import { CheckBox } from "./_components/CheckBox";
import { DepositBox } from "./_components/DepositBox";
import { GoHomeButton } from "./_components/GoHomeButton";
import { NoticeBox } from "./_components/NoticeBox";

const APPLY_COMPLETE_EVENT_TYPE_KEY = "applyCompleteEventType";
const DEFAULT_DEPOSIT_AMOUNT = "25,000원";

export const ApplyCompletePageClient = () => {
  const [depositAmount, setDepositAmount] = useState(DEFAULT_DEPOSIT_AMOUNT);

  useEffect(() => {
    const eventType = sessionStorage.getItem(APPLY_COMPLETE_EVENT_TYPE_KEY);

    setDepositAmount(eventType === "FUNNECTION" ? "35,000원" : "25,000원");
  }, []);

  return (
    <div className="bg-applyBackgroundColor smd:mx-auto flex h-svh max-w-175 flex-col overflow-hidden text-white">
      <ApplyCompleteHeader />
      <div className="relative flex min-h-0 flex-1 flex-col items-center gap-4 overflow-y-auto px-4 py-8">
        <CheckBox />
        <DepositBox amount={depositAmount} />
        <NoticeBox />
        <GoHomeButton />
      </div>
    </div>
  );
};
