"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FunnectionCalendar } from "@/components/features/funnection-calendar/FunnectionCalendar";

import { SectionHeader } from "../SectionHeader";
import { MainFunnectionPhotoCard } from "./MainFunnectionPhotoCard";
import { MainFunnectionRedirectButton } from "./MainFunnectionRedirectButton";

export const FUNNECTION_DATE_SECTION_ID = "funnection-offline-section";
export const FUNNECTION_CALENDAR_ID = "funnection-calendar";

export const MainFunnectionDateSection = () => {
  return (
    <section
      id={FUNNECTION_DATE_SECTION_ID}
      className="flex w-full flex-col items-center bg-white px-6 py-12"
    >
      <div className="max-w-150">
        <SectionHeader
          titleBadge="Funnection Offline Gathering"
          title="퍼넥션 오프라인 모임"
          description="질문을 통해 서로 연결되는 대화 모임입니다."
          secondDescription="정답 없는 질문 속에서 우리는 서로를 이해하고 연결됩니다."
          isBackground
        />
        <div className="mt-6 flex flex-col gap-4">
          <MainFunnectionPhotoCard />
          <div className="smd:justify-end flex justify-center">
            <Link
              href="/about-funnection"
              className="box-shadow-2 text-primaryNavy border-primaryNavy/60 smd:w-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl border bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
            >
              퍼넥션 자세히 들여다보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div id={FUNNECTION_CALENDAR_ID}>
            <FunnectionCalendar />
          </div>
          <MainFunnectionRedirectButton />
        </div>
      </div>
    </section>
  );
};
