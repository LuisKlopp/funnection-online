"use client";

import { User } from "lucide-react";

const responses = [
  {
    id: 1,
    content:
      "오랜만에 친구들과 함께 웃으며 밥을 먹던 순간이었어요. 특별한 일은 없었지만, 그 순간이 너무 소중하게 느껴졌습니다.",
  },
  {
    id: 2,
    content:
      "아침에 창문을 열었을 때 따뜻한 햇살이 들어오던 순간. 그냥 살아있다는 것만으로도 감사한 기분이 들었어요.",
  },
  {
    id: 3,
    content:
      "오랫동안 고민하던 프로젝트를 완성했을 때의 성취감. 힘들었지만 해냈다는 뿌듯함이 정말 행복했습니다.",
  },
  {
    id: 4,
    content:
      "강아지가 제 무릎에 머리를 기대고 잠들던 순간. 작은 생명이 저를 믿고 의지한다는 게 너무 따뜻했어요.",
  },
  {
    id: 5,
    content:
      "좋아하는 음악을 들으며 산책하던 저녁. 아무 생각 없이 걷는 것만으로도 마음이 편안해졌습니다.",
  },
];

export const ResponseSection = () => {
  return (
    <section className="my-24 px-4" id="responses">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-2xl font-semibold text-gray-900">
          <span className="text-primaryNavy mr-2">"</span>
          다른 사람들은 오늘의 질문에 이렇게 답했어요{" "}
          <span className="text-primaryNavy mr-2">"</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {responses.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-[#F4F6FB] p-6 shadow-sm"
            >
              <div className="bg-primaryNavy/60 absolute top-6 left-0 h-12 w-1 rounded-r-full" />

              <div className="mb-4 flex items-center gap-3">
                <div className="bg-primaryNavy flex h-10 w-10 items-center justify-center rounded-full">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-7 text-sm font-medium">익명</span>
              </div>
              <p className="text-gray-8 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
