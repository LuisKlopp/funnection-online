import { Lightbulb, UserRound, Wrench } from "lucide-react";
import Image from "next/image";

import MainElioPortrait from "@/public/images/main-elio-1.webp";

import { SectionHeading } from "../common/SectionHeading";
import { IntroProfileList } from "./IntroProfileList";

const INTRO_PROFILE_ITEMS = [
  {
    icon: UserRound,
    label: "무엇을 하는 사람인지",
    description:
      "1인 개발자로 웹사이트를 직접 만들고, 퍼넥션이라는 오프라인 대화 모임을 기획·운영하고 있습니다.",
  },
  {
    icon: Lightbulb,
    label: "왜 이걸 시작했는지",
    description:
      '"좋은 질문 하나가 사람을 연결할 수 있다"는 걸 직접 경험하고 나서, 그 경험을 더 많은 사람에게 만들어주고 싶었습니다.',
  },
  {
    icon: Wrench,
    label: "지금 어떤 역할을 맡고 있는지",
    description:
      "질문 기획부터 모임 진행, 신청 관리, 웹사이트 제작까지 퍼넥션의 모든 것을 혼자 만들고 있습니다.",
  },
] as const;

export const AboutElioIntroSection = () => {
  return (
    <section className="smd:px-8 smd:pt-28 smd:pb-18 bg-white px-4 pt-18 pb-8">
      <div className="mx-auto max-w-175">
        <div className="smd:items-center mdl:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] mdl:gap-12 grid gap-8">
          <div className="bg-gray-1 relative overflow-hidden rounded-4xl shadow-[0_28px_70px_rgba(17,24,39,0.12)]">
            <Image
              src={MainElioPortrait}
              alt="엘리오"
              priority
              className="h-full w-full object-cover"
            />

            <div className="smd:px-7 smd:py-8 absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/80 via-black/45 to-transparent px-5 py-6">
              <SectionHeading
                eyebrow="Intro"
                eyebrowClassName="text-white/80"
                title={
                  <>
                    안녕하세요,
                    <br />
                    저는 <span className="text-primaryNavy">엘리오</span>
                    입니다
                  </>
                }
                titleClassName="mt-3 text-white smd:text-[28px] smd:leading-[1.2]"
              />
            </div>
          </div>

          <div className="smd:max-w-none min-w-0">
            <p className="text-gray-6 smd:text-[16px] smd:leading-7 text-[16px] leading-6 break-keep">
              질문으로 사람을 연결하는 모임을 운영합니다. 모임의 방식부터
              사이트의 화면까지, 지금 보이는 퍼넥션의 모든 것을 직접 설계하고
              있습니다.
            </p>
          </div>
        </div>

        <div className="smd:mt-12 mt-10">
          <IntroProfileList items={INTRO_PROFILE_ITEMS} />
        </div>
      </div>
    </section>
  );
};
