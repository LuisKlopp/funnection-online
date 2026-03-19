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
      <div className="border-gray-2 mx-auto my-4 w-[90%] border-b" />
      <div className="text-gray-6 grid grid-cols-7 text-center text-sm font-semibold">
        <span>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
      </div>
      <div className="mt-4 grid grid-cols-7 place-items-center gap-x-3">
        {blanks.map((_, i) => (
          <div key={`blank-${i}`} />
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
                  modal.openModal();
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
