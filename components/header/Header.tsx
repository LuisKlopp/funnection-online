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
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled ? "box-shadow-1 bg-white" : "bg-transparent"
      )}
    >
      <div className="smd:max-w-[80%] smd:px-48 mx-auto flex h-18 w-full items-center justify-between px-4">
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
