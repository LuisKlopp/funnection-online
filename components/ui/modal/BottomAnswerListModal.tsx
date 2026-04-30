"use client";

import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
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
  const [currentSnapIndex, setCurrentSnapIndex] = useState(2);
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
  const showFunnectionCta = visibleAnswers.length >= 6;
  const answerListBottomPadding =
    currentSnapIndex <= 1
      ? "pb-40"
      : currentSnapIndex === FULLY_EXPANDED_SNAP_INDEX
        ? "pb-8"
        : "pb-24";

  if (!data) return null;

  return (
    <Portal>
      <BottomSheet
        isOpen={true}
        onClose={onClose}
        snapPoints={ANSWER_LIST_SNAP_POINTS}
        initialSnap={2}
        dragVelocityThreshold={1200}
        onSnap={(index) => setCurrentSnapIndex(index)}
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
          <div className="mx-auto my-2 h-px w-[40%] shrink-0" />
          <div
            className={cn(
              "flex-1 overflow-y-auto px-6",
              answerListBottomPadding
            )}
          >
            {visibleAnswers.length > 0 ? (
              <div className="space-y-4">
                {visibleAnswers.map((answer) => (
                  <ResponseCard key={answer.id} answerInfo={answer} />
                ))}
                {showFunnectionCta && (
                  <div className="bg-gray-8 mx-auto w-full max-w-100 rounded-2xl px-5 py-5 text-white shadow-[0_18px_45px_rgba(17,24,39,0.18)]">
                    <h3 className="mt-2 text-lg leading-6 font-semibold break-keep">
                      이런 질문들을 만나서 나눠보고 싶다면
                    </h3>
                    <p className="mt-2 text-sm leading-6 break-keep text-white/72">
                      퍼넥션에서 서로의 답을 듣고, 내 생각도 천천히 꺼내볼 수
                      있어요.
                    </p>
                    <Link
                      href="/about-funnection"
                      onClick={onClose}
                      className="bg-primaryAmber mt-4 inline-flex w-full items-center justify-center gap-1 rounded-xl px-4 py-3 text-sm font-bold text-white transition hover:brightness-105 active:translate-y-px"
                    >
                      퍼넥션 자세히 알아보기
                      <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
                    </Link>
                  </div>
                )}
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
