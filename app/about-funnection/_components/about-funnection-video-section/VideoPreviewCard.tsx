/* eslint-disable @next/next/no-img-element */

import { Play } from "lucide-react";

import { VIDEO_THUMBNAIL_URL } from "./constants";

interface VideoPreviewCardProps {
  onOpen: () => void;
}

export const VideoPreviewCard = ({ onOpen }: VideoPreviewCardProps) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group smd:max-w-70 mx-auto block w-full max-w-60"
      aria-label="퍼넥션 소개 영상 재생"
    >
      <div className="border-primaryNavy/15 rounded-4xl border bg-[#0B1220] p-2 shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="bg-primaryNavy mx-auto mb-2 h-1.5 w-16 rounded-full" />
        <div className="relative aspect-9/16 overflow-hidden rounded-3xl bg-black">
          <img
            src={VIDEO_THUMBNAIL_URL}
            alt="퍼넥션 소개 영상 썸네일"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="text-primaryNavy inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </span>
            <div className="rounded-full bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              퍼넥션 소개영상
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
