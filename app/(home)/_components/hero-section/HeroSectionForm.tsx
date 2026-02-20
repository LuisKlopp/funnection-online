"use client";

import { HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { HeroSectionFormQuestion } from "./HeroSectionFormQuestion";

export const HeroSectionForm = () => {
  const [value, setValue] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const maxLength = 500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="fade-up flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-8">
        <button className="group border-primaryNavy text-primaryNavy flex items-center gap-2 rounded-full border bg-white px-5 py-2 text-sm font-medium transition-all duration-200">
          <HelpCircle className="h-4 w-4 transition-colors duration-200" />
          퍼넥션 오늘의 질문
        </button>
      </div>
      <HeroSectionFormQuestion startTyping={startTyping} />

      <div className="w-full max-w-3xl">
        <div className="relative">
          <textarea
            maxLength={maxLength}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="당신의 생각을 자유롭게 적어주세요. 상세히 적을수록 좋아요!"
            className={cn(
              "box-shadow-2 h-56 w-full resize-none rounded-3xl bg-gray-50 p-6 text-base text-gray-800 transition-all duration-200 outline-none placeholder:text-gray-400",
              "focus:ring-primaryNavy/70 focus:ring-2"
            )}
          />
          <span className="absolute right-6 bottom-4 text-sm text-gray-400">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
      <div className="mt-10 w-full max-w-3xl">
        <button
          disabled={value.length === 0}
          className={cn(
            "rounded-xl px-10 py-3 text-sm font-medium transition-all duration-200",
            value.length === 0
              ? "bg-primaryNavy/40 cursor-not-allowed text-white"
              : "bg-primaryNavy hover:bg-deepNavy btn-press-in text-white"
          )}
        >
          답변하기
        </button>
        <div className="text-gray-5 hover:text-primaryNavy cursor-pointer text-end">
          <p className="">다른 사람 답변 구경하기</p>
        </div>
      </div>
    </section>
  );
};
