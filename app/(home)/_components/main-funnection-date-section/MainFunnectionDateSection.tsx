"use client";

import { ArrowRight, MapPin, Users } from "lucide-react";

export const MainFunnectionDateSection = () => {
  return (
    <section className="bg-lightNavy w-full px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-primaryNavy mb-4 text-sm font-semibold tracking-wide">
            FUNNECTION <span className="text-gray-7">OFFLINE GATHERING</span>
          </p>

          <h2 className="text-primaryNavy mb-6 text-5xl font-bold">
            퍼넥션 <span className="text-gray-7">오프라인 모임</span>
          </h2>

          <p className="text-gray-8 text-lg">
            질문을 통해 서로를 알아가는 오프라인 대화 모임입니다.
          </p>
          <p className="text-gray-8 mb-10 text-lg">
            정답 없는 질문 속에서 우리는 서로를 이해하고 연결됩니다.
          </p>

          <button className="bg-primaryNavy hover:bg-deepNavy flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-medium text-white transition-all duration-200">
            오프라인 일정 보기
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <p className="mb-3 text-sm text-gray-400">다음 모임</p>

          <h3 className="text-primaryNavy mb-2 text-4xl font-bold">
            2026년 2월 22일
          </h3>

          <p className="text-gray-5 mb-6">일요일 오후 2시</p>

          <div className="border-gray-2 mb-6 border-t" />

          <div className="mb-4 flex items-start gap-3">
            <MapPin className="text-gray-5 mt-1 h-5 w-5" />
            <div>
              <p className="text-gray-8 font-medium">
                관악구 남부순환로 1808 관악센츄리타워 1107호
              </p>
              <p className="text-gray-5 text-sm">
                서울대입구역 4번 출구 도보 1분
              </p>
            </div>
          </div>

          <div className="text-primaryNavy flex items-center gap-3">
            <Users className="h-5 w-5" />
            <p className="font-medium">마감</p>
          </div>
        </div>
      </div>
    </section>
  );
};
