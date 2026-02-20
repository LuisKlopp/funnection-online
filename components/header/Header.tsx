"use client";

import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isFunnection = pathname === "/funnection";
  const isElio = pathname === "/elio";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled ? "box-shadow-1 bg-white" : "bg-transparent"
      )}
    >
      <div className="smd:max-w-[80%] mx-auto flex h-18 items-center justify-between px-6">
        <Link href="/" className="text-primaryNavy text-2xl font-semibold">
          Funnection
        </Link>
        <div className="bg-primaryNavy/8 flex items-center rounded-full px-1 py-1">
          <Link
            href="/funnection"
            className={cn(
              "rounded-full px-4 py-1 text-sm font-medium transition-all duration-200",
              isFunnection
                ? "bg-primaryNavy text-white"
                : "text-gray-8 hover:bg-primaryNavy hover:text-white"
            )}
          >
            퍼넥션 오프라인 모임
          </Link>
          <div className="bg-primaryNavy/80 mx-1 h-4 w-0.5" />
          <Link
            href="/elio"
            className={cn(
              "rounded-full px-4 py-1 text-sm font-medium transition-all duration-200",
              isElio
                ? "bg-primaryNavy text-white"
                : "text-gray-8 hover:bg-primaryNavy hover:text-white"
            )}
          >
            엘리오는 누구인가요?
          </Link>
        </div>
        <div className="border-primaryNavy text-primaryNavy flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium transition-all duration-200">
          <HelpCircle className="h-4 w-4" />
          <span>오늘의 질문</span>
        </div>
      </div>
    </header>
  );
};
