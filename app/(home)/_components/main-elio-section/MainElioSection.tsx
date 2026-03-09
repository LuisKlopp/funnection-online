"use client";

import Image from "next/image";

import MainElio from "@/public/images/main-elio-1.webp";

import { TitleBadge } from "../TitleBadge";

export const MainElioSection = () => {
  return (
    <section className="flex w-full flex-col bg-[#F5F6FB] px-6 py-14">
      <TitleBadge title="About Elio" />
      <div className="mx-auto flex flex-col items-center">
        <p className="smd:text-base mb-2 text-sm font-semibold text-[#4A5FD9]">
          이 공간을 만든 사람
        </p>
        <div className="mb-8 flex items-end gap-2">
          <h2 className="smd:text-4xl text-4xl font-bold text-gray-900">
            엘리오
          </h2>
          <p className="smd:text-3xl text-gray-6 text-2xl font-normal">
            (Elio)
          </p>
        </div>
      </div>
      <div className="smd:grid-cols-2 mx-auto grid max-w-3xl items-center gap-8">
        <div className="smd:row-span-3 relative max-w-100 overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={MainElio}
            alt="엘리오"
            width={400}
            height={500}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <p className="smd:col-start-2 smd:self-center smd:justify-self-center leading-relaxed text-gray-400 italic">
          "우리는 질문으로 서로를 이해하고,
          <br className="smd:hidden" /> 대화로 연결됩니다.
          <br /> 퍼넥션은 그런 연결의 공간이 되고자 합니다."
        </p>
        <ul className="smd:text-lg smd:col-start-2 smd:space-y-2 space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />
            퍼넥션 모임 진행자
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />웹 개발자
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />
            사람을 연결하는 커뮤니케이터
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />
            질문을 통해 관계를 형성합니다. 재밌게요.
          </li>
        </ul>
        <a
          href="/contact"
          className="smd:col-start-2 ml-auto w-fit font-medium text-[#4A5FD9] underline underline-offset-4 hover:text-[#3B4ECC]"
        >
          연락하기
        </a>
      </div>
    </section>
  );
};
