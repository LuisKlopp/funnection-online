"use client";

import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

import { HeroAnswerCard } from "./HeroAnswerCard";

interface AnsweredViewProps {
  questionId: number;
  onOpenAnswers: () => void;
  onOpenMyAnswer: () => void;
  onEditMyAnswer: () => void;
}

export const AnsweredView = ({
  questionId,
  onOpenAnswers,
  onOpenMyAnswer,
  onEditMyAnswer,
}: AnsweredViewProps) => {
  const myAnswer = useCheckAnsweredStore((s) => s.myAnswers[questionId]);
  if (!myAnswer) return null;

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="relative mx-auto w-full max-w-100">
        <button
          type="button"
          aria-label="내 답변 수정하기"
          onClick={onEditMyAnswer}
          className="absolute top-0 right-0 z-10 flex h-9 w-9 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full border border-white/70 bg-[#fff6d8] text-lg shadow-md transition-transform hover:scale-105"
        >
          ✏️
        </button>
        <HeroAnswerCard answerInfo={myAnswer} onOpenDetail={onOpenMyAnswer} />
      </div>
      <div className="mx-auto flex max-w-100 flex-col gap-3">
        <button
          onClick={onOpenAnswers}
          className="btn-press-in box-shadow-2 bg-primaryNavy/85 rounded-xl px-4 py-3 text-sm text-white"
        >
          다른 사람들의 답변 보기
        </button>
      </div>
    </div>
  );
};
