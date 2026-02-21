"use client";

import Image from "next/image";

import MainElio from "@/public/images/main-elio.jpg";

export const MainElioSection = () => {
  return (
    <section className="w-full bg-[#F5F6FB] px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="relative w-100 overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={MainElio}
            alt="엘리오"
            width={700}
            height={700}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-[#4A5FD9]">
            이 공간을 만든 사람
          </p>

          <h2 className="mb-8 text-5xl font-extrabold text-gray-900">엘리오</h2>

          <ul className="mb-8 space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />
              개발자이자 모임 호스트
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />
              사람과 사람을 연결하는 기획자
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4A5FD9]" />
              질문을 통해 관계를 설계하는 사람
            </li>
          </ul>

          <p className="mb-8 leading-relaxed text-gray-400 italic">
            "우리는 질문을 통해 서로를 이해하고, 대화를 통해 연결됩니다.
            퍼넥션은 그런 연결의 공간이 되고자 합니다."
          </p>

          <a
            href="/contact"
            className="font-medium text-[#4A5FD9] underline underline-offset-4 hover:text-[#3B4ECC]"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
};
