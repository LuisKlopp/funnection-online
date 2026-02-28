"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { HeaderNavDesktop } from "./HeaderNavDesktop";
import { HeaderNavMobile } from "./HeaderNavMobile";

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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

  const isFunnection = pathname === "/funnection";
  const isElio = pathname === "/elio";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-100 w-full transition-colors duration-200 duration-300",
        scrolled ? "box-shadow-2 bg-white" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "smd:max-w-full smd:px-48 mx-auto flex h-18 w-full items-center justify-between px-4 transition-all duration-200",
          mobileOpen ? "bg-white" : "bg-transparent"
        )}
      >
        <Link href="/" className="text-primaryNavy text-2xl font-semibold">
          Funnection <span className="text-gray-7 text-[14px]">Online</span>
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
