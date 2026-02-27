"use client";

import { CalendarDays, MapPin } from "lucide-react";

export const HeroSectionOfflineBanner = () => {
  return (
    <div className="border-primaryNavy/80 from-primaryNavy/20 via-primaryNavy/10 flex w-full flex-col items-center justify-between rounded-2xl border bg-white/80 bg-linear-to-r to-white px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col text-left">
        <span className="text-primaryNavy mb-1 text-sm font-semibold tracking-wide">
          Funnection 오프라인 일정
        </span>
        <div className="text-gray-7 flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            3월 30일 (토) 7PM
          </span>
          {/* <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />6 / 8명
            </span> */}
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            강남
          </span>
        </div>
      </div>
      <button className="y-2 btn-press-in bg-primaryNavy hover:text-deepNavy rounded-xl p-2 text-sm font-medium text-white transition-colors duration-200">
        참여하기 →
      </button>
    </div>
  );
};
