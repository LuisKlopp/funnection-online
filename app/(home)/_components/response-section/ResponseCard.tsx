"use client";

import { useRef } from "react";

import { useDoubleTap } from "@/hooks/ui/useDoubleTap";
import { iconMap } from "@/types/response.types";

import { LikeButton, LikeButtonRef } from "./LikeButton";

interface ResponseCardProps {
  icon: keyof typeof iconMap;
  iconBg: string;
  content: string;
  likes: number;
}

export const ResponseCard = ({
  icon,
  iconBg,
  content,
  likes,
}: ResponseCardProps) => {
  const Icon = iconMap[icon];
  const likeRef = useRef<LikeButtonRef>(null);

  const triggerLike = () => {
    likeRef.current?.triggerLike();
  };

  const detectDoubleTap = useDoubleTap(triggerLike);

  return (
    <div
      onPointerUp={detectDoubleTap}
      className="relative rounded-3xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
    >
      <div className="absolute top-6 left-0 h-12 w-0.75 rounded-r-full bg-indigo-400" />

      <div className="absolute top-6 right-6">
        <LikeButton ref={likeRef} likes={likes} />
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-500">익명</span>
      </div>

      <p className="text-[15px] leading-relaxed text-gray-700">{content}</p>
    </div>
  );
};
