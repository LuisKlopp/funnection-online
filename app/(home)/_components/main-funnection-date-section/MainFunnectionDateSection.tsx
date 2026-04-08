"use client";

import { FunnectionCalendar } from "@/components/features/funnection-calendar/FunnectionCalendar";

import { SectionHeader } from "../SectionHeader";
import { MainFunnectionPhotoCard } from "./MainFunnectionPhotoCard";
import { MainFunnectionRedirectButton } from "./MainFunnectionRedirectButton";

export const MainFunnectionDateSection = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white px-6 py-12">
      <div className="max-w-150">
        <SectionHeader
          titleBadge="Funnection Offline Gathering"
          title="퍼넥션 오프라인 모임"
          description="질문을 통해 서로 연결되는 대화 모임입니다."
          secondDescription="정답 없는 질문 속에서 우리는 서로를 이해하고 연결됩니다."
          isBackground
        />
        <div className="flex flex-col gap-4">
          <MainFunnectionPhotoCard />
          <p className="text-gray-5 mx-auto text-xs">
            ↑ 이미지를 클릭해서 확인해보세요 😆{" "}
          </p>
          <FunnectionCalendar />
          <MainFunnectionRedirectButton />
        </div>
      </div>
    </section>
  );
};
