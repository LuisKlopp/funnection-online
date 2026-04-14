"use client";

import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { ResponseCard } from "@/app/(home)/_components/main-response-section/ResponseCard";
import { Portal } from "@/components/layout/PortalWrapper";
import { useResponsesQuery } from "@/hooks/react-query/useResponsesQuery";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useQuestionStore } from "@/store/question.store";
import { AnswerType } from "@/types/answer.type";

import { BottomSheet } from "./BottomSheet";

const EMPTY_ANSWERS: AnswerType[] = [];

const sortAnswersByLike = (
  a: { likeCount: number; createdAt: string },
  b: { likeCount: number; createdAt: string }
) => {
  if (b.likeCount !== a.likeCount) {
    return b.likeCount - a.likeCount;
  }

  return (
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

export const BottomAnswerListModal = ({ onClose }: { onClose: () => void }) => {
  useLockBodyScroll();
  const [isSheetExpanded, setIsSheetExpanded] = useState(false);
  const [answerOrder, setAnswerOrder] = useState<number[]>([]);

  const question = useQuestionStore((s) => s.question);
  const { data } = useResponsesQuery(question?.id, "like", undefined, "always");
  const answers = data?.answers ?? EMPTY_ANSWERS;
  const answersById = useMemo(
    () => new Map(answers.map((answer) => [answer.id, answer])),
    [answers]
  );

  useEffect(() => {
    if (!answers.length) {
      setAnswerOrder((prev) => (prev.length ? [] : prev));
      return;
    }

    setAnswerOrder((prev) => {
      const isSameOrder = (next: number[]) =>
        prev.length === next.length &&
        prev.every((answerId, index) => answerId === next[index]);

      if (!prev.length) {
        const next = [...answers]
          .sort(sortAnswersByLike)
          .map((answer) => answer.id);

        return isSameOrder(next) ? prev : next;
      }

      const nextOrder = prev.filter((id) => answersById.has(id));
      const existingIds = new Set(nextOrder);
      const newIds = answers
        .filter((answer) => !existingIds.has(answer.id))
        .sort(sortAnswersByLike)
        .map((answer) => answer.id);

      const next = [...nextOrder, ...newIds];

      return isSameOrder(next) ? prev : next;
    });
  }, [answers, answersById]);

  const orderedAnswers =
    answerOrder.length > 0
      ? answerOrder
          .map((answerId) => answersById.get(answerId))
          .filter((answer): answer is (typeof answers)[number] => Boolean(answer))
      : [...answers].sort(sortAnswersByLike);

  if (!data) return null;

  return (
    <Portal>
      <BottomSheet
        isOpen={true}
        onClose={onClose}
        onSnap={(index) => setIsSheetExpanded(index === 2)}
        contentClassName="h-full pb-0"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-gray-8 text-lg font-semibold">전체 답변</h2>
              <p className="text-gray-4 text-xs">
                좋아요 많은 순 · 총 {answers.length}개
              </p>
            </div>

            <button
              onClick={onClose}
              className="bg-primaryNavy/85 rounded-full p-2"
            >
              <X size={18} className="text-white" />
            </button>
          </div>
          <div className="bg-primaryNavy/30 mx-auto my-2 h-px w-[40%] shrink-0" />
          <div
            className={`flex-1 overflow-y-auto px-6 ${
              isSheetExpanded ? "pb-4" : "pb-20"
            }`}
          >
            <div className="space-y-4">
              {orderedAnswers.map((answer) => (
                <ResponseCard
                  key={answer.id}
                  answerInfo={answer}
                  variant="bottom-sheet"
                  isMine={false}
                />
              ))}
            </div>
          </div>
        </div>
      </BottomSheet>
    </Portal>
  );
};
