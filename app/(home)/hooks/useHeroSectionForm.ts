"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useSubmitAnswer } from "@/hooks/react-query/useSubmitAnswer";
import { useSyncMyAnswer } from "@/hooks/react-query/useSyncMyAnswer";
import { useModal } from "@/hooks/ui/useModal";
import { useResultModal } from "@/hooks/ui/useResultModal";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";
import { useUserInfoStore } from "@/store/userInfo.store";

interface UseHeroSectionFormParams {
  questionId: number;
  visible: boolean;
  skipTyping: boolean;
  setQuestionDone: Dispatch<SetStateAction<boolean>>;
}

export const HERO_SECTION_FORM_MAX_LENGTH = 200;

export const useHeroSectionForm = ({
  questionId,
  visible,
  skipTyping,
  setQuestionDone,
}: UseHeroSectionFormParams) => {
  const [value, setValue] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const modal = useModal();
  const resultModal = useResultModal();

  const { userInfo, initUserInfo } = useUserInfoStore();
  const { submitAnswer, isPending } = useSubmitAnswer();
  const hasAnswered = useCheckAnsweredStore((state) =>
    Boolean(state.myAnswers[questionId])
  );

  useSyncMyAnswer(questionId);

  const handleSubmit = useCallback(() => {
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
  }, [modal, resultModal, setQuestionDone, submitAnswer, userInfo, value]);

  const handleTypingComplete = useCallback(() => {
    setQuestionDone(true);
  }, [setQuestionDone]);

  const handleOpenAnswers = useCallback(() => {
    modal.openModal("answers");
  }, [modal]);

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
  }, [setQuestionDone, skipTyping, visible]);

  useEffect(() => {
    initUserInfo();
  }, [initUserInfo]);

  return {
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
  };
};
