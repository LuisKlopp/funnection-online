"use client";

import { HeartHandshake, Lightbulb, Link2 } from "lucide-react";

export const MainFunnectionValueSection = () => {
  return (
    <section className="w-full bg-[#F5F6FB] px-6 py-28">
      <div className="mx-auto max-w-175 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
          질문은 사람을 연결합니다
        </h2>

        <p className="mb-16 text-lg text-gray-400">
          퍼넥션에서 경험할 수 있는 것들
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#E9EBF6]">
              <HeartHandshake className="h-8 w-8 text-[#4A5FD9]" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              깊은 대화
            </h3>

            <p className="leading-relaxed text-gray-500">
              표면적인 대화를 넘어, 서로의 생각과 감정을 나누는 진정한 대화를
              경험합니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#E9EBF6]">
              <Link2 className="h-8 w-8 text-[#4A5FD9]" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              새로운 관계
            </h3>

            <p className="leading-relaxed text-gray-500">
              비슷한 고민과 생각을 가진 사람들과 만나 의미 있는 관계를
              만들어갑니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#E9EBF6]">
              <Lightbulb className="h-8 w-8 text-[#4A5FD9]" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              자기 성찰
            </h3>

            <p className="leading-relaxed text-gray-500">
              질문에 답하며 자신을 돌아보고, 내면의 생각을 정리하는 시간을
              가집니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
