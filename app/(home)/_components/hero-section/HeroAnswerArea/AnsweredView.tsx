"use client";

import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

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
      <div className="bg-lightNavy rounded-2xl p-4 text-left">
        <span className="text-primaryNavy text-xs font-medium">내 답변</span>
        <p className="text-gray-8 mt-2 text-sm leading-5">{myAnswer.content}</p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={onOpenAnswers}
          className="bg-primaryNavy rounded-xl px-4 py-3 text-sm text-white"
        >
          다른 사람들은 이렇게 답했어요 →
        </button>

        <button className="border-primaryNavy text-primaryNavy rounded-xl border px-4 py-3 text-sm">
          이 질문으로 대화하는 모임 구경하기 →
        </button>
      </div>
    </div>
  );
};
