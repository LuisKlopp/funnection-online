"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { FullscreenOverlay } from "@/components/ui/loading/FullScreenOverlay";
import { Spinner } from "@/components/ui/loading/Spinner";
import { BottomAnswerListModal } from "@/components/ui/modal/BottomAnswerListModal";
import { InitBottomSubmitModal } from "@/components/ui/modal/InitBottomSubmitModal";
import { ResultModal } from "@/components/ui/modal/ResultModal";
import { useSubmitAnswer } from "@/hooks/react-query/useSubmitAnswer";
import { useModal } from "@/hooks/ui/useModal";
import { useResultModal } from "@/hooks/ui/useResultModal";
import { cn } from "@/lib/utils";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";
import { useUserInfoStore } from "@/store/userInfo.store";
import { HomeQuestion } from "@/types/home.type";

import { AnsweredView } from "./HeroAnswerArea/AnsweredView";
import { UnansweredView } from "./HeroAnswerArea/UnansweredView";
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
  const { submitAnswer, isPending } = useSubmitAnswer();
  const resultModal = useResultModal();
  const answered = useCheckAnsweredStore((s) => s.answeredMap[questionData.id]);

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
        resultModal.show("답변이 등록됐어요. 👍");
        setQuestionDone(true);
      },
    });
  };

  const handleTypingComplete = useCallback(() => {
    setQuestionDone(true);
  }, []);

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
        {answered ? (
          <AnsweredView
            questionId={questionData.id}
            onOpenAnswers={() => modal.openModal("answers")}
          />
        ) : (
          <UnansweredView
            value={value}
            setValue={setValue}
            onSubmit={handleSubmit}
            maxLength={maxLength}
          />
        )}
      </div>
      {modal.isModal === "submit" && (
        <InitBottomSubmitModal
          content={value}
          onClose={modal.closeModal}
          setQuestionDone={setQuestionDone}
          setValue={setValue}
          onSuccessShowResult={(message) => resultModal.show(message)}
        />
      )}
      {modal.isModal === "answers" && (
        <BottomAnswerListModal onClose={modal.closeModal} />
      )}
      {isPending && (
        <FullscreenOverlay>
          <Spinner size={48} />
        </FullscreenOverlay>
      )}
      <ResultModal
        open={resultModal.isOpen}
        message={resultModal.message}
        onClose={resultModal.close}
      />
    </section>
  );
};
