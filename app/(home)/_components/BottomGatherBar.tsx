"use client";

import { ArrowRight, Users } from "lucide-react";

export const BottomGatherBar = () => {
  return (
    <div className="floating-box fixed bottom-0 left-0 z-50 w-full">
      <div className="mx-auto w-full max-w-150 px-4 pb-3">
        <div className="box-shadow-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3">
          <div className="flex flex-col gap-1">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="text-primaryNavy text-xs font-semibold">
                  OFFLINE
                </p>
                <p className="text-sm font-semibold tracking-normal text-gray-900">
                  퍼넥션 모임
                </p>
              </div>
            </div>
            <div className="flex w-full gap-1">
              <p className="text-gray-4 flex items-center gap-1 text-xs font-medium">
                <Users className="h-4 w-4" />
                <span>6명 참여 중</span>
              </p>
              <p className="text-gray-4 truncate text-xs font-medium">
                / 3월 12일 (토) 저녁
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn-press-in border-primaryNavy/90 box-shadow-2 text-primaryNavy flex items-center gap-2 rounded-2xl border-[1.5px] px-2 py-2 text-xs font-semibold"
          >
            자세히 보기
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
