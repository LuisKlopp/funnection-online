"use client";

import { X } from "lucide-react";

import { ResponseCard } from "@/app/(home)/_components/main-response-section/ResponseCard";
import { Portal } from "@/components/layout/PortalWrapper";
import { useResponsesQuery } from "@/hooks/react-query/useResponsesQuery";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useQuestionStore } from "@/store/question.store";

import { BottomSheet } from "./BottomSheet";

export const BottomAnswerListModal = ({ onClose }: { onClose: () => void }) => {
  useLockBodyScroll();

  const question = useQuestionStore((s) => s.question);
  const { data } = useResponsesQuery(question?.id);

  return (
    <Portal>
      <BottomSheet isOpen={true} onClose={onClose}>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-gray-8 text-lg font-semibold">전체 답변</h2>
            <p className="text-gray-4 text-xs">
              좋아요 많은 순 · 총 {data?.length}개
            </p>
          </div>

          <button
            onClick={onClose}
            className="bg-primaryNavy/85 rounded-full p-2"
          >
            <X size={18} className="text-white" />
          </button>
        </div>
        <div className="bg-primaryNavy/30 mx-auto my-2 h-px w-[40%]" />
        <div className="space-y-4 overflow-y-auto px-6 pb-6">
          {data?.map((answer) => (
            <ResponseCard
              key={answer.id}
              answerInfo={answer}
              variant="bottom-sheet"
            />
          ))}
        </div>
      </BottomSheet>
    </Portal>
  );
};
