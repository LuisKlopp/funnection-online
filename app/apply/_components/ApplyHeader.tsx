"use client";

import { ArrowLeft } from "lucide-react";

interface ApplyHeaderProps {
  step: 1 | 2;
  onBack: () => void;
}

export const ApplyHeader = ({ step, onBack }: ApplyHeaderProps) => {
  return (
    <div className="bg-applyBackgroundColor sticky top-0 z-10 border-b border-white/10 px-4 py-4">
      <div className="relative flex items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-400"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{step === 2 ? "모임 다시 선택" : "돌아가기"}</span>
        </button>

        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-base font-semibold">
          퍼넥션 신청
        </span>
      </div>
    </div>
  );
};
