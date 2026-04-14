"use client";

import { useState } from "react";

import { useFirstVisitSplash } from "@/hooks/ui/useFirstVisitSplash";
import { smoothScrollTo } from "@/lib/utils";
import { HomeQuestion } from "@/types/home.type";

import { BottomGatherBar } from "../BottomGatherBar";
import { FUNNECTION_DATE_SECTION_ID } from "../main-funnection-date-section/MainFunnectionDateSection";
import { HeroSectionForm } from "./HeroSectionForm";

interface HeroSectionProps {
  questionData: HomeQuestion;
}

export const HeroSection = ({ questionData }: HeroSectionProps) => {
  const { showSplash, checked, isFirstVisit } = useFirstVisitSplash();
  const [questionDone, setQuestionDone] = useState(false);
  const handleOpenGatheringSection = () => {
    const section = document.getElementById(FUNNECTION_DATE_SECTION_ID);

    if (!section) return;

    const targetY = window.scrollY + section.getBoundingClientRect().top;

    smoothScrollTo(targetY, 900);
  };

  return (
    <section className="bg-skyNavy relative h-svh w-full">
      <div className="flex h-full w-full items-center justify-center">
        {!showSplash && checked && (
          <HeroSectionForm
            questionDone={questionDone}
            questionData={questionData}
            setQuestionDone={setQuestionDone}
            skipTyping={!isFirstVisit}
            visible={!showSplash}
            onOpenGatheringSection={handleOpenGatheringSection}
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
