"use client";

import { HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { cn, smoothScrollTo } from "@/lib/utils";

import { HeroSectionFormQuestion } from "./HeroSectionFormQuestion";
import { HeroSectionOfflineBanner } from "./HeroSectionOfflineBanner";

interface HeroSectionFormProps {
  visible: boolean;
  skipTyping: boolean;
}
export const HeroSectionForm = ({
  visible,
  skipTyping,
}: HeroSectionFormProps) => {
  const [value, setValue] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const [questionDone, setQuestionDone] = useState(false);

  const maxLength = 500;

  const handleScroll = () => {
    const section = document.getElementById("responses");
    if (!section) return;

    const headerOffset = 80;
    const elementPosition =
      section.getBoundingClientRect().top + window.scrollY;

    const targetY = elementPosition - headerOffset;

    smoothScrollTo(targetY, 900);
  };

  useEffect(() => {
    if (!visible) return;

    if (skipTyping) {
      setStartTyping(true);
      setQuestionDone(true);
      return;
    }

    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 600);

    return () => clearTimeout(timer);
  }, [visible, skipTyping]);

  return (
    <section className="fade-up smd:justify-center mx-auto mt-4 flex min-h-screen max-w-150 flex-col px-6 py-24 text-center">
      <div className="mb-4 flex w-full justify-center">
        <button className="group border-primaryNavy text-primaryNavy flex items-center gap-2 rounded-full border bg-white px-5 py-2 text-sm font-medium transition-all duration-200">
          <HelpCircle className="h-4 w-4 transition-colors duration-200" />
          퍼넥션 오늘의 질문
        </button>
      </div>
      <HeroSectionFormQuestion
        startTyping={startTyping}
        onComplete={() => setQuestionDone(true)}
      />

      <div
        className={`transition-all duration-700 ${
          questionDone
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="w-full max-w-3xl">
          <div className="relative">
            <textarea
              maxLength={maxLength}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="당신의 생각을 자유롭게 적어주세요. 상세히 적을수록 좋아요!"
              className={cn(
                "box-shadow-2 scroll-none no-scrollbar h-36 w-full resize-none rounded-3xl bg-gray-50 p-6 text-base text-gray-800 transition-all duration-200 outline-none placeholder:text-gray-400",
                "focus:ring-primaryNavy/70 focus:ring-2"
              )}
            />
            <div className="absolute right-6 bottom-4">
              <span className="text-sm text-gray-400">
                {value.length}/{maxLength}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full max-w-3xl">
          <button
            disabled={value.length === 0}
            className={cn(
              "w-full rounded-xl px-10 py-3 text-sm font-medium transition-all duration-200",
              value.length === 0
                ? "bg-primaryNavy/40 cursor-not-allowed text-white"
                : "bg-primaryNavy/90 hover:bg-deepNavy btn-press-in text-white"
            )}
          >
            답변하기
          </button>
          <div className="text-gray-5 hover:text-primaryNavy mt-4 cursor-pointer text-end">
            <p onClick={handleScroll}>답변 구경하기</p>
          </div>
        </div>
        <HeroSectionOfflineBanner />
      </div>
    </section>
  );
};
