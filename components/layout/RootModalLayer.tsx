"use client";

import { useModalStore } from "@/store/useModalStore";

import { AnswerSubmitModal } from "../ui/modal/AnswerSubmitModal";
import { InitBottomSubmitModal } from "../ui/modal/InitBottomSubmitModal";

export const RootModalLayer = () => {
  const isAnswerSubmitOpen = useModalStore((s) => s.isOpen("answer-submit"));
  const isInitBottomSubmitOpen = useModalStore((s) =>
    s.isOpen("init-bottom-submit")
  );

  return (
    <>
      {isAnswerSubmitOpen && <AnswerSubmitModal />}{" "}
      {isInitBottomSubmitOpen && <InitBottomSubmitModal />}
    </>
  );
};
