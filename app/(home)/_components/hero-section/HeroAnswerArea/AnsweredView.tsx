"use client";

import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

import { ResponseCard } from "../../main-response-section/ResponseCard";

interface AnsweredViewProps {
  questionId: number;
  onOpenAnswers: () => void;
}

export const AnsweredView = ({
  questionId,
  onOpenAnswers,
}: AnsweredViewProps) => {
  const myAnswer = useCheckAnsweredStore((s) => s.myAnswers[questionId]);
  if (!myAnswer) return null;

  return (
    <div className="w-full max-w-3xl space-y-6">
      <ResponseCard variant="bottom-sheet" answerInfo={myAnswer} />
      <div className="flex flex-col gap-3">
        <button
          onClick={onOpenAnswers}
          className="bg-primaryNavy box-shadow-1 rounded-xl px-4 py-3 text-sm text-white"
        >
          이 질문, 사람들과 나눠볼래요?
        </button>

        <button className="text-primaryNavy box-shadow-1 rounded-xl border bg-white px-4 py-3 text-sm">
          다른 사람들은 뭐라고 답했을까요?
        </button>
      </div>
    </div>
  );
};
