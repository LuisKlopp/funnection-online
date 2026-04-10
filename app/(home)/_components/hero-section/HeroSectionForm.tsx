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
import { useSubmitAnswer } from "@/hooks/react-query/useSubmitAnswer";
import { useModal } from "@/hooks/ui/useModal";
import { cn, smoothScrollTo } from "@/lib/utils";
import { useUserInfoStore } from "@/store/userInfo.store";
import { HomeQuestion } from "@/types/home.type";

import { HeroSectionFormQuestion } from "./HeroSectionFormQuestion";
import { UserInfoBadge } from "./UserInfoBadge";

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
  const maxLength = 200;
  const { userInfo, initUserInfo } = useUserInfoStore();
  const { submitAnswer } = useSubmitAnswer();

  const handleSubmit = () => {
    if (!value) return;

    if (!userInfo) {
      modal.openModal("submit");
      return;
    }

    submitAnswer({
      content: value,
      userInfo,
      onSuccess: () => {
        setValue("");
        setQuestionDone(true);
        handleScroll();
      },
    });
  };

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
      <div className="absolute top-0 right-2 my-2 flex">
        {userInfo && <UserInfoBadge questionDone={questionDone} />}
      </div>
      <div className="mb-4 flex items-center gap-3">
        <div className="border-primaryNavy/30 flex-1 border-b" />
        <span className="text-primaryNavy font-pretendard text-lg font-medium whitespace-nowrap">
          퍼넥션 오늘의 질문
        </span>
        <div className="border-primaryNavy/30 flex-1 border-b" />
      </div>
      <HeroSectionFormQuestion
        startTyping={startTyping}
        question={questionData.question}
        onComplete={handleTypingComplete}
      />
      <div
        className={`transition-all duration-700 ${
          questionDone
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="w-full max-w-3xl">
          <div className="box-shadow-1 focus:ring-primaryNavy/50 mb-4 rounded-2xl bg-white p-4 focus:ring-2">
            <textarea
              maxLength={maxLength}
              wrap="soft"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`익명이니 편하게, 솔직하게 적어보세요 ☺️`}
              className="scroll-none no-scrollbar text-gray-7 h-14 w-full resize-none bg-white text-[15px] leading-5.5 transition-all duration-200 outline-none placeholder:text-[15px] placeholder:text-gray-400"
            />
            <span className="text-gray-5 flex w-full justify-end text-xs">
              {value.length}/{maxLength}
            </span>
          </div>
        </div>
        <div className="w-full max-w-3xl">
          <button
            onClick={handleSubmit}
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
