"use client";

import { useState } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarLegend } from "./CalendarLegend";

export const FunnectionCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="mt-4">
      <div className="my-4 flex items-end justify-between">
        <CalendarHeader />
        <CalendarLegend />
      </div>
      <div className="my-2 flex w-full items-center justify-center">
        <span className="text-primaryNavy/90 text-sm tracking-tight italic">
          모임이 있는 날짜를 선택해서 신청할 수 있어요!
        </span>
      </div>

      <div className="box-shadow-2 rounded-3xl bg-white bg-linear-to-br px-8 py-6">
        <CalendarGrid
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
    </div>
  );
};
