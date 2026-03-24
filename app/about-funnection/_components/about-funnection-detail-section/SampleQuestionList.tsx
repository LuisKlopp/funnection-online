"use client";

import { MessageCircleQuestion } from "lucide-react";

import { SampleQuestionCard } from "./SampleQuestionCard";

const QUESTIONS = [
  "나는 언제 살아있다는 것을 느끼나요?",
  '스스로도 "내가 멋지다"라고 느낄 때는 언제인가요?',
  "전 애인에게 영향을 받았던 부분이 있다면 무엇인가요?",
  "내가 생각하는 연애할 때 나의 장점은?",
];

export const SampleQuestionList = () => {
  return (
    <div className="mx-auto flex w-full max-w-175 flex-col gap-4">
      <div className="flex flex-col gap-4">
        {QUESTIONS.map((question, index) => (
          <SampleQuestionCard
            key={`${question}-${index}`}
            icon={MessageCircleQuestion}
            text={question}
          />
        ))}
      </div>
    </div>
  );
};
