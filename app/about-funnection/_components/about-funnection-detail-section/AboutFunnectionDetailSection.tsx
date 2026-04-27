"use client";

import {
  Link2,
  type LucideIcon,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const FEATURE_CARDS: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}> = [
  {
    icon: MessageCircle,
    title: "질문 중심",
    description:
      "모든 대화는 정성껏 설계된 질문에서 시작돼요. 어릴 때부터 호기심 많았던 모임장이 직접 떠올리는 신박한 질문들에 답해보세요.",
    index: 1,
  },
  {
    icon: ShieldCheck,
    title: "안전한 분위기",
    description:
      "판단 없이 들어주는 공간이에요. 틀린 답도, 이상한 생각도 없어요. 그냥 솔직하게 말해도 괜찮은 곳이에요.",
    index: 2,
  },
  {
    icon: Link2,
    title: "자연스러운 연결",
    description:
      "억지로 친해지려 하지 않아도 괜찮아요. 모든 게스트들이 부담없이 본인의 텐션에 맞게 대화할 수 있길 바랍니다.",
    index: 3,
  },
];

export const AboutFunnectionDetailSection = () => {
  return (
    <section className="bg-lightNavy smd:px-8 smd:py-18 px-4 py-12">
      <div className="mx-auto max-w-175">
        <div className="mx-auto max-w-3xl">
          <div>
            <span className="text-primaryNavy text-[12px] font-bold tracking-widest uppercase">
              Detail
            </span>

            <h2 className="text-gray-9 smd:text-[36px] smd:leading-[1.15] mt-4 text-[24px] leading-[1.18] font-bold tracking-tight break-keep">
              퍼넥션은
              <br />
              <span className="text-primaryNavy">질문으로 사람을</span>
              <br />
              연결하는 모임이에요
            </h2>

            <div className="text-gray-6 mt-6 space-y-6 break-keep">
              <p className="smd:text-[16px] smd:leading-7 text-[14px] leading-6">
                3시간 동안 여러 신박한 컨텐츠로
                <br />
                처음 만난 사람과도 깊은 이야기를 나눌 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5">
          {FEATURE_CARDS.map(({ title, description, index }) => (
            <article
              key={title}
              className="smd:px-7 smd:py-7 box-shadow-2 rounded-2xl bg-white p-4"
            >
              <div className="smd:gap-5 flex items-start gap-4">
                <div className="text-primaryNavy flex shrink-0 items-start justify-center rounded-2xl text-xl leading-[1.2]">
                  {index}.
                </div>
                <div className="min-w-0">
                  <h3 className="text-gray-9 smd:text-[18px] text-[15px] leading-[1.2] font-bold tracking-tight">
                    {title}
                  </h3>
                  <p className="text-gray-6 smd:mt-3 smd:text-[16px] smd:leading-6.5 mt-2.5 text-[14px] leading-5.5 break-keep">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
