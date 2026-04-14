"use client";

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
} from "date-fns";
import { useState } from "react";

import { BottomEventListModal } from "@/components/ui/modal/BottomEventListModal";
import { useEventsQuery } from "@/hooks/react-query/useEventsQuery";
import { useModal } from "@/hooks/ui/useModal";
import { EventData } from "@/types/event.type";

import { CalendarDay } from "./CalendarDay";
import { CalendarMonthNavigation } from "./CalendarMonthNavigation";

interface CalendarGridProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const WEEKDAY_LABELS = [
  { label: "일", className: "text-red-600" },
  { label: "월", className: "text-primaryNavy/72" },
  { label: "화", className: "text-primaryNavy/72" },
  { label: "수", className: "text-primaryNavy/72" },
  { label: "목", className: "text-primaryNavy/72" },
  { label: "금", className: "text-primaryNavy/72" },
  { label: "토", className: "text-primaryNavy/72" },
] as const;

export const CalendarGrid = ({
  selectedDate,
  onSelectDate,
}: CalendarGridProps) => {
  const { data: events = [] } = useEventsQuery();
  const modal = useModal();

  const [month, setMonth] = useState(new Date());
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const days = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });
  const startDay = getDay(monthStart);
  const blanks = Array.from({ length: startDay });

  const eventMap = events.reduce<Map<string, EventData[]>>((map, event) => {
    const date = event.eventDate.slice(0, 10);
    if (!map.has(date)) {
      map.set(date, []);
    }
    map.get(date)!.push(event);
    return map;
  }, new Map());

  return (
    <div>
      <CalendarMonthNavigation
        month={month}
        onPrev={() => setMonth(addMonths(month, -1))}
        onNext={() => setMonth(addMonths(month, 1))}
      />
      <div className="border-primaryNavy/10 mx-auto my-4 w-[90%] border-b" />
      <div className="grid grid-cols-7 justify-items-center text-center text-sm font-medium">
        {WEEKDAY_LABELS.map(({ label, className }) => (
          <span
            key={label}
            className={`${className} flex h-9 w-full items-center justify-center`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-7 justify-items-center gap-y-3">
        {blanks.map((_, i) => (
          <div key={`blank-${i}`} className="h-9 w-full" />
        ))}
        {days.map((date) => {
          const key = format(date, "yyyy-MM-dd");
          const dayEvents = eventMap.get(key) ?? [];

          return (
            <CalendarDay
              key={key}
              date={date}
              events={dayEvents}
              selectedDate={selectedDate}
              onSelectDate={(date) => {
                onSelectDate(date);

                if (dayEvents.length > 0) {
                  modal.openModal("events");
                }
              }}
            />
          );
        })}
        {modal.isModal && (
          <BottomEventListModal
            events={events}
            date={selectedDate}
            onClose={modal.closeModal}
          />
        )}
      </div>
    </div>
  );
};
