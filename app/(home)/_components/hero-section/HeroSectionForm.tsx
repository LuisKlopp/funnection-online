"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { BottomAnswerListModal } from "@/components/ui/modal/BottomAnswerListModal";
import { InitBottomSubmitModal } from "@/components/ui/modal/InitBottomSubmitModal";
import { useModal } from "@/hooks/ui/useModal";
import { cn, formatAgeGroup, smoothScrollTo } from "@/lib/utils";
import { useUserInfoStore } from "@/store/userInfo.store";
import { HomeQuestion } from "@/types/home.type";

import { TitleBadge } from "../TitleBadge";
import { HeroSectionFormQuestion } from "./HeroSectionFormQuestion";

interface HeroSectionFormProps {
  visible: boolean;
  skipTyping: boolean;
  questionData: HomeQuestion;
  questionDone: boolean;
  setQuestionDone: Dispatch<SetStateAction<boolean>>;
}
export const HeroSectionForm = ({
  visible,
  skipTyping,
  questionData,
  questionDone,
  setQuestionDone,
}: HeroSectionFormProps) => {
  const [value, setValue] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const modal = useModal();
  const maxLength = 500;
  const { userInfo, initUserInfo } = useUserInfoStore();

  const handleTypingComplete = useCallback(() => {
    setQuestionDone(true);
  }, []);

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

  useEffect(() => {
    initUserInfo();
  }, []);

  return (
    <section className="fade-up mx-auto flex w-full max-w-125 flex-col justify-center px-6 py-24 text-center">
      <TitleBadge title="퍼넥션 오늘의 질문" />
      <HeroSectionFormQuestion
        startTyping={startTyping}
        question={questionData.question}
        onComplete={handleTypingComplete}
      />
      {userInfo && (
        <div
          className={cn(
            "flex w-fit rounded-t-lg px-2 pt-1 text-sm transition-all duration-700",
            questionDone
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          )}
        >
          <span className="text-gray-5 mr-auto h-6 font-medium">
            {formatAgeGroup(userInfo.ageGroup)}{" "}
            {userInfo.gender === "male" ? "🙋🏻‍♂️" : "🙋🏻‍♀️"}
          </span>
        </div>
      )}
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
            placeholder={`당신의 생각을 자유롭게 적어주세요. 상세히 적을수록 좋아요!`}
            className={cn(
              "box-shadow-1 scroll-none no-scrollbar smd:text-base text-gray-7 h-24 w-full resize-none rounded-2xl bg-white p-4 text-base break-keep transition-all duration-200 outline-none placeholder:text-sm placeholder:text-gray-400",
              "focus:ring-primaryNavy/50 focus:ring-2"
            )}
          />
          <div className="mt-1 flex items-center justify-between">
            <div className="flex w-full justify-end">
              <span className="text-gray-5 text-xs">
                {value.length}/{maxLength}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full max-w-3xl">
          <button
            onClick={() => modal.openModal("submit")}
            disabled={value.length === 0}
            className={cn(
              "box-shadow-2 btn-press-in w-full rounded-xl px-4 py-2.5 text-sm font-normal transition-all duration-200",
              value.length === 0
                ? "bg-primaryNavy/40 pointer-events-none cursor-not-allowed text-white"
                : "bg-primaryNavy/90 hover:bg-deepNavy btn-press-in text-white"
            )}
          >
            내 생각 남기기
          </button>
        </div>
        <div
          onClick={() => modal.openModal("answers")}
          className="text-gray-6 hover:text-primaryNavy box-shadow-1 btn-press-in mt-3 ml-auto flex w-fit cursor-pointer items-center rounded-xl bg-white px-3 py-2"
        >
          <p className="text-xs" onClick={handleScroll}>
            다른 사람들은 어떻게 답변했을까요?
          </p>
        </div>
      </div>
      {modal.isModal === "submit" && (
        <InitBottomSubmitModal content={value} onClose={modal.closeModal} />
      )}
      {modal.isModal === "answers" && (
        <BottomAnswerListModal onClose={modal.closeModal} />
      )}
    </section>
  );
};
