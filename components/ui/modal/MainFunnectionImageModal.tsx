/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useModal } from "@/hooks/ui/useModal";
import photo1 from "@/public/images/main-funnection-image/photo-1.webp";
import photo2 from "@/public/images/main-funnection-image/photo-2.webp";
import photo3 from "@/public/images/main-funnection-image/photo-3.webp";
import photo4 from "@/public/images/main-funnection-image/photo-4.webp";
import photo5 from "@/public/images/main-funnection-image/photo-5.webp";
import photo6 from "@/public/images/main-funnection-image/photo-6.webp";
import photo7 from "@/public/images/main-funnection-image/photo-7.webp";
import photo8 from "@/public/images/main-funnection-image/photo-8.webp";
import photo9 from "@/public/images/main-funnection-image/photo-9.webp";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

export const MainFunnectionImageModal = () => {
  const { closeModal } = useModal("funnection-image");

  const [index, setIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);

  useLockBodyScroll();

  const prev = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-4 bg-black/95"
      onClick={closeModal}
    >
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 z-20 text-white"
      >
        <X size={28} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="z-20 flex w-full justify-center"
      >
        <p className="text-lightNavy smd:text-2xl font-nanum text-lg">
          퍼넥션에서 함께한 순간들
        </p>
      </div>

      <div
        className="relative z-10 flex w-full max-w-125 items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative flex min-w-full items-center justify-center"
            >
              <img
                src={photo.src}
                alt="funnection meeting"
                draggable={false}
                className="max-h-full w-full rounded-2xl object-contain select-none"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prev}
          className="absolute top-1/2 left-6 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-1 text-white backdrop-blur"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-1 text-white backdrop-blur"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div
        className="flex gap-3 rounded-xl bg-black/50 px-4 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "bg-gray-4 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
