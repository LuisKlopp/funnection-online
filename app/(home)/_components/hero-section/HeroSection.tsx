"use client";
// import Image from "next/image";
import { useState } from "react";

import { useFirstVisitSplash } from "@/hooks/ui/useFirstVisitSplash";

// import HeroPlace from "@/public/images/hero-place.jpeg";
import { BottomGatherBar } from "../BottomGatherBar";
import { HeroSectionForm } from "./HeroSectionForm";
import { SplashScreen } from "./SplashScreen";

export const HeroSection = () => {
  const { showSplash, setShowSplash, checked, isFirstVisit } =
    useFirstVisitSplash();
  const [questionDone, setQuestionDone] = useState(false);

  return (
    <section className="from-primaryNavy/10 via-primaryNavy/15 to-primaryNavy/20 relative h-svh w-full bg-linear-to-b">
      {/* <Image
        src={HeroPlace}
        alt="background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#4A5FD9]/15 backdrop-blur-xs" /> */}
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
