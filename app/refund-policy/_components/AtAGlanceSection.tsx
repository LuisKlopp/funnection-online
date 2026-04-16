import {
  nonRefundableItems,
  refundableItems,
  refundTimeline,
} from "../_data/refundPolicyData";
import { RefundPolicyIcon } from "./RefundPolicyIcon";
import { RefundSectionHeading } from "./RefundSectionHeading";

const toneClasses = {
  blue: {
    panel: "border-[#bfd1ff] bg-[#eef3ff]",
    icon: "bg-primaryNavy text-white",
    label: "text-primaryNavy",
    timeline:
      "border-[#bfd1ff] bg-[#edf3ff] text-primaryNavy shadow-[inset_0_0_0_1px_rgba(53,112,233,0.06)]",
  },
  red: {
    panel: "border-[#ffd0d0] bg-[#fff2f2]",
    icon: "bg-[#ff4d4f] text-white",
    label: "text-[#ff4d4f]",
    timeline:
      "border-[#ffd0d0] bg-[#fff7f7] text-[#ff4d4f] shadow-[inset_0_0_0_1px_rgba(255,77,79,0.06)]",
  },
  amber: {
    timeline:
      "border-[#ffe1ae] bg-white text-[#f59e0b] shadow-[inset_0_0_0_1px_rgba(245,158,11,0.08)]",
  },
};

export const AtAGlanceSection = () => {
  return (
    <section className="bg-white px-6 py-22 sm:py-24">
      <div className="mx-auto max-w-280">
        <RefundSectionHeading
          eyebrow="AT A GLANCE"
          title="환불 가능 vs 환불 불가"
          description="한눈에 확인하세요."
        />

        <div className="mdl:grid-cols-2 grid gap-4">
          <div
            className={`mdl:p-5 rounded-[28px] border p-5 sm:p-6 ${toneClasses.blue.panel}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl ${toneClasses.blue.icon}`}
              >
                <RefundPolicyIcon name="check" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-primaryNavy text-sm font-bold tracking-wide uppercase">
                  Refundable
                </p>
                <h3 className="text-gray-8 mdl:text-[22px] text-xl font-semibold sm:text-xl">
                  환불 가능
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {refundableItems.map((item) => (
                <div
                  key={item.text}
                  className="box-shadow-1 mdl:px-3.5 mdl:py-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5"
                >
                  <div className="bg-primaryNavy/8 text-primaryNavy flex h-8 w-8 items-center justify-center rounded-xl">
                    <RefundPolicyIcon name={item.icon} className="h-4 w-4" />
                  </div>
                  <span className="text-gray-7 mdl:text-[15px] text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`mdl:p-5 rounded-[28px] border p-5 sm:p-6 ${toneClasses.red.panel}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl ${toneClasses.red.icon}`}
              >
                <RefundPolicyIcon name="x-circle" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[13px] font-bold tracking-wide text-[#ff4d4f] uppercase">
                  Non-refundable
                </p>
                <h3 className="text-gray-8 mdl:text-[22px] text-xl font-semibold sm:text-xl">
                  환불 불가
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              {nonRefundableItems.map((item) => (
                <div
                  key={item.text}
                  className="box-shadow-1 mdl:px-3.5 mdl:py-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#ff5e5e]/10 text-[#ff4d4f]">
                    <RefundPolicyIcon name={item.icon} className="h-4 w-4" />
                  </div>
                  <span className="text-gray-7 mdl:text-[15px] text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="smd:px-6 smd:py-7 mt-5 rounded-[30px] bg-[#f5f7fb] px-4 py-5">
          <div className="text-gray-5 smd:text-lg mb-5 text-center text-sm font-semibold">
            취소 기준 타임라인
          </div>

          <div className="smd:grid-cols-3 smd:items-stretch grid gap-3">
            {refundTimeline.map((step) => (
              <div key={step.title}>
                <div
                  className={`smd:h-full smd:px-5 smd:py-6 smd:text-center rounded-[26px] border px-4 py-4 ${toneClasses[step.tone].timeline}`}
                >
                  <div className="smd:block flex items-center gap-3">
                    <div className="smd:mx-auto smd:mb-4 smd:h-11 smd:w-11 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <RefundPolicyIcon
                        name={step.icon}
                        className={`smd:h-5 smd:w-5 h-4 w-4 ${
                          step.tone === "blue"
                            ? "text-primaryNavy"
                            : step.tone === "red"
                              ? "text-[#ff4d4f]"
                              : "text-[#f59e0b]"
                        }`}
                      />
                    </div>

                    <div className="smd:text-center min-w-0 flex-1">
                      <div className="smd:block flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold">{step.title}</p>
                          <p className="smd:hidden mt-0.5 text-xs opacity-80">
                            {step.caption}
                          </p>
                        </div>

                        <p className="smd:mt-2 smd:text-[18px] text-sm leading-none font-bold whitespace-nowrap">
                          {step.subtitle}
                        </p>
                      </div>

                      <p className="smd:block mt-2 hidden text-sm opacity-80">
                        {step.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
