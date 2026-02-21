"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-2/80 w-full px-6 pt-20 pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-bold text-[#4A5FD9]">퍼넥션</h3>

          <p className="mb-4 text-gray-600">질문으로 연결되는 사람들</p>

          <p className="text-sm leading-relaxed text-gray-500">
            엘리오가 만든 감정 기반 질문 플랫폼입니다.
            <br /> 오프라인 대화 모임과 함께 운영됩니다.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <a href="#" className="text-gray-700 hover:text-[#4A5FD9]">
            오늘의 질문
          </a>
          <a href="#" className="text-gray-700 hover:text-[#4A5FD9]">
            퍼넥션 오프라인
          </a>
          <a href="#" className="text-gray-700 hover:text-[#4A5FD9]">
            엘리오 소개
          </a>
          <a href="#" className="text-gray-700 hover:text-[#4A5FD9]">
            문의하기
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col border-t border-gray-200 pt-6 text-sm text-gray-400 md:flex-row md:justify-between">
        <p>© 2024 Funnection Online. All rights reserved.</p>
        <p>Powered by Readdy</p>
      </div>
    </footer>
  );
};
