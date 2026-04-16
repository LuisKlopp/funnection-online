import { Clock3, ShieldCheck } from "lucide-react";

import { BackToPreviousButton } from "./BackToPreviousButton";

export const PrivacyHeroSection = () => {
  return (
    <section className="smd:pt-30 smd:pb-28 relative overflow-hidden bg-linear-to-b from-[#edf2ff] via-[#f8faff] to-white px-6 pt-24 pb-22">
      <div className="bg-primaryNavy/8 absolute top-18 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-10 w-full text-left">
          <BackToPreviousButton />
        </div>

        <div className="border-primaryNavy/15 text-primaryNavy box-shadow-1 mb-7 inline-flex items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
          <ShieldCheck className="h-4 w-4" />
          개인정보 처리방침
        </div>

        <h1 className="text-gray-8 smd:text-[40px] text-[32px] leading-none font-semibold tracking-tight">
          개인정보처리방침
        </h1>

        <p className="text-gray-5 smd:leading-7 mt-6 max-w-3xl text-base leading-7">
          퍼넥션 온라인이 어떤 개인정보를 어떤 목적으로 처리하는지,
          <br className="smd:block hidden" /> 그리고 이용자가 행사할 수 있는
          권리는 무엇인지 안내합니다.
        </p>

        <div className="text-gray-4 mt-9 inline-flex items-center gap-2 text-sm">
          <Clock3 className="h-4 w-4" />
          최종 업데이트: 2026년 4월
        </div>
      </div>
    </section>
  );
};
