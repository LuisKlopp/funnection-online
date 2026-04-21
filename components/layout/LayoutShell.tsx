"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { SplashScreen } from "@/app/(home)/_components/hero-section/SplashScreen";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { useFirstVisitSplash } from "@/hooks/ui/useFirstVisitSplash";
import { getAnonId } from "@/lib/anon";
import { getAnsweredMap } from "@/lib/check-answered";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

export const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  const { showSplash, setShowSplash, checked } = useFirstVisitSplash();

  const pathname = usePathname();

  const hideLayout = [
    "/apply",
    "/apply-complete",
    "/admin-applications",
  ].includes(pathname);

  useEffect(() => {
    getAnonId();
  }, []);

  useEffect(() => {
    const map = getAnsweredMap();
    useCheckAnsweredStore.getState().init(map);
  }, []);

  if (!checked) {
    return (
      <div className="bg-lightNavy flex h-svh items-center justify-center" />
    );
  }

  return (
    <div className="smd:border-primaryNavy/30 mdl:border-x mx-auto w-full max-w-175">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!hideLayout && !showSplash && <Header />}
      {children}
      {!hideLayout && !showSplash && <Footer />}
    </div>
  );
};
