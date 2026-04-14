"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useDoubleTap } from "@/hooks/ui/useDoubleTap";
import { cn, formatAgeGroup, getGenderEmoji } from "@/lib/utils";
import { AnswerType } from "@/types/answer.type";

import { LikeButton, LikeButtonRef } from "./LikeButton";

interface ResponseCardProps {
  variant: "preview" | "bottom-sheet";
  answerInfo: AnswerType;
  isMine?: boolean;
  onOpenDetail?: () => void;
}

export const ResponseCard = ({
  variant,
  answerInfo,
  isMine = false,
  onOpenDetail,
}: ResponseCardProps) => {
  const likeRef = useRef<LikeButtonRef>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const isSheet = variant === "bottom-sheet";

  const [expanded, setExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const triggerLike = () => {
    likeRef.current?.triggerLike();
  };

  const detectDoubleTap = useDoubleTap(triggerLike);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    if (isSheet && !isMine) return;

    setIsOverflow(el.scrollHeight > el.clientHeight);
  }, [answerInfo.content, isMine, isSheet]);

  return (
    <div className="mx-auto flex w-full max-w-100 items-start gap-2">
      {!isMine && (
        <div className="flex flex-col gap-1">
          <div
            className={cn(
              "bg-lightNavy rounded-full px-2 py-2",
              answerInfo.gender === "male"
                ? "bg-primaryNavy/40"
                : "bg-pink-700/40"
            )}
          >
            <p className="text-gray-5 text-sm font-medium">
              {getGenderEmoji(answerInfo.gender)}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-5 text-xs font-medium">
              {formatAgeGroup(answerInfo.ageGroup)}
            </p>
          </div>
        </div>
      )}
      <div
        onPointerUp={isMine ? undefined : detectDoubleTap}
        className={cn(
          "box-shadow-2 border-primaryNavy/60 relative w-full rounded-2xl border-2 bg-white px-4 py-3",
          isMine && "text-left",
          answerInfo.gender === "male"
            ? "border-primaryNavy/60"
            : "border-pink-700/40"
        )}
      >
        <div
          className={cn(
            "absolute right-10 bottom-0 h-1 w-12 rounded-full",
            answerInfo.gender === "male"
              ? "bg-primaryNavy/70"
              : "bg-pink-700/70"
          )}
        />

        <div className="relative">
          {isMine && (
            <div className="mb-2">
              <span className="bg-primaryNavy/10 text-primaryNavy inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold">
                내 답변
              </span>
            </div>
          )}

          <p
            ref={textRef}
            className={cn(
              "text-gray-7 wrap-break-word overflow-hidden text-ellipsis leading-relaxed",
              isMine && "text-left",
              isSheet ? "text-[13px] leading-5" : "text-[14px]",
              isMine && "line-clamp-3",
              !isSheet && !expanded && "line-clamp-2 leading-5.5",
              !isSheet && expanded && "leading-5.5"
            )}
          >
            {answerInfo.content}
          </p>

          {isMine && isOverflow && onOpenDetail && (
            <button
              onClick={onOpenDetail}
              className="mt-2 inline-flex items-center gap-1 text-xs text-gray-400"
            >
              자세히보기
              <ChevronDown className="h-3 w-3" />
            </button>
          )}

          {!isSheet && isOverflow && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className={cn(
                "absolute right-0 bottom-0 flex items-center gap-1 bg-white pl-2 text-xs text-gray-400"
              )}
            >
              {expanded ? "접기" : "더보기"}
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform",
                  expanded && "rotate-180"
                )}
              />
            </button>
          )}
        </div>
        <div className="border-gray-2 mx-auto my-2 w-[90%] border-t" />
        <div
          className={cn(
            "flex w-full",
            isMine ? "justify-start" : "justify-between"
          )}
        >
          <div className="flex items-center gap-1">
            <div
              className={cn(
                "bg-primaryNavy/80 h-2 w-2 rounded-full",
                answerInfo.gender === "male"
                  ? "bg-primaryNavy/60"
                  : "bg-pink-700/40"
              )}
            />
            <p className="text-gray-5 text-xs">{answerInfo.nickname}</p>
          </div>
          {!isMine && <LikeButton ref={likeRef} likes={answerInfo.likeCount} />}
        </div>
      </div>
    </div>
  );
};
