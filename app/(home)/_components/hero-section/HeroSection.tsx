"use client";

import { useEffect, useState } from "react";

import { HeroSectionForm } from "./HeroSectionForm";
import { SplashScreen } from "./SplashScreen";

export const HeroSection = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("home-visited");

    if (!visited) {
      setIsFirstVisit(true);
      setShowSplash(true);
      sessionStorage.setItem("home-visited", "true");
    }

    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <div className="from-primaryNavy/30 via-lightNavy to-lightNavy/40 relative h-dvh w-full overflow-hidden bg-linear-to-b">
      {showSplash && (
        <SplashScreen
          onComplete={() => {
            setShowSplash(false);
          }}
        />
      )}

      {!showSplash && <HeroSectionForm visible skipTyping={!isFirstVisit} />}
    </div>
  );
};
