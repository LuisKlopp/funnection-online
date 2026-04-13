"use client";

import { Dispatch, SetStateAction } from "react";

import { FullscreenOverlay } from "@/components/ui/loading/FullScreenOverlay";
import { Spinner } from "@/components/ui/loading/Spinner";
import { BottomAnswerListModal } from "@/components/ui/modal/BottomAnswerListModal";
import { InitBottomSubmitModal } from "@/components/ui/modal/InitBottomSubmitModal";
import { ResultModal } from "@/components/ui/modal/ResultModal";
import { HomeQuestion } from "@/types/home.type";

import {
  HERO_SECTION_FORM_MAX_LENGTH,
  useHeroSectionForm,
} from "../../hooks/useHeroSectionForm";
import { HeroSectionFormContent } from "./HeroSectionFormContent";
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
  const {
    value,
    setValue,
    startTyping,
    userInfo,
    hasAnswered,
    isPending,
    modal,
    resultModal,
    handleSubmit,
    handleTypingComplete,
    handleOpenAnswers,
  } = useHeroSectionForm({
    questionId: questionData.id,
    visible,
    skipTyping,
    setQuestionDone,
  });

  return (
    <section className="fade-up mx-auto flex w-full max-w-125 flex-col justify-center px-6 py-24 text-center">
      <div className="absolute top-0 right-2 my-2 flex">
        {userInfo && <UserInfoBadge questionDone={questionDone} />}
      </div>
      <div className="mb-4 flex items-center gap-3">
        <div className="border-primaryNavy/30 flex-1 border-b" />
        <span className="text-primaryNavy font-nanum text-base font-medium whitespace-nowrap">
          퍼넥션 오늘의 질문
        </span>
        <div className="border-primaryNavy/30 flex-1 border-b" />
      </div>
      <HeroSectionFormQuestion
        startTyping={startTyping}
        question={questionData.question}
        onComplete={handleTypingComplete}
      />
      <HeroSectionFormContent
        questionDone={questionDone}
        questionId={questionData.id}
        hasAnswered={hasAnswered}
        value={value}
        onValueChange={setValue}
        onSubmit={handleSubmit}
        maxLength={HERO_SECTION_FORM_MAX_LENGTH}
        onOpenAnswers={handleOpenAnswers}
      />
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
