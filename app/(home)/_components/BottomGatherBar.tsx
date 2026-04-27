"use client";

import { cn, smoothScrollTo } from "@/lib/utils";
import { useScrollStore } from "@/store/scroll.store";

import { FUNNECTION_CALENDAR_ID } from "./main-funnection-date-section/MainFunnectionDateSection";

export const BottomGatherBar = () => {
  const { scrolled } = useScrollStore();

  const handleOpenGatheringCalendar = () => {
    const calendar = document.getElementById(FUNNECTION_CALENDAR_ID);

    if (!calendar) return;

    const targetY = window.scrollY + calendar.getBoundingClientRect().top - 48;

    smoothScrollTo(targetY, 1200);
  };

  return (
    <div
      className="floating-box fixed left-0 z-50 w-full"
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
            <div>
              <span
                className={cn("text-gray-5 text-sm", scrolled && "text-white")}
              >
                다름이 닿는 대화공간 퍼넥션
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleOpenGatheringCalendar}
            className={cn(
              "btn-press-in box-shadow-2 flex items-center gap-2 rounded-2xl border-[1.5px] px-3 py-2 text-xs font-semibold transition-all duration-300",
              scrolled
                ? "text-primaryNavy/80 bg-white shadow-lg"
                : "border-primaryNavy/90 text-primaryNavy/90"
            )}
          >
            모임 일정 확인
          </button>
        </div>
      </div>
    </div>
  );
};
