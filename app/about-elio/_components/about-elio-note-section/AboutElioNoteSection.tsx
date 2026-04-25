import Image from "next/image";

import MainElioCloseup from "@/public/images/main-elio.webp";

import { SectionHeading } from "../common/SectionHeading";

export const AboutElioNoteSection = () => {
  return (
    <section className="smd:px-8 smd:py-18 bg-white px-4 py-8">
      <div className="mx-auto max-w-175">
        <div className="mdl:grid-cols-[minmax(0,1fr)_360px] mdl:gap-12 grid gap-8">
          <div className="min-w-0">
            <SectionHeading eyebrow="Personal Note" title="엘리오 한마디" />

            <div className="text-gray-6 mt-10 space-y-7 break-keep">
              <p className="smd:text-[16px] smd:leading-8 text-[15px] leading-7">
                퍼넥션을 시작한 지 꽤 됐는데,
                <br />
                아직도 모임 전날 밤엔 긴장합니다.
              </p>

              <p className="smd:text-[16px] smd:leading-8 text-[15px] leading-7">
                "이번에도 잘 될까?" 하는 마음이요.
                <br />
                근데 그 긴장이 없어지면 안 된다고 생각해요.
                <br />
                그게 없어지는 순간, 대충 하게 되는 것 같아서요.
              </p>

              <p className="smd:text-[16px] smd:leading-8 text-[15px] leading-7">
                저는 퍼넥션이 그냥 모임이 아니라,
                <br />
                누군가에게 "이런 대화도 할 수 있구나"를
                <br />
                처음 경험하는 공간이었으면 합니다.
              </p>
            </div>

            <div className="border-primaryNavy/10 mt-10 border-t pt-6">
              <p className="text-gray-4 smd:text-[16px] smd:leading-7 text-[14px] leading-6">
                와주셔서 감사합니다.
              </p>
              <div className="mt-5">
                <p className="text-gray-9 smd:text-[20px] text-[18px] font-bold tracking-tight">
                  엘리오
                </p>
                <p className="text-gray-5 smd:text-[16px] smd:leading-6.5 mt-1 text-[14px] leading-6">
                  퍼넥션 운영자
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-1 overflow-hidden rounded-4xl shadow-[0_24px_60px_rgba(17,24,39,0.1)]">
            <Image
              src={MainElioCloseup}
              alt="엘리오 클로즈업"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
