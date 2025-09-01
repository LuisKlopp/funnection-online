"use client";

import { OnlineQuestion } from "@/types/online-question.type";

import { QuestionSubmit } from "./question-submit";

interface QuestionsSliderProps {
  question: OnlineQuestion;
}

export const QuestionsSlider = ({ question }: QuestionsSliderProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <header className="flex h-14 w-full max-w-[500px] items-center justify-center text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">Funnection</span>
          <span className="text-sub-color text-[20px]">online</span>
        </div>
      </header>
      <div className="relative w-full max-w-[500px] overflow-hidden">
        <div className="flex h-full w-[200%] transition-transform duration-500 ease-in-out">
          <div className="w-1/2">
            <QuestionSubmit question={question} />
          </div>
          <div className="w-1/2">
            {/* <OXSubmit onBack={() => setStep("question")} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
