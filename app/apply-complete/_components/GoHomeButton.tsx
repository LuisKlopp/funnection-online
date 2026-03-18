"use client";

import Link from "next/link";

export const GoHomeButton = () => {
  return (
    <Link
      href="/"
      className="hover:border-primaryAmber/40 box-shadow-4 block w-full rounded-2xl border border-white/10 bg-linear-to-br from-[#1F2A3A] to-[#0F172A] py-4 text-center text-base font-semibold text-gray-200 transition-all duration-200 hover:text-white active:scale-[0.98]"
    >
      퍼넥션 홈으로
    </Link>
  );
};
