"use client";

import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

import { ResponseCard } from "../../main-response-section/ResponseCard";

interface AnsweredViewProps {
  questionId: number;
  onOpenGatheringSection: () => void;
  onOpenAnswers: () => void;
  onOpenMyAnswer: () => void;
  onEditMyAnswer: () => void;
}

export const AnsweredView = ({
  questionId,
  onOpenGatheringSection,
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
        <ResponseCard
          variant="bottom-sheet"
          answerInfo={myAnswer}
          isMine
          onOpenDetail={onOpenMyAnswer}
        />
      </div>
      <div className="mx-auto flex max-w-100 flex-col gap-3">
        <button
          onClick={onOpenGatheringSection}
          className="bg-primaryNavy btn-press-in box-shadow-1 rounded-xl px-4 py-3 text-sm text-white"
        >
          이 질문, 사람들과 만나서 얘기해볼까요?
        </button>

        <button
          onClick={onOpenAnswers}
          className="text-primaryNavy btn-press-in box-shadow-1 rounded-xl border bg-white px-4 py-3 text-sm"
        >
          다른 사람들은 어떻게 답했을까?
        </button>
      </div>
    </div>
  );
};
