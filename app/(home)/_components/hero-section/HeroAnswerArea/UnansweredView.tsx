"use client";

import { cn } from "@/lib/utils";

interface UnansweredViewProps {
  value: string;
  setValue: (v: string) => void;
  onSubmit: () => void;
  maxLength: number;
}

export const UnansweredView = ({
  value,
  setValue,
  onSubmit,
  maxLength,
}: UnansweredViewProps) => {
  return (
    <>
      <div className="w-full max-w-3xl">
        <div className="box-shadow-1 focus:ring-primaryNavy/50 mb-4 rounded-2xl bg-white p-4 focus:ring-2">
          <textarea
            maxLength={maxLength}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="익명이니 편하게, 솔직하게 적어보세요 ☺️"
            className="text-gray-7 h-14 w-full resize-none bg-white text-[15px] leading-5.5 outline-none placeholder:text-gray-400"
          />
          <span className="text-gray-5 flex justify-end text-xs">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>

      <div className="mb-4 w-full max-w-3xl">
        <button
          onClick={onSubmit}
          disabled={!value}
          className={cn(
            "box-shadow-2 w-full rounded-xl px-4 py-2.5 text-sm text-white transition",
            !value
              ? "bg-primaryNavy/40 cursor-not-allowed"
              : "bg-primaryNavy/90 hover:bg-deepNavy"
          )}
        >
          내 생각 남기기
        </button>
      </div>

      <div className="text-gray-7 mt-8 w-full text-sm">
        <div className="smd:hidden">
          <div className="pl-4 text-left">내 생각을 남긴 후에</div>
          <div className="pr-4 text-right">
            다른 사람들의 답변을 확인할 수 있어요!
          </div>
        </div>

        <div className="smd:flex hidden justify-center text-center">
          내 생각을 남긴 후에 다른 사람들의 답변을 확인할 수 있어요!
        </div>
      </div>
    </>
  );
};
