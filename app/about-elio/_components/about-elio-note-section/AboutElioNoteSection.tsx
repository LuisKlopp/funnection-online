import Image from "next/image";

import MainElioCloseup from "@/public/images/main-elio.webp";

export const AboutElioNoteSection = () => {
  return (
    <section className="smd:px-8 smd:py-18 bg-white px-4 py-8">
      <div className="mx-auto max-w-175">
        <div className="mdl:grid-cols-[minmax(0,1fr)_360px] mdl:gap-12 grid gap-8">
          <div className="min-w-0">
            <p className="text-lg font-semibold">
              {" "}
              <>
                저는 사람들이 연결되는 순간을 <br />
                만드는 사람입니다.
                <br />
                <br />그 순간에,
                <br /> 당신도 있었으면 좋겠습니다.
              </>
            </p>
            <br />
            <p className="text-gray-5 smd:text-[18px] smd:leading-7 text-[14px] leading-6">
              와주셔서 감사합니다.
            </p>
            <div className="border-primaryNavy/10 mt-10 border-t pt-6">
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
