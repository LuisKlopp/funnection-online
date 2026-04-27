/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Portal } from "@/components/layout/PortalWrapper";
import { FUNNECTION_PHOTOS } from "@/constants/funnection-photos.constants";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";

interface MainFunnectionImageModalProps {
  initialIndex?: number;
  onClose: () => void;
}

export const MainFunnectionImageModal = ({
  initialIndex = 0,
  onClose,
}: MainFunnectionImageModalProps) => {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useLockBodyScroll();

  const moveTo = useCallback((nextIndex: number) => {
    setIndex(
      (nextIndex + FUNNECTION_PHOTOS.length) % FUNNECTION_PHOTOS.length
    );
  }, []);

  const prev = useCallback(() => {
    moveTo(index - 1);
  }, [index, moveTo]);

  const next = useCallback(() => {
    moveTo(index + 1);
  }, [index, moveTo]);

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

  const activePhoto = FUNNECTION_PHOTOS[index];

  return (
    <Portal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/82 px-4 py-5 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-full max-w-4xl flex-col justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-white/58 uppercase">
                  Funnection Album
                </p>
                <p className="mt-1 text-sm font-semibold text-white/92">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(FUNNECTION_PHOTOS.length).padStart(2, "0")}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition hover:bg-gray-1"
                aria-label="앨범 사진 닫기"
              >
                <X className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>

            <div
              className="relative mx-auto flex w-fit max-w-[calc(100vw-32px)] items-center justify-center overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_28px_90px_rgba(0,0,0,0.4)] smd:max-w-4xl smd:rounded-[32px] smd:p-5"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={activePhoto.src}
                alt={`퍼넥션 앨범 사진 ${index + 1}`}
                draggable={false}
                className="max-h-[58vh] max-w-[calc(100vw-64px)] rounded-[18px] object-contain select-none smd:max-h-[64vh] smd:max-w-[calc(56rem-40px)] smd:rounded-[24px]"
              />

              <button
                type="button"
                onClick={prev}
                className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/72 text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur transition hover:bg-black smd:left-5 smd:h-12 smd:w-12"
                aria-label="이전 앨범 사진 보기"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.3} />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/72 text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur transition hover:bg-black smd:right-5 smd:h-12 smd:w-12"
                aria-label="다음 앨범 사진 보기"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.3} />
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {FUNNECTION_PHOTOS.map((photo, i) => (
                <button
                  key={`main-modal-dot-${photo.src}-${i}`}
                  type="button"
                  onClick={() => moveTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-white" : "w-2 bg-white/35"
                  }`}
                  aria-label={`${i + 1}번째 앨범 사진 보기`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
};
