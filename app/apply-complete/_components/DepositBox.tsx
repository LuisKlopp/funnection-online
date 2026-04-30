"use client";

import { CreditCard, Info } from "lucide-react";

interface DepositBoxProps {
  amount: string;
  isSameDayPayment?: boolean;
}

export const DepositBox = ({
  amount,
  isSameDayPayment = false,
}: DepositBoxProps) => {
  return (
    <div className="border-primaryAmber/30 box-shadow-4 w-full rounded-3xl border bg-linear-to-br from-[#1F2937] to-[#111827] p-6">
      <div className="mb-6 flex items-center gap-2">
        <CreditCard className="text-primaryAmber h-5 w-5" />
        <span className="text-primaryAmber text-lg font-semibold">
          {isSameDayPayment ? "결제 안내" : "입금 안내"}
        </span>
      </div>
      <div className="space-y-4 text-sm">
        {!isSameDayPayment && (
          <>
            <Row label="은행" value="카카오뱅크" />
            <Row label="계좌번호" value="3333-31-6007060" highlight />
            <Row label="예금주" value="류현" />
          </>
        )}
        <Row
          label={isSameDayPayment ? "결제 방식" : "입금 금액"}
          value={amount}
          className="text-primaryAmber font-bold"
        />
      </div>
      {!isSameDayPayment && (
        <div className="border-primaryAmber/20 bg-primaryAmber/10 mt-6 flex items-start gap-3 rounded-2xl border p-4">
          <Info className="text-primaryAmber mt-0.5 h-4 w-4" />
          <p className="text-primaryAmber/90 text-sm leading-relaxed break-keep">
            입금이 확인된 순서대로 참여가 최종 확정돼요. 빠른 입금을
            부탁드려요!
          </p>
        </div>
      )}
    </div>
  );
};

const Row = ({
  label,
  value,
  highlight,
  className,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-400">{label}</span>
      <span
        className={[
          "font-medium text-white",
          highlight && "tracking-widest",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {value}
      </span>
    </div>
  );
};
