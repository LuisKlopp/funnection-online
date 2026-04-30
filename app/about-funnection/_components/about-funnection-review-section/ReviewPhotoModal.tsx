/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Portal } from "@/components/layout/PortalWrapper";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";

interface ReviewPhotoModalProps {
  initialIndex: number;
  onClose: () => void;
  photos: readonly string[];
}

export const ReviewPhotoModal = ({
  initialIndex,
  onClose,
  photos,
}: ReviewPhotoModalProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useLockBodyScroll();

  const moveTo = useCallback(
    (nextIndex: number) => {
      setActiveIndex((nextIndex + photos.length) % photos.length);
    },
    [photos.length]
  );

  const prev = useCallback(() => {
    moveTo(activeIndex - 1);
  }, [activeIndex, moveTo]);

  const next = useCallback(() => {
    moveTo(activeIndex + 1);
  }, [activeIndex, moveTo]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, onClose, prev]);

  if (photos.length === 0) return null;

  const activePhoto = photos[activeIndex];
  const hasMultiplePhotos = photos.length > 1;

  return (
    <Portal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="smd:py-10 fixed inset-0 z-9999 flex items-center justify-center bg-black/82 px-4 py-8 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="smd:max-h-[calc(100dvh-80px)] relative flex max-h-[calc(100dvh-64px)] w-full max-w-100 flex-col justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="smd:mb-3 mx-auto mb-2 flex w-full items-center justify-between gap-3 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-white/58 uppercase">
                  Funnection Reviews
                </p>
                <p className="mt-1 text-sm font-semibold text-white/92">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(photos.length).padStart(2, "0")}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center text-white transition hover:text-white/72"
                aria-label="리뷰 사진 닫기"
              >
                <X className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>

            <div className="relative mx-auto w-full">
              <div className="smd:rounded-4xl smd:p-5 relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-3xl bg-white p-4 shadow-[0_28px_90px_rgba(0,0,0,0.4)]">
                <img
                  src={activePhoto}
                  alt={`퍼넥션 참여자 리뷰 ${activeIndex + 1}`}
                  draggable={false}
                  className="smd:rounded-3xl max-h-[calc(100dvh-240px)] max-w-full rounded-[18px] object-contain select-none"
                />
              </div>

              {hasMultiplePhotos && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="smd:h-11 smd:w-11 smd:-left-3 absolute top-1/2 -left-1 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/72 text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur transition hover:bg-black"
                    aria-label="이전 리뷰 사진 보기"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={2.3} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="smd:h-11 smd:w-11 smd:-right-3 absolute top-1/2 -right-1 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/72 text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur transition hover:bg-black"
                    aria-label="다음 리뷰 사진 보기"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={2.3} />
                  </button>
                </>
              )}
            </div>

            {hasMultiplePhotos && (
              <div className="smd:mt-4 mx-auto mt-3 flex w-full justify-center gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {photos.map((photoUrl, index) => (
                  <button
                    key={`review-modal-dot-${photoUrl}-${index}`}
                    type="button"
                    onClick={() => moveTo(index)}
                    className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/35"
                    }`}
                    aria-label={`${index + 1}번째 리뷰 사진 보기`}
                    aria-current={activeIndex === index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
};
