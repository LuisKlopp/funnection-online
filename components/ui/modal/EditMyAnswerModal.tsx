"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { cn } from "@/lib/utils";
import { AnswerType } from "@/types/answer.type";

import { BottomSheet } from "./BottomSheet";

interface EditMyAnswerModalProps {
  answer: AnswerType;
  maxLength: number;
  isPending: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void | Promise<void>;
}

export const EditMyAnswerModal = ({
  answer,
  maxLength,
  isPending,
  onClose,
  onSubmit,
}: EditMyAnswerModalProps) => {
  const [value, setValue] = useState(answer.content);

  useLockBodyScroll();

  useEffect(() => {
    setValue(answer.content);
  }, [answer.content]);

  const trimmedValue = value.trim();
  const isUnchanged = trimmedValue === answer.content.trim();

  const handleSubmit = () => {
    if (!trimmedValue || isUnchanged || isPending) return;
    onSubmit(trimmedValue);
  };

  return (
    <BottomSheet
      isOpen={true}
      onClose={onClose}
      avoidKeyboard={false}
      contentClassName="pb-0"
    >
      <div className="flex h-[90%] min-h-0 flex-col">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-gray-8 text-lg font-semibold">답변 수정하기</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            className="bg-primaryNavy/85 shrink-0 rounded-full p-2"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        <div className="bg-primaryNavy/30 mx-auto my-2 h-px w-[40%] shrink-0" />

        <div className="flex-1 overflow-y-auto px-6 pb-3">
          <div className="space-y-4">
            <section>
              <p className="text-gray-6 mb-2 text-sm font-medium">현재 답변</p>
              <div className="box-shadow-2 bg-gray-1 rounded-2xl px-4 py-4">
                <p className="text-gray-7 line-clamp-3 overflow-hidden text-sm leading-6 wrap-break-word text-ellipsis whitespace-pre-wrap">
                  {answer.content}
                </p>
              </div>
            </section>

            <section>
              <p className="text-gray-6 mb-2 text-sm font-medium">
                수정할 내용
              </p>
              <div className="box-shadow-2 border-primaryNavy/60 rounded-2xl border-2 bg-white p-4">
                <textarea
                  maxLength={maxLength}
                  value={value}
                  disabled={isPending}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="답변을 수정해보세요."
                  className="text-gray-7 smd:h-18 smd:w-full smd:scale-100 smd:text-[15px] h-28.75 w-[106.667%] origin-top-left scale-[0.9375] resize-none bg-white text-[16px] leading-5.5 outline-none placeholder:text-gray-400"
                />
                <span className="text-gray-5 flex justify-end text-xs">
                  {value.length}/{maxLength}
                </span>
              </div>
            </section>
          </div>
        </div>

        <div className="border-gray-2 mt-auto shrink-0 border-t bg-white px-6 py-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!trimmedValue || isUnchanged || isPending}
            className={cn(
              "box-shadow-2 w-full rounded-xl px-4 py-3 text-sm text-white transition",
              !trimmedValue || isUnchanged || isPending
                ? "bg-primaryNavy/40 cursor-not-allowed"
                : "bg-primaryNavy/90 hover:bg-deepNavy"
            )}
          >
            {isPending ? "수정 중..." : "수정하기"}
          </button>
        </div>
      </div>
    </BottomSheet>
  );
};
