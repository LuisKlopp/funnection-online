"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLikeAnswerMutation } from "@/hooks/react-query/useLikeAnswerMutation";
import { useDoubleTap } from "@/hooks/ui/useDoubleTap";
import { cn, formatAgeGroup, getGenderEmoji } from "@/lib/utils";
import { AnswerType } from "@/types/answer.type";

import { LikeButton, LikeButtonRef } from "./LikeButton";

interface ResponsePreviewCardProps {
  answerInfo: AnswerType;
}

export const ResponsePreviewCard = ({
  answerInfo,
}: ResponsePreviewCardProps) => {
  const likeRef = useRef<LikeButtonRef>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { likeOne, isPending: isLikePending } = useLikeAnswerMutation(
    answerInfo.questionId
  );

  const likeDisabled = isLikePending;
  const isMale = answerInfo.gender === "male";

  const [expanded, setExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const handleLike = async () => {
    const result = await likeOne(answerInfo.id);

    if (!result.ok) {
      alert(result.message);
    }
  };

  const triggerLike = () => {
    if (likeDisabled) return;
    likeRef.current?.triggerLike();
  };

  const detectDoubleTap = useDoubleTap(triggerLike);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    setIsOverflow(el.scrollHeight > el.clientHeight);
  }, [answerInfo.content]);

  return (
    <div className="mx-auto flex w-full max-w-100 items-start gap-2">
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "bg-lightNavy rounded-full px-2 py-2",
            isMale ? "bg-primaryNavy/40" : "bg-pink-700/40"
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
      <div
        onPointerUp={detectDoubleTap}
        className={cn(
          "box-shadow-2 border-primaryNavy/60 relative w-full rounded-2xl border-2 bg-white px-4 py-3",
          isMale ? "border-primaryNavy/60" : "border-pink-700/40"
        )}
      >
        <div
          className={cn(
            "absolute right-10 bottom-0 h-1 w-12 rounded-full",
            isMale ? "bg-primaryNavy/70" : "bg-pink-700/70"
          )}
        />

        <div className="relative">
          <p
            ref={textRef}
            className={cn(
              "text-gray-7 overflow-hidden text-[14px] wrap-break-word text-ellipsis",
              !expanded && "line-clamp-2 leading-5.5",
              expanded && "leading-5.5"
            )}
          >
            {answerInfo.content}
          </p>

          {isOverflow && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="absolute right-0 bottom-0 flex items-center gap-1 bg-white pl-2 text-xs text-gray-400"
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
        <div className="flex w-full justify-between">
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
          <LikeButton
            ref={likeRef}
            likes={answerInfo.likeCount}
            liked={answerInfo.likedByMe}
            disabled={false}
            isPending={isLikePending}
            onLike={handleLike}
          />
        </div>
      </div>
    </div>
  );
};
