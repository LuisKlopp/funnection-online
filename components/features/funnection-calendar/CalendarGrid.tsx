"use client";

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  startOfMonth,
} from "date-fns";
import { useState } from "react";

import { CalendarDay } from "./CalendarDay";
import { CalendarMonthNavigation } from "./CalendarMonthNavigation";

interface Props {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export const CalendarGrid = ({ selectedDate, onSelectDate }: Props) => {
  const [month, setMonth] = useState(new Date());

  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  const days = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });

  const startDay = getDay(monthStart);

  const blanks = Array.from({ length: startDay });

  return (
    <div>
      <CalendarMonthNavigation
        month={month}
        onPrev={() => setMonth(addMonths(month, -1))}
        onNext={() => setMonth(addMonths(month, 1))}
      />
      <div className="border-gray-2 mx-auto my-4 w-[90%] border-b" />
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-indigo-600/80">
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

        {days.map((date) => (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
          />
        ))}
      </div>
    </div>
  );
};
