"use client";

import { ArrowRight, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrollStore } from "@/store/scroll.store";

export const BottomGatherBar = () => {
  const { scrolled } = useScrollStore();

  return (
    <div
      className="fixed left-0 z-50 w-full"
      style={{
        bottom:
          "calc(env(safe-area-inset-bottom, 0px) + var(--vvh-gap-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="mx-auto w-full max-w-150 px-4 pb-3">
        <div
          className={cn(
            "box-shadow-2 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled ? "bg-primaryNavy/95 backdrop-blur-sm" : "bg-white"
          )}
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium transition-all",
                  scrolled
                    ? "bg-white/25 text-white"
                    : "bg-primaryNavy/10 text-primaryNavy"
                )}
              >
                OFFLINE
              </span>
              <p
                className={cn(
                  "text-sm font-semibold tracking-normal transition-all",
                  scrolled ? "text-white" : "text-gray-900"
                )}
              >
                퍼넥션 모임
              </p>
            </div>
            <div
              className={cn(
                "border-primaryNavy/60 w-[20%] border-t",
                scrolled && "border-white/40"
              )}
            />
            <div className="flex items-center gap-2">
              <p
                className={cn(
                  "flex items-center gap-1 text-xs font-medium transition-all",
                  scrolled ? "text-white/75" : "text-gray-4"
                )}
              >
                <Users
                  className={cn("h-4 w-4", scrolled ? "text-white/70" : "")}
                />
                <span>6명 참여 중</span>
              </p>

              <p
                className={cn(
                  "truncate text-xs font-medium transition-all",
                  scrolled ? "text-white/65" : "text-gray-4"
                )}
              >
                / 3월 12일 (토) 저녁
              </p>
            </div>
          </div>
          <button
            type="button"
            className={cn(
              "btn-press-in box-shadow-2 flex items-center gap-2 rounded-2xl border-[1.5px] px-3 py-2 text-xs font-semibold transition-all duration-300",
              scrolled
                ? "text-primaryNavy/80 bg-white shadow-lg"
                : "border-primaryNavy/90 text-primaryNavy/90"
            )}
          >
            구경하기
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
