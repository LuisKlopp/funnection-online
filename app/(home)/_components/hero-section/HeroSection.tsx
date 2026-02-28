"use client";

import { useEffect, useState } from "react";

import { HeroSectionForm } from "./HeroSectionForm";
import { SplashScreen } from "./SplashScreen";

export const HeroSection = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("home-visited");

    if (!visited) {
      setIsFirstVisit(true);
      setShowSplash(true);
      sessionStorage.setItem("home-visited", "true");
    }

    setChecked(true);
  }, []);

  return (
    <div className="from-primaryNavy/30 via-primaryNavy/20 to-primaryNavy/10 relative z-0 h-dvh w-full bg-linear-to-b">
      {!showSplash && checked && (
        <HeroSectionForm skipTyping={!isFirstVisit} visible={!showSplash} />
      )}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
    </div>
  );
};
