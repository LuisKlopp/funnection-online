"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const ApplyCompleteHeader = () => {
  return (
    <div className="bg-applyBackgroundColor z-10 shrink-0 border-b border-white/10 px-4 py-4">
      <div className="relative flex items-center">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-400"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>홈으로</span>
        </Link>

        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-base font-semibold text-white">
          퍼넥션 신청 완료
        </span>
      </div>
    </div>
  );
};
