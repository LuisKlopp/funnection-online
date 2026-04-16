import { Clock3, FileText } from "lucide-react";

import { BackToPreviousButton } from "./BackToPreviousButton";

export const TermsHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#edf2ff] via-[#f8faff] to-white px-6 pt-24 pb-22 smd:pt-30 smd:pb-28">
      <div className="bg-primaryNavy/8 absolute top-18 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-10 w-full text-left">
          <BackToPreviousButton />
        </div>

        <div className="border-primaryNavy/15 text-primaryNavy box-shadow-1 mb-7 inline-flex items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
          <FileText className="h-4 w-4" />
          이용 약관
        </div>

        <h1 className="text-gray-8 text-[32px] leading-none font-semibold tracking-tight smd:text-[40px]">
          퍼넥션 온라인 이용약관
        </h1>

        <p className="text-gray-5 mt-6 max-w-3xl text-sm leading-7 smd:text-base smd:leading-8">
          퍼넥션 온라인 서비스의 이용 조건과 절차, 이용자와 서비스 간의 권리와
          의무, 책임사항을 안내합니다.
          <br className="hidden smd:block" /> 온라인 콘텐츠와 오프라인 모임 이용에
          필요한 기준을 읽기 쉽게 정리했습니다.
        </p>

        <div className="text-gray-4 mt-9 inline-flex items-center gap-2 text-sm">
          <Clock3 className="h-4 w-4" />
          최종 업데이트: 2026년 4월
        </div>
      </div>
    </section>
  );
};
