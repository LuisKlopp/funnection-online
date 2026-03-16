"use client";

import { useModalStore } from "@/store/useModalStore";

import { AnswerSubmitModal } from "../ui/modal/AnswerSubmitModal";
import { BottomAnswerListModal } from "../ui/modal/BottomAnswerListModal";
import { BottomEventListModal } from "../ui/modal/BottomEventListModal";
import { InitBottomSubmitModal } from "../ui/modal/InitBottomSubmitModal";
import { MainFunnectionImageModal } from "../ui/modal/MainFunnectionImageModal";

export const RootModalLayer = () => {
  const isAnswerSubmitOpen = useModalStore((s) => s.isOpen("answer-submit"));
  const isInitBottomSubmitOpen = useModalStore((s) =>
    s.isOpen("init-bottom-submit")
  );
  const isFunnectionImageOpen = useModalStore((s) =>
    s.isOpen("funnection-image")
  );
  const isBottomAnswerListOpen = useModalStore((s) =>
    s.isOpen("bottom-answer-list")
  );
  const isBottomEventListOpen = useModalStore((s) =>
    s.isOpen("bottom-event-list")
  );

  return (
    <>
      {isAnswerSubmitOpen && <AnswerSubmitModal />}
      {isInitBottomSubmitOpen && <InitBottomSubmitModal />}
      {isFunnectionImageOpen && <MainFunnectionImageModal />}
      {isBottomAnswerListOpen && <BottomAnswerListModal />}
      {isBottomEventListOpen && <BottomEventListModal />}
    </>
  );
};
