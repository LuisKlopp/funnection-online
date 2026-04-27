"use client";

import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { ResponseCard } from "@/app/(home)/_components/main-response-section/ResponseCard";
import { Portal } from "@/components/layout/PortalWrapper";
import { useResponsesQuery } from "@/hooks/react-query/useResponsesQuery";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { cn, formatAgeGroup } from "@/lib/utils";
import { useQuestionStore } from "@/store/question.store";
import { useUserInfoStore } from "@/store/userInfo.store";
import { AnswerType } from "@/types/answer.type";

import { BottomSheet } from "./BottomSheet";

const EMPTY_ANSWERS: AnswerType[] = [];
const ANSWER_LIST_SNAP_POINTS = [0, 0.65, 0.9, 1];
const FULLY_EXPANDED_SNAP_INDEX = ANSWER_LIST_SNAP_POINTS.length - 1;

const sortAnswersByLike = (
  a: { likeCount: number; createdAt: string },
  b: { likeCount: number; createdAt: string }
) => {
  if (b.likeCount !== a.likeCount) {
    return b.likeCount - a.likeCount;
  }

  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
};

export const BottomAnswerListModal = ({ onClose }: { onClose: () => void }) => {
  useLockBodyScroll();
  const [isSheetExpanded, setIsSheetExpanded] = useState(false);
  const [showSameAgeOnly, setShowSameAgeOnly] = useState(false);
  const [answerOrder, setAnswerOrder] = useState<number[]>([]);

  const question = useQuestionStore((s) => s.question);
  const userInfo = useUserInfoStore((s) => s.userInfo);
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
          .filter((answer): answer is (typeof answers)[number] =>
            Boolean(answer)
          )
      : [...answers].sort(sortAnswersByLike);
  const visibleAnswers =
    showSameAgeOnly && userInfo
      ? orderedAnswers.filter((answer) => answer.ageGroup === userInfo.ageGroup)
      : orderedAnswers;
  const answerCountLabel = showSameAgeOnly
    ? `같은 연령대 답변 ${visibleAnswers.length}개`
    : `총 ${answers.length}개`;

  if (!data) return null;

  return (
    <Portal>
      <BottomSheet
        isOpen={true}
        onClose={onClose}
        snapPoints={ANSWER_LIST_SNAP_POINTS}
        initialSnap={2}
        dragVelocityThreshold={1200}
        onSnap={(index) =>
          setIsSheetExpanded(index === FULLY_EXPANDED_SNAP_INDEX)
        }
        contentClassName="h-full pb-0"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex items-start justify-between gap-4 px-6 py-4">
            <div className="min-w-0">
              <h2 className="text-gray-8 text-lg font-semibold">전체 답변</h2>
              <p className="text-gray-4 mt-1 text-xs">
                좋아요 많은 순 · {answerCountLabel}
              </p>
              {userInfo && (
                <button
                  type="button"
                  onClick={() => setShowSameAgeOnly((prev) => !prev)}
                  className={cn(
                    "mt-1 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                    showSameAgeOnly
                      ? "border-primaryNavy bg-primaryNavy text-white"
                      : "border-primaryNavy/20 text-primaryNavy bg-white"
                  )}
                >
                  {showSameAgeOnly ? "전체 답변 보기" : "내 연령대 답변 보기"}
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="bg-primaryNavy/85 shrink-0 rounded-full p-2"
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
            {visibleAnswers.length > 0 ? (
              <div className="space-y-4">
                {visibleAnswers.map((answer) => (
                  <ResponseCard
                    key={answer.id}
                    answerInfo={answer}
                  />
                ))}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center pb-12 text-center">
                <p className="text-gray-5 text-sm leading-6">
                  {userInfo
                    ? `${formatAgeGroup(userInfo.ageGroup)} 답변이 아직 없어요.`
                    : "표시할 답변이 없어요."}
                </p>
              </div>
            )}
          </div>
        </div>
      </BottomSheet>
    </Portal>
  );
};
