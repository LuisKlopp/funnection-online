"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { AnswerType } from "@/types/answer.type";

interface HeroAnswerCardProps {
  answerInfo: AnswerType;
  onOpenDetail: () => void;
}

export const HeroAnswerCard = ({
  answerInfo,
  onOpenDetail,
}: HeroAnswerCardProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const isMale = answerInfo.gender === "male";

  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    setIsOverflow(el.scrollHeight > el.clientHeight);
  }, [answerInfo.content]);

  return (
    <div className="smd:mt-6 mx-auto mt-2 flex w-full max-w-100 items-start gap-2">
      <div
        className={cn(
          "relative w-full rounded-2xl bg-white px-4 pt-7 pb-3 text-left"
        )}
      >
        <span
          className={cn(
            "absolute top-0 left-3 z-10 inline-flex -translate-y-1/2 rounded-full px-3 py-1.5 text-[14px] font-medium whitespace-nowrap",
            isMale
              ? "border-primaryNavy text-primaryNavy border-2 bg-white"
              : "border-2 border-pink-400 bg-white text-pink-400"
          )}
        >
          내 답변
        </span>
        <div
          className={cn(
            "absolute right-10 bottom-0 h-1 w-12 rounded-full",
            isMale ? "bg-primaryNavy/70" : "bg-pink-700/70"
          )}
        />
        <div className="relative">
          <p
            ref={textRef}
            className="text-gray-6 font-nanum line-clamp-3 overflow-hidden text-left text-lg leading-5.5 wrap-break-word text-ellipsis"
          >
            {answerInfo.content}
          </p>

          {isOverflow && (
            <button
              type="button"
              onClick={onOpenDetail}
              className="mt-2 inline-flex items-center gap-1 text-xs text-gray-400"
            >
              자세히보기
              <ChevronDown className="h-3 w-3" />
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
        </div>
      </div>
    </div>
  );
};
