"use client";

import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useModal } from "@/hooks/ui/useModal";
import { cn, smoothScrollTo } from "@/lib/utils";

import { TitleBadge } from "../TitleBadge";
import { HeroSectionFormQuestion } from "./HeroSectionFormQuestion";

interface HeroSectionFormProps {
  visible: boolean;
  skipTyping: boolean;
  questionDone: boolean;
  setQuestionDone: Dispatch<SetStateAction<boolean>>;
}
export const HeroSectionForm = ({
  visible,
  skipTyping,
  questionDone,
  setQuestionDone,
}: HeroSectionFormProps) => {
  const [value, setValue] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const { openModal } = useModal("init-bottom-submit");
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
    <section className="fade-up mx-auto flex w-full max-w-100 flex-col justify-center px-6 py-24 text-center">
      <TitleBadge title="퍼넥션 오늘의 질문" />
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
          <textarea
            maxLength={maxLength}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="당신의 생각을 자유롭게 적어주세요. 상세히 적을수록 좋아요!"
            className={cn(
              "box-shadow-1 scroll-none no-scrollbar smd:text-base text-gray-7 h-24 w-full resize-none rounded-2xl bg-gray-50 p-4 text-base transition-all duration-200 outline-none placeholder:text-sm placeholder:text-gray-400",
              "focus:ring-primaryNavy/50 focus:ring-2"
            )}
          />
          <div className="mt-2 flex w-full justify-end">
            <span className="text-gray-5 text-xs">
              {value.length}/{maxLength}
            </span>
          </div>
        </div>
        <div className="mt-4 w-full max-w-3xl">
          <button
            onClick={openModal}
            disabled={value.length === 0}
            className={cn(
              "box-shadow-2 w-full rounded-xl px-4 py-3 text-sm font-normal transition-all duration-200",
              value.length === 0
                ? "bg-primaryNavy/40 cursor-not-allowed text-white"
                : "bg-primaryNavy/90 hover:bg-deepNavy btn-press-in text-white"
            )}
          >
            답변하기
          </button>
          <div className="text-gray-5 hover:text-primaryNavy mt-3 flex cursor-pointer items-center justify-end">
            <p className="text-xs" onClick={handleScroll}>
              다른 답변 구경하기
            </p>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
