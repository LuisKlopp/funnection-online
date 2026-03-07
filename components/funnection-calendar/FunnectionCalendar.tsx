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

      <div className="box-shadow-2 rounded-3xl bg-white bg-linear-to-br px-8 py-6">
        <CalendarGrid
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
    </div>
  );
};
