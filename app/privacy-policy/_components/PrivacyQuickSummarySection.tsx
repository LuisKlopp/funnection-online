import { Database, HardDrive, UserRoundCheck } from "lucide-react";

import { privacySummaryItems } from "../_data/privacyPolicyData";
import { PrivacySectionHeading } from "./PrivacySectionHeading";

const toneStyle = {
  blue: {
    iconWrap: "bg-primaryNavy/8 text-primaryNavy",
    chip: "border-primaryNavy/15 bg-primaryNavy/8 text-primaryNavy",
  },
  red: {
    iconWrap: "bg-[#ff5e5e]/10 text-[#ff4d4f]",
    chip: "border-[#ff8b8b]/30 bg-[#fff1f1] text-[#ff4d4f]",
  },
};

const summaryIcons = [
  <UserRoundCheck key="apply" className="h-5 w-5" />,
  <Database key="answer" className="h-5 w-5" />,
  <HardDrive key="storage" className="h-5 w-5" />,
];

export const PrivacyQuickSummarySection = () => {
  return (
    <section className="bg-white px-6 py-22 smd:py-24">
      <div className="mx-auto max-w-280">
        <PrivacySectionHeading
          eyebrow="QUICK SUMMARY"
          title="핵심 개인정보 처리 기준"
          description="서비스 이용 전에 어떤 정보가 어떻게 사용되는지 먼저 확인하세요."
        />

        <div className="grid gap-4 smd:grid-cols-3">
          {privacySummaryItems.map((item, index) => {
            const tone = toneStyle[item.tone];

            return (
              <article
                key={item.title}
                className="border-gray-2 box-shadow-1 rounded-3xl border bg-white p-5 smd:p-6"
              >
                <div className="mb-7 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone.iconWrap}`}
                  >
                    {summaryIcons[index]}
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${tone.chip}`}
                  >
                    {item.chip}
                  </span>
                </div>

                <h3 className="text-gray-8 text-base leading-7 font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-5 mt-3 text-sm leading-6 smd:text-base smd:leading-7">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
