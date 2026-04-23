"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useScrollStore } from "@/store/scroll.store";

import { HeaderNavDesktop } from "./HeaderNavDesktop";
import { HeaderNavMobile } from "./HeaderNavMobile";

export const Header = () => {
  const pathname = usePathname();
  const { scrolled, setScrolled } = useScrollStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isFunnection = pathname === "/about-funnection";
  const isElio = pathname === "/about-elio";
  const useHeroBadgeStyle = isFunnection && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-100 w-full transition-colors duration-200 duration-300",
        scrolled ? "box-shadow-2 bg-white" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "smd:max-w-175 smd:px-8 mx-auto flex h-14 w-full items-center justify-between px-4 transition-all duration-200",
          mobileOpen ? "bg-white" : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className="smd:text-xl text-primaryNavy font-dohyun text-base font-semibold"
        >
          Funnection{" "}
          <span
            className={cn(
              "font-pretendard smd:text-[12px] rounded-3xl px-2 py-1 text-[11px] font-normal transition-colors duration-200",
              useHeroBadgeStyle
                ? "relative -left-px top-px text-white backdrop-blur-sm"
                : "bg-primaryNavy/10 text-gray-9"
            )}
          >
            Online
          </span>
        </Link>
        <HeaderNavDesktop isFunnection={isFunnection} isElio={isElio} />
        <HeaderNavMobile
          isOpen={mobileOpen}
          setIsOpen={setMobileOpen}
          isFunnection={isFunnection}
          isElio={isElio}
        />
      </div>
    </header>
  );
};
