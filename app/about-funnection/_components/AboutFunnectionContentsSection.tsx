"use client";

import {
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  type LucideIcon,
  MessagesSquare,
  ToggleLeft,
} from "lucide-react";

const CONTENT_STEPS: Array<{
  icon: LucideIcon;
  name: string;
  summary: string;
}> = [
  {
    icon: FileText,
    name: "프로필 제출",
    summary: "가볍게 나를 소개하며 대화의 첫 실마리를 만들어요.",
  },
  {
    icon: ToggleLeft,
    name: "OX",
    summary: "단순한 선택 하나로 서로의 생각 차이를 재밌게 발견해요.",
  },
  {
    icon: MessagesSquare,
    name: "문답",
    summary: "같은 질문에 답하며 처음 만난 사람과도 깊이 있게 이어져요.",
  },
  {
    icon: ImageIcon,
    name: "이미지 게임",
    summary: "말보다 먼저 떠오르는 감각으로 서로를 이해해봐요.",
  },
  {
    icon: CheckCircle2,
    name: "퍼스널 페이퍼",
    summary: "마지막에는 오늘의 대화와 감정을 천천히 정리해요.",
  },
];

export const AboutFunnectionContentsSection = () => {
  return (
    <section className="smd:py-12 bg-white px-4 py-8">
      <div className="mx-auto max-w-175">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-gray-9 smd:text-[56px] smd:leading-[1.15] text-[28px] leading-[1.18] font-bold tracking-tight break-keep">
            세 시간은
            <br />
            <span className="text-primaryNavy">이런 흐름으로</span>
            <br />
            이어져요
          </h2>

          <div className="text-gray-6 mt-10 space-y-6 break-keep">
            <p className="smd:text-[22px] smd:leading-[1.75] text-[16px] leading-[1.7] font-medium">
              설명만 길게 듣기보다,
              <br />
              직접 답하고 반응하며 자연스럽게 가까워져요.
            </p>
            <p className="smd:text-[18px] smd:leading-8 text-[14px] leading-6">
              프로필 제출, OX, 문답, 이미지 게임, 퍼스널 페이퍼까지.
              <br />각 프로그램이 이어지며 대화의 밀도를 조금씩 높여가요.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="bg-primaryNavy/10 -mx-4 overflow-x-auto px-4 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="smd:grid smd:w-full smd:grid-cols-2 smd:gap-4 flex w-max gap-3 xl:grid-cols-5">
              {CONTENT_STEPS.map(({ icon: Icon, name, summary }, index) => (
                <article
                  key={name}
                  className="border-primaryNavy/10 smd:w-auto w-55 rounded-[28px] border bg-white px-5 py-5 shadow-[0_18px_45px_rgba(53,112,233,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-primaryNavy flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </div>
                    <span className="text-primaryNavy/55 text-[12px] font-semibold tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-gray-9 smd:text-[18px] mt-4 text-[18px] font-bold tracking-tight">
                    {name}
                  </h3>
                  <p className="text-gray-6 smd:text-[15px] mt-2.5 text-[15px] leading-6 break-keep">
                    {summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
