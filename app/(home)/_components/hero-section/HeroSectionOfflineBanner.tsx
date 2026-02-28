"use client";

import { CalendarDays, MapPin } from "lucide-react";

export const HeroSectionOfflineBanner = () => {
  return (
    <div className="border-primaryNavy/80 from-primaryNavy/20 via-primaryNavy/10 box-shadow-2 flex w-full flex-col rounded-2xl border-2 bg-white/80 bg-linear-to-r to-white px-4 py-4 transition-all duration-300">
      <div className="flex w-full justify-start">
        <span className="text-primaryNavy mb-1 text-base font-semibold tracking-normal">
          Funnection 오프라인 일정
        </span>
      </div>
      <div className="text-gray-7 flex items-center gap-4 text-sm">
        <span className="flex gap-1">
          <CalendarDays className="mt-0.4 h-4 w-4" />
          3월 30일 (토) 7PM
        </span>
        {/* <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />6 / 8명
            </span> */}
        <span className="flex gap-1">
          <MapPin className="mt-0.5 h-4 w-4" />
          서울대입구역 근처
        </span>
      </div>
      {/* <button className="y-2 btn-press-in bg-primaryNavy hover:text-deepNavy rounded-xl p-2 text-sm font-medium text-white transition-colors duration-200">
        참여하기 →
      </button> */}
    </div>
  );
};
