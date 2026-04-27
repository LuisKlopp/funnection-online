"use client";

import { AnsweredView } from "./HeroAnswerArea/AnsweredView";
import { UnansweredView } from "./HeroAnswerArea/UnansweredView";

interface HeroSectionFormContentProps {
  questionDone: boolean;
  questionId: number;
  hasAnswered: boolean;
  value: string;
  maxLength: number;
  onValueChange: (value: string) => void;
  onSubmit: () => void;
  onOpenAnswers: () => void;
  onOpenMyAnswer: () => void;
  onEditMyAnswer: () => void;
}

export const HeroSectionFormContent = ({
  questionDone,
  questionId,
  hasAnswered,
  value,
  maxLength,
  onValueChange,
  onSubmit,
  onOpenAnswers,
  onOpenMyAnswer,
  onEditMyAnswer,
}: HeroSectionFormContentProps) => {
  return (
    <div
      className={`transition-all duration-700 ${
        questionDone
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {hasAnswered ? (
        <AnsweredView
          questionId={questionId}
          onOpenAnswers={onOpenAnswers}
          onOpenMyAnswer={onOpenMyAnswer}
          onEditMyAnswer={onEditMyAnswer}
        />
      ) : (
        <UnansweredView
          value={value}
          setValue={onValueChange}
          onSubmit={onSubmit}
          maxLength={maxLength}
        />
      )}
    </div>
  );
};
