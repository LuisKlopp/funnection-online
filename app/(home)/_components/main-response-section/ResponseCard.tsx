"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useDoubleTap } from "@/hooks/ui/useDoubleTap";
import { cn, formatAgeGroup, getGenderEmoji } from "@/lib/utils";
import { HomeAnswer } from "@/types/home.type";

import { LikeButton, LikeButtonRef } from "./LikeButton";

interface ResponseCardProps {
  variant: "preview" | "bottom-sheet";
  answerInfo: HomeAnswer;
}

export const ResponseCard = ({ variant, answerInfo }: ResponseCardProps) => {
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
    if (!el || isSheet) return;

    if (el.scrollHeight > el.clientHeight) {
      setIsOverflow(true);
    }
  }, [isSheet]);

  return (
    <div
      onPointerUp={detectDoubleTap}
      className="box-shadow-2 relative rounded-3xl bg-white px-4 py-4"
    >
      <div
        className={cn(
          "absolute right-10 bottom-0 h-1 w-22 rounded-full",
          answerInfo.gender === "male" ? "bg-primaryNavy/70" : "bg-pink-700"
        )}
      />

      <div className="flex justify-between">
        <div className="mb-2 flex items-center gap-1">
          {/* <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full",
              iconBg
            )}
          >
            <Icon className="h-3 w-3 text-white" />
          </div> */}

          <div className="bg-lightNavy rounded-2xl px-2 py-1">
            <p className="text-gray-5 text-xs font-medium">
              {formatAgeGroup(answerInfo.ageGroup)}
            </p>
          </div>
          <p className="text-gray-5 text-sm font-medium">
            {getGenderEmoji(answerInfo.gender)}
          </p>
        </div>

        <LikeButton ref={likeRef} likes={answerInfo.likeCount} />
      </div>

      <div className="relative">
        <p
          ref={textRef}
          className={cn(
            "text-gray-5 leading-relaxed break-keep",
            isSheet ? "text-[13px] leading-5" : "text-[15px]",
            !isSheet && !expanded && "line-clamp-2 pr-12 leading-5.5",
            !isSheet && expanded && "leading-5.5"
          )}
        >
          {answerInfo.content}
        </p>

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
    </div>
  );
};
