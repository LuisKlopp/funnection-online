"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hideLayout = [
    "/apply",
    "/apply-complete",
    "/admin-applications",
  ].includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};
