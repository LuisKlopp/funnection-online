"use client";

import { ArrowRight } from "lucide-react";

import { useModal } from "@/hooks/ui/useModal";
import { HomeAnswer } from "@/types/home.type";

import { SectionHeader } from "../SectionHeader";
import { ResponseList } from "./ResponseList";

interface ResponseSectionProps {
  answers: HomeAnswer[];
}

export const ResponseSection = ({ answers }: ResponseSectionProps) => {
  const { openModal } = useModal("bottom-answer-list");
  const questionId = answers[0]?.questionId;
  return (
    <section className="bg-gray-1/80 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          id="responses"
          titleBadge="Other Answers"
          title="다른 사람들은 이렇게 답했어요"
          description="6개의 솔직한 이야기"
        />
        <ResponseList answersData={answers} />

        <div
          onClick={() =>
            openModal({
              questionId: questionId,
            })
          }
          className="group hover:text-primaryNavy text-gray-5 mt-4 ml-auto flex w-fit cursor-pointer items-center gap-1"
        >
          <p className="text-sm">전체 답변 구경하기 (6)</p>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </section>
  );
};
