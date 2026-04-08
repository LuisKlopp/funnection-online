"use client";

import Image from "next/image";

import MainElio from "@/public/images/main-elio-1.webp";

import { TitleBadge } from "../TitleBadge";

export const MainElioSection = () => {
  return (
    <section className="bg-lightNavy flex w-full flex-col px-6 py-14">
      <TitleBadge title="About Elio" />
      <div className="mx-auto flex flex-col items-center">
        <p className="smd:text-base text-primaryNavy mb-2 text-sm font-semibold">
          이 공간을 만든 사람
        </p>
        <div className="mb-8 flex items-end gap-2">
          <h2 className="smd:text-4xl text-gray-8 text-4xl font-bold">
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
            <span className="bg-primaryNavy mt-2 h-2 w-2 rounded-full" />
            퍼넥션 모임 진행자
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primaryNavy mt-2 h-2 w-2 rounded-full" />웹
            개발자
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primaryNavy mt-2 h-2 w-2 rounded-full" />
            사람을 연결하는 커뮤니케이터
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-primaryNavy mt-2 h-2 w-2 rounded-full" />
            질문을 통해 관계를 형성합니다. 재밌게요.
          </li>
        </ul>
        <div className="smd:justify-end flex w-full flex-col gap-1 text-sm">
          <span className="text-primaryNavy font-medium">문의하기</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="smd:text-[12px] text-[10px]">📞</span>
              <span className="smd:col-start-2 text-gray-6 smd:text-base w-fit underline-offset-4">
                010-9975-5904
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="smd:text-[12px] text-[10px]">📩</span>
              <span className="smd:col-start-2 text-gray-6 smd:text-base w-fit underline-offset-4">
                fbgus333@naver.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
