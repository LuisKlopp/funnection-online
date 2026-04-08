"use client";
import { useState } from "react";

import { useFirstVisitSplash } from "@/hooks/ui/useFirstVisitSplash";
import { HomeQuestion } from "@/types/home.type";

import { BottomGatherBar } from "../BottomGatherBar";
import { HeroSectionForm } from "./HeroSectionForm";

interface HeroSectionProps {
  questionData: HomeQuestion;
}

export const HeroSection = ({ questionData }: HeroSectionProps) => {
  const { showSplash, checked, isFirstVisit } = useFirstVisitSplash();
  const [questionDone, setQuestionDone] = useState(false);

  return (
    <section className="bg-lightNavy relative h-svh w-full">
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
      </div>
      {questionDone && (
        <div className="absolute bottom-6 left-0 w-full">
          <BottomGatherBar />
        </div>
      )}
    </section>
  );
};
