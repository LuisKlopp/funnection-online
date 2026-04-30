"use client";

import { useEffect, useState } from "react";

import { ApplyCompleteHeader } from "./_components/ApplyCompleteHeader";
import { CheckBox } from "./_components/CheckBox";
import { DepositBox } from "./_components/DepositBox";
import { GoHomeButton } from "./_components/GoHomeButton";
import { NoticeBox } from "./_components/NoticeBox";

const APPLY_COMPLETE_EVENT_TYPE_KEY = "applyCompleteEventType";

interface PaymentInfo {
  amount: string;
  isSameDayPayment: boolean;
}

const EVENT_PAYMENT_INFO: Record<string, PaymentInfo> = {
  FUNNECTION: {
    amount: "35,000원",
    isSameDayPayment: false,
  },
  BOARDGAME: {
    amount: "25,000원",
    isSameDayPayment: false,
  },
  HOLDEM: {
    amount: "당일결제",
    isSameDayPayment: true,
  },
};

const DEFAULT_PAYMENT_INFO = EVENT_PAYMENT_INFO.BOARDGAME;

export const ApplyCompletePageClient = () => {
  const [paymentInfo, setPaymentInfo] = useState(DEFAULT_PAYMENT_INFO);

  useEffect(() => {
    const eventType = sessionStorage.getItem(APPLY_COMPLETE_EVENT_TYPE_KEY);
    const nextPaymentInfo =
      eventType === "FUNNECTION" ||
      eventType === "BOARDGAME" ||
      eventType === "HOLDEM"
        ? EVENT_PAYMENT_INFO[eventType]
        : DEFAULT_PAYMENT_INFO;

    setPaymentInfo(nextPaymentInfo);
  }, []);

  return (
    <div className="bg-applyBackgroundColor smd:mx-auto flex h-svh max-w-175 flex-col overflow-hidden text-white">
      <ApplyCompleteHeader />
      <div className="relative flex min-h-0 flex-1 flex-col items-center gap-4 overflow-y-auto px-4 py-8">
        <CheckBox isSameDayPayment={paymentInfo.isSameDayPayment} />
        <DepositBox
          amount={paymentInfo.amount}
          isSameDayPayment={paymentInfo.isSameDayPayment}
        />
        <NoticeBox />
        <GoHomeButton />
      </div>
    </div>
  );
};
