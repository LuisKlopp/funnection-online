"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { cn } from "@/lib/utils";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setHideHeader(false);
      return;
    }

    const isFirstVisit = !sessionStorage.getItem("home-visited");

    if (isFirstVisit) {
      setHideHeader(true);

      const timer = setTimeout(() => {
        setHideHeader(false);
      }, 3600);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          "transition-all duration-700",
          hideHeader ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        <Header />
      </div>

      {children}

      <Footer />
    </>
  );
}
