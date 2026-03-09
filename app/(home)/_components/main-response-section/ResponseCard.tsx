"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useDoubleTap } from "@/hooks/ui/useDoubleTap";
import { iconMap } from "@/types/response.types";

import { LikeButton, LikeButtonRef } from "./LikeButton";

interface ResponseCardProps {
  icon: keyof typeof iconMap;
  iconBg: string;
  content: string;
  likes: number;
  profile: string;
}

export const ResponseCard = ({
  icon,
  iconBg,
  content,
  likes,
  profile,
}: ResponseCardProps) => {
  const Icon = iconMap[icon];
  const likeRef = useRef<LikeButtonRef>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const triggerLike = () => {
    likeRef.current?.triggerLike();
  };

  const detectDoubleTap = useDoubleTap(triggerLike);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    if (el.scrollHeight > el.clientHeight) {
      setIsOverflow(true);
    }
  }, []);

  return (
    <div
      onPointerUp={detectDoubleTap}
      className="box-shadow-2 relative rounded-3xl bg-white px-6 py-4"
    >
      <div className="absolute top-7 left-0 h-14 w-0.75 rounded-r-full bg-indigo-400" />

      <div className="flex justify-between">
        <div className="mb-2 flex items-center gap-3">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full ${iconBg}`}
          >
            <Icon className="h-4 w-4 text-white" />
          </div>
          <div className="bg-lightNavy rounded-2xl px-2 py-1">
            <p className="text-gray-5 text-sm font-medium">{profile}</p>
          </div>
        </div>
        <LikeButton ref={likeRef} likes={likes} />
      </div>

      <div className="relative">
        <p
          ref={textRef}
          className={`text-gray-5 text-[15px] leading-relaxed break-keep ${
            expanded ? "" : "line-clamp-2 pr-20"
          }`}
        >
          {content}
        </p>

        {isOverflow && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="absolute right-0 bottom-0 flex items-center gap-1 bg-white pl-2 text-xs text-gray-400"
          >
            {expanded ? "접기" : "더보기"}
            <ChevronDown
              className={`h-3 w-3 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};
