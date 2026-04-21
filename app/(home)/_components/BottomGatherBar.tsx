"use client";

import { ArrowRight, Users } from "lucide-react";
import { useMemo } from "react";

import { useEventsQuery } from "@/hooks/react-query/useEventsQuery";
import {
  cn,
  formatKoreanDate,
  formatKoreanTime,
  parseLocalDate,
  smoothScrollTo,
} from "@/lib/utils";
import { useScrollStore } from "@/store/scroll.store";
import { EventData } from "@/types/event.type";

import { FUNNECTION_CALENDAR_ID } from "./main-funnection-date-section/MainFunnectionDateSection";

const getEventDateTime = (event: EventData) => {
  const date = parseLocalDate(event.eventDate);
  const [hours = 0, minutes = 0, seconds = 0] = event.startTime
    .split(":")
    .map(Number);

  date.setHours(hours, minutes, seconds, 0);

  return date;
};

const getNearestEvent = (events: EventData[]) => {
  const funnectionEvents = events.filter(
    (event) => event.eventType === "FUNNECTION"
  );

  if (!funnectionEvents.length) return null;

  const now = new Date();
  const upcomingEvents = funnectionEvents
    .filter((event) => getEventDateTime(event).getTime() >= now.getTime())
    .sort(
      (a, b) => getEventDateTime(a).getTime() - getEventDateTime(b).getTime()
    );

  if (upcomingEvents.length) {
    return upcomingEvents[0];
  }

  return [...funnectionEvents].sort(
    (a, b) => getEventDateTime(b).getTime() - getEventDateTime(a).getTime()
  )[0];
};

export const BottomGatherBar = () => {
  const { scrolled } = useScrollStore();
  const { data: events = [] } = useEventsQuery();
  const nearestEvent = useMemo(() => getNearestEvent(events), [events]);
  const participantCount = nearestEvent
    ? Math.max(nearestEvent.maxParticipants - nearestEvent.seatsLeft, 0)
    : null;
  const eventDateLabel = nearestEvent
    ? `${formatKoreanDate(nearestEvent.eventDate)} ${formatKoreanTime(nearestEvent.startTime)}`
    : "새 일정 업데이트 예정";

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
            <div className="flex items-center gap-1">
              <p
                className={cn(
                  "flex items-center gap-1 text-xs font-medium transition-all",
                  scrolled ? "text-white/75" : "text-gray-4"
                )}
              >
                <Users
                  className={cn("h-4 w-4", scrolled ? "text-white/70" : "")}
                />
                <span>
                  {participantCount !== null
                    ? `${participantCount}명 참여`
                    : "모임 일정 준비 중"}
                </span>
              </p>

              <p
                className={cn(
                  "truncate text-xs font-medium transition-all",
                  scrolled ? "text-white/65" : "text-gray-4"
                )}
              >
                {nearestEvent ? `/ ${eventDateLabel}` : eventDateLabel}
              </p>
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
            모임 신청
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
