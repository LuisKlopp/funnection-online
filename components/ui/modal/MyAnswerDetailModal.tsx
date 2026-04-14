"use client";

import { X } from "lucide-react";

import { Portal } from "@/components/layout/PortalWrapper";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { formatAgeGroup, getGenderEmoji } from "@/lib/utils";
import { AnswerType } from "@/types/answer.type";

import { BottomSheet } from "./BottomSheet";

interface MyAnswerDetailModalProps {
  answer: AnswerType;
  onClose: () => void;
}

export const MyAnswerDetailModal = ({
  answer,
  onClose,
}: MyAnswerDetailModalProps) => {
  useLockBodyScroll();

  return (
    <Portal>
      <BottomSheet isOpen={true} onClose={onClose}>
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-gray-8 text-lg font-semibold">내 답변</h2>
            <p className="text-gray-4 mt-1 text-xs">
              {getGenderEmoji(answer.gender)} {formatAgeGroup(answer.ageGroup)} ·{" "}
              {answer.nickname}
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

        <div className="px-6 pb-6">
          <div className="box-shadow-2 border-primaryNavy/60 rounded-2xl border-2 bg-white px-4 py-4">
            <div className="mb-3">
              <span className="bg-primaryNavy/10 text-primaryNavy inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold">
                내 답변
              </span>
            </div>

            <p className="text-gray-7 wrap-break-word text-left text-[14px] leading-6 whitespace-pre-wrap">
              {answer.content}
            </p>
          </div>
        </div>
      </BottomSheet>
    </Portal>
  );
};
