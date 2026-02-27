"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface HeaderNavMobileProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isFunnection: boolean;
  isElio: boolean;
}

export const HeaderNavMobile = ({
  isOpen,
  setIsOpen,
  isFunnection,
  isElio,
}: HeaderNavMobileProps) => {
  return (
    <div className="smd:hidden">
      <button
        type="button"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setIsOpen(!isOpen)}
        className="box-shadow-1 btn-press-in flex h-10 w-10 items-center justify-center rounded-full bg-white"
      >
        {isOpen ? (
          <X className="text-primaryNavy h-5 w-5" />
        ) : (
          <Menu className="text-primaryNavy h-5 w-5" />
        )}
      </button>
      <div
        className={cn(
          "absolute top-18 left-0 w-full px-4 transition-all duration-300",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="bg-primaryNavy/6 box-shadow-1 rounded-2xl p-2">
          <Link
            href="/funnection"
            className={cn(
              "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
              isFunnection
                ? "bg-primaryNavy text-white"
                : "text-gray-8 hover:bg-primaryNavy/10"
            )}
          >
            퍼넥션 오프라인 모임
          </Link>
          <Link
            href="/elio"
            className={cn(
              "mt-2 block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
              isElio
                ? "bg-primaryNavy text-white"
                : "text-gray-8 hover:bg-primaryNavy/10"
            )}
          >
            엘리오는 누구인가요?
          </Link>
        </div>
      </div>
      {isOpen && (
        <button
          aria-label="메뉴 바깥 클릭 닫기"
          className="fixed inset-0 z-[-1] bg-black/0"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
