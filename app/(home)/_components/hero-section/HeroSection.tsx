"use client";
import { useState } from "react";

import { useFirstVisitSplash } from "@/hooks/ui/useFirstVisitSplash";
import { HomeQuestion } from "@/types/home.type";

import { BottomGatherBar } from "../BottomGatherBar";
import { HeroSectionForm } from "./HeroSectionForm";
import { SplashScreen } from "./SplashScreen";

interface HeroSectionProps {
  questionData: HomeQuestion;
}

export const HeroSection = ({ questionData }: HeroSectionProps) => {
  const { showSplash, setShowSplash, checked, isFirstVisit } =
    useFirstVisitSplash();
  const [questionDone, setQuestionDone] = useState(false);

  return (
    <section className="from-primaryNavy/10 via-primaryNavy/15 to-primaryNavy/20 relative h-svh w-full bg-linear-to-b">
      <div className="flex h-full w-full items-center justify-center">
        {!showSplash && checked && (
          <HeroSectionForm
            questionDone={questionDone}
            questionData={questionData}
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
