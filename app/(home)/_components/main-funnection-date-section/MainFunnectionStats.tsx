"use client";

import { CalendarDays, Sparkles, Star, Users } from "lucide-react";

const FUNNECTION_STATS = [
  {
    label: "회차 진행",
    value: "160+",
    icon: Sparkles,
  },
  {
    label: "누적 참여자",
    value: "1,000명+",
    icon: Users,
  },
  {
    label: "평균 만족도",
    value: "5.0",
    icon: Star,
  },
  {
    label: "운영 경력",
    value: "2년+",
    icon: CalendarDays,
  },
] as const;

export const MainFunnectionStats = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
      {FUNNECTION_STATS.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="box-shadow-1 bg-skyNavy/80 flex min-h-18 items-center gap-2 rounded-[1.2rem] px-3 py-2 text-left md:min-h-31 md:flex-col md:justify-center md:gap-0 md:rounded-3xl md:px-4 md:py-4 md:text-center"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white md:mb-3 md:h-9 md:w-9">
            <Icon className="text-primaryNavy h-3.5 w-3.5 md:h-4 md:w-4" />
          </div>
          <div className="smd:gap-0 flex min-w-0 flex-col gap-2">
            <p className="text-gray-7 smd:text-[20px] font-semibold tracking-tight">
              {value}
            </p>
            <p className="text-primaryNavy smd:mt-2 text-sm leading-tight font-medium">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
