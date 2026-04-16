import { quickSummaryCards } from "../_data/refundPolicyData";
import { RefundPolicyIcon } from "./RefundPolicyIcon";
import { RefundSectionHeading } from "./RefundSectionHeading";

const toneClassName = {
  blue: {
    iconWrap: "bg-primaryNavy/8 text-primaryNavy",
    chip: "border-primaryNavy/15 bg-primaryNavy/8 text-primaryNavy",
  },
  red: {
    iconWrap: "bg-[#ff5e5e]/10 text-[#ff4d4f]",
    chip: "border-[#ff8b8b]/30 bg-[#fff1f1] text-[#ff4d4f]",
  },
};

export const QuickSummarySection = () => {
  return (
    <section className="smd:py-24 bg-white px-6 py-22">
      <div className="mx-auto max-w-280">
        <RefundSectionHeading
          eyebrow="QUICK SUMMARY"
          title="핵심 환불 기준"
          description="가장 중요한 세 가지를 먼저 확인하세요."
        />

        <div className="grid gap-4">
          {quickSummaryCards.map((card) => {
            const tone = toneClassName[card.tone];

            return (
              <article
                key={card.title}
                className="border-gray-2 box-shadow-1 smd:p-6 rounded-3xl border bg-white p-5"
              >
                <div className="mb-7 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone.iconWrap}`}
                  >
                    <RefundPolicyIcon name={card.icon} className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${tone.chip}`}
                  >
                    {card.chip}
                  </span>
                </div>

                <h3 className="text-gray-8 text-xl leading-7 font-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-5 smd:text-base mt-3 text-sm leading-7">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
