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
      <div className="mt-6 mb-2 flex w-full items-center justify-center">
        <span className="text-deepNavy text-sm tracking-tight italic">
          모임이 있는 날짜를 선택해서 신청할 수 있어요!
        </span>
      </div>

      <div className="box-shadow-2 mb-6 rounded-3xl border border-[#1C4BA5]/18 bg-linear-to-br from-[#fff5cf] via-[#fff2d4] to-white px-8 py-6">
        <CalendarGrid
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
    </div>
  );
};
