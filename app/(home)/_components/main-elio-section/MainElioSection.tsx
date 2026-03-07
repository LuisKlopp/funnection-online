"use client";

import Image from "next/image";

import MainElio from "@/public/images/main-elio-1.webp";

import { TitleBadge } from "../TitleBadge";

export const MainElioSection = () => {
  return (
    <section className="flex w-full flex-col bg-[#F5F6FB] px-6 py-14">
      <TitleBadge title="About Elio" />
      <div className="mx-auto flex flex-col items-center">
        <p className="smd:text-base mb-3 text-sm font-semibold text-[#4A5FD9]">
          이 공간을 만든 사람
        </p>
        <div className="mb-8 flex items-end gap-2">
          <h2 className="smd:text-5xl text-4xl font-semibold text-gray-900">
            엘리오
          </h2>
          <p className="smd:text-3xl text-2xl">(Elio)</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={MainElio}
            alt="엘리오"
            width={400}
            height={500}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <ul className="space-y-3 text-gray-700">
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

        <p className="leading-relaxed text-gray-400 italic">
          "우리는 질문을 통해 서로를 이해하고, 대화를 통해 연결됩니다. 퍼넥션은
          그런 연결의 공간이 되고자 합니다."
        </p>

        <a
          href="/contact"
          className="font-medium text-[#4A5FD9] underline underline-offset-4 hover:text-[#3B4ECC]"
        >
          연락하기
        </a>
      </div>
    </section>
  );
};
