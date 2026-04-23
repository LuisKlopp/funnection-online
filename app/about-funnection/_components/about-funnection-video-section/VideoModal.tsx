"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { Portal } from "@/components/layout/PortalWrapper";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";

import { YOUTUBE_EMBED_URL } from "./constants";

interface VideoModalProps {
  onClose: () => void;
}

export const VideoModal = ({ onClose }: VideoModalProps) => {
  useLockBodyScroll();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <Portal>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-120 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="smd:max-w-95 flex w-full max-w-[320px] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-black/50 px-3 py-2 text-xs text-white transition hover:bg-black/65"
              aria-label="영상 닫기"
            >
              영상 닫기
            </button>
            <div className="border-primaryNavy/15 w-full rounded-4xl border bg-[#0B1220] p-2 shadow-[0_32px_90px_rgba(15,23,42,0.35)]">
              <div className="bg-primaryNavy/80 mx-auto mb-2 h-1.5 w-16 rounded-full" />
              <div className="aspect-9/16 overflow-hidden rounded-3xl bg-black">
                <iframe
                  src={`${YOUTUBE_EMBED_URL}&autoplay=1`}
                  title="퍼넥션 소개 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Portal>
  );
};
