/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Portal } from "@/components/layout/PortalWrapper";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";

import { BadgeAboutFunnection } from "./BadgeAboutFunnection";

const YOUTUBE_EMBED_URL =
  "https://www.youtube.com/embed/3TB0B6fQ2Ys?playsinline=1&rel=0";
const VIDEO_THUMBNAIL_URL = "/images/funnection-video-thumb.webp";

const VideoModal = ({ onClose }: { onClose: () => void }) => {
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
            className="flex w-full max-w-95 flex-col items-center gap-3"
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

export const AboutFunnectionVideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <BadgeAboutFunnection
            icon={PlayCircle}
            text="Funnection in Video"
            className="mt-0"
          />
          <div className="smd:grid-cols-[minmax(0,1fr)_auto] mt-6 grid items-center gap-8">
            <div className="smd:mx-0 smd:items-start smd:text-left mx-auto flex max-w-2xl flex-col">
              <p className="text-primaryNavy text-base font-semibold">
                Fun + Connection
              </p>
              <h2 className="text-gray-8 smd:text-4xl mt-2 text-2xl font-bold tracking-tight">
                재밌게 연결되는 순간을 담았어요
              </h2>
              <div className="bg-lightNavy text-gray-6 border-primaryNavy/10 mt-4 rounded-2xl border px-3 py-2 text-center text-sm">
                퍼넥션이 어떤 온도의 공간인지 먼저 느껴보세요
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
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
                      퍼넥션 소개영상을 봐요
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      {isOpen && <VideoModal onClose={() => setIsOpen(false)} />}
    </>
  );
};
