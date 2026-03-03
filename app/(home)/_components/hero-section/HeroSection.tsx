"use client";

import { useEffect, useState } from "react";

import { BottomGatherBar } from "../BottomGatherBar";
import { HeroSectionForm } from "./HeroSectionForm";
import { SplashScreen } from "./SplashScreen";

export const HeroSection = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [questionDone, setQuestionDone] = useState(false);

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
    <section className="from-primaryNavy/10 via-primaryNavy/15 to-primaryNavy/20 relative h-svh w-full bg-linear-to-b">
      <div className="flex h-full w-full items-center justify-center">
        {!showSplash && checked && (
          <HeroSectionForm
            questionDone={questionDone}
            setQuestionDone={setQuestionDone}
            skipTyping={!isFirstVisit}
            visible={!showSplash}
          />
        )}
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </div>
      {questionDone && (
        <div className="absolute bottom-6 left-0 w-full">
          <BottomGatherBar />
        </div>
      )}
    </section>
  );
};
