import { applySteps } from "../_data/refundPolicyData";
import { RefundPolicyIcon } from "./RefundPolicyIcon";
import { RefundSectionHeading } from "./RefundSectionHeading";

export const HowToApplySection = () => {
  return (
    <section className="bg-lightNavy px-6 pt-4 pb-24">
      <div className="mx-auto max-w-280">
        <RefundSectionHeading
          eyebrow="HOW TO APPLY"
          title="환불 신청 절차"
          description="4단계로 간단하게 신청할 수 있어요."
        />

        <div className="smd:grid-cols-2 grid gap-4">
          {applySteps.map((step, index) => (
            <article
              key={step.title}
              className="border-gray-2 smd:px-6 smd:py-6 relative overflow-hidden rounded-3xl border bg-white px-4 py-4 shadow-[0_12px_36px_rgba(110,129,167,0.12)]"
            >
              <div className="smd:mb-10 mb-8 flex items-start justify-between gap-3">
                <div className="bg-primaryNavy/8 text-primaryNavy smd:h-10 smd:w-10 flex h-10 w-10 items-center justify-center rounded-2xl">
                  <RefundPolicyIcon name={step.icon} className="h-5 w-5" />
                </div>
                <span className="smd:text-[34px] text-[34px] leading-none font-bold text-[#dfe3ec]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-gray-8 smd:text-lg text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-gray-5 smd:mt-2 smd:text-[13px] smd:leading-6 mt-2 text-sm leading-6">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="border-gray-2 smd:px-7 mt-6 rounded-3xl border bg-white px-5 py-5 shadow-[0_12px_36px_rgba(110,129,167,0.12)]">
          <div className="flex items-start gap-4">
            <div className="bg-primaryNavy/8 text-primaryNavy flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
              <RefundPolicyIcon name="info" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-8 text-lg font-semibold">
                문의 전 확인해주세요
              </p>
              <p className="text-gray-5 smd:text-base mt-2 text-sm leading-6">
                환불 요청 전 모임 시작일을 기준으로 취소 시점을 먼저
                확인해주세요.
                <br className="smd:block hidden" /> 모임 시작 4일 이내 취소 또는
                사전 통보 없는 불참의 경우 환불이 불가합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
