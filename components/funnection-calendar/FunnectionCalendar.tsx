"use client";

import { useState } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarLegend } from "./CalendarLegend";

export const FunnectionCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="bg-[#DCD8FF] px-8 py-4">
        <CalendarHeader />
        <CalendarLegend />
      </div>

      <div className="bg-white px-8 py-6">
        <CalendarGrid
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
    </div>
  );
};
