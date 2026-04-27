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
            placeholder={`익명이니 편하게, 솔직하게 적어보세요 ☺️\n답변 후 다른사람들의 생각도 확인할 수 있어요!`}
            className="text-gray-7 smd:h-14 smd:w-full font-nanum smd:scale-100 smd:text-xl h-[59.75px] w-[106.667%] origin-top-left scale-[0.9375] resize-none bg-white text-xl leading-5.5 outline-none placeholder:text-lg placeholder:leading-6 placeholder:text-gray-400"
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
    </>
  );
};
