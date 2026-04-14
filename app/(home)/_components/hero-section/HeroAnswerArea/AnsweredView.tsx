"use client";

import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

import { ResponseCard } from "../../main-response-section/ResponseCard";

interface AnsweredViewProps {
  questionId: number;
  onOpenGatheringSection: () => void;
  onOpenAnswers: () => void;
  onOpenMyAnswer: () => void;
}

export const AnsweredView = ({
  questionId,
  onOpenGatheringSection,
  onOpenAnswers,
  onOpenMyAnswer,
}: AnsweredViewProps) => {
  const myAnswer = useCheckAnsweredStore((s) => s.myAnswers[questionId]);
  if (!myAnswer) return null;

  return (
    <div className="w-full max-w-3xl space-y-6">
      <ResponseCard
        variant="bottom-sheet"
        answerInfo={myAnswer}
        isMine
        onOpenDetail={onOpenMyAnswer}
      />
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
