import { MessageCircle } from "lucide-react";
import Image from "next/image";

import AboutFunnectionImage from "@/public/images/about-funnection-image/about-funnection-main.webp";

export const AboutFunnectionHeroSection = () => {
  return (
    <div className="bg-gray-1 relative flex h-svh w-full items-center justify-center">
      <div className="absolute inset-0 z-10 bg-black/70" />
      <Image
        alt="about-funnection-image"
        src={AboutFunnectionImage}
        fill
        className="object-cover"
        sizes="100vw"
        unoptimized
        loading="eager"
      />
      <div className="fade-up relative z-11 flex flex-col items-center justify-center gap-4">
        <div className="bg-gray-1/10 border-gray-1/40 flex items-center gap-1 rounded-full border px-3 py-2 text-xs font-medium tracking-wide text-white backdrop-blur">
          <MessageCircle size={16} /> Offline Gathering
        </div>
        <div className="smd:text-5xl text-center text-3xl font-bold">
          <span className="text-white">
            가치관 대화 모임 <br />
          </span>
          <div className="smd:h-4 h-1" />
          <span className="smd:text-5xl text-4xl text-[#558dff]">퍼넥션</span>
        </div>
        <span className="text-gray-3 text-center text-base leading-6 break-keep">
          <span className="text-[22px] text-white">소개팅이 아니에요</span>
          <br />
          <br />
          처음 보는 남녀 8명이 한 공간에 모여
          <br />
          같은 질문에 답하며,
          <br />
          진짜 대화가 시작되는 경험이에요.
        </span>

        <div className="absolute -bottom-40 flex cursor-pointer flex-col items-center">
          <span className="text-lightNavy text-[13px]">
            퍼넥션이 궁금하다면?
          </span>
          <div className="bg-gray-1/10 border-gray-1/40 jump mt-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur">
            <span className="text-xl text-white">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
