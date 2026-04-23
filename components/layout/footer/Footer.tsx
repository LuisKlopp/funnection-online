"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 pt-20 pb-30">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-primaryNavy mb-4 text-2xl font-bold">퍼넥션</h3>

          <p className="text-gray-8 mb-4 font-medium">
            질문으로 연결되는 사람들
          </p>

          <p className="text-gray-7 text-sm leading-relaxed">
            엘리오가 만든 감정 기반 질문 플랫폼입니다.
            <br /> 오프라인 대화 모임과 함께 운영됩니다.
          </p>
        </div>

        <div className="text-gray-8 flex flex-col items-start gap-2 text-sm md:items-end">
          <a href="#" className="hover:text-primaryNavy">
            오늘의 질문
          </a>
          <a href="#" className="hover:text-primaryNavy">
            퍼넥션 오프라인
          </a>
          <a href="#" className="hover:text-primaryNavy">
            엘리오 소개
          </a>
          <Link href="/refund-policy" className="hover:text-primaryNavy">
            환불정책
          </Link>
          <Link href="/terms-of-use" className="hover:text-primaryNavy">
            이용약관
          </Link>
          <Link href="/privacy-policy" className="hover:text-primaryNavy">
            개인정보처리방침
          </Link>
          <a href="#" className="hover:text-primaryNavy">
            문의하기
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col border-t border-gray-200 pt-6 text-sm text-gray-400 md:flex-row md:justify-between">
        <p>
          © 2026 Funnection. All rights reserved. <br className="smd:hidden" />
          Created by Elio.
        </p>
      </div>
    </footer>
  );
};
