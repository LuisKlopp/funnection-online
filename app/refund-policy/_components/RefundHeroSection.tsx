import { Clock3 } from "lucide-react";

import { RefundPolicyIcon } from "./RefundPolicyIcon";

export const RefundHeroSection = () => {
  return (
    <section className="smd:pt-34 smd:pb-30 relative overflow-hidden bg-linear-to-b from-[#edf2ff] via-[#f8faff] to-white px-6 pt-28 pb-22">
      <div className="bg-primaryNavy/8 absolute top-18 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="border-primaryNavy/15 text-primaryNavy box-shadow-1 mb-7 inline-flex items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
          <RefundPolicyIcon name="shield" className="h-4 w-4" />
          환불 정책
        </div>

        <h1 className="text-gray-8 smd:text-[34px] text-[32px] leading-none font-semibold tracking-tight">
          환불정책
        </h1>

        <p className="text-gray-5 smd:text-xl smd:leading-7 mt-6 max-w-2xl text-base leading-7">
          퍼넥션 온라인 오프라인 모임의 결제 및 환불 기준을 안내합니다.
          <br className="smd:block hidden" /> 이용자의 권익 보호를 위해 명확하게
          정리했어요.
        </p>

        <div className="text-gray-4 mt-9 inline-flex items-center gap-2 text-sm">
          <Clock3 className="h-4 w-4" />
          최종 업데이트: 2026년 4월
        </div>
      </div>
    </section>
  );
};
