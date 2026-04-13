"use client";

import { ArrowRight } from "lucide-react";

import { BottomAnswerListModal } from "@/components/ui/modal/BottomAnswerListModal";
import { useModal } from "@/hooks/ui/useModal";
import { AnswerType } from "@/types/answer.type";

import { SectionHeader } from "../SectionHeader";
import { ResponseList } from "./ResponseList";

interface ResponseSectionProps {
  answers: AnswerType[];
}

export const ResponseSection = ({ answers }: ResponseSectionProps) => {
  const modal = useModal();
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          id="responses"
          titleBadge="Other Answers"
          title="다른 사람들은 이렇게 답했어요"
          description={`${answers.length}개의 솔직한 이야기`}
        />
        <ResponseList answersData={answers} />
        <div
          onClick={() => modal.openModal("answers")}
          className="group hover:text-primaryNavy text-gray-5 mt-4 ml-auto flex w-fit cursor-pointer items-center gap-1"
        >
          <p className="text-sm">전체 답변 구경하기 (6)</p>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
      {modal.isModal && <BottomAnswerListModal onClose={modal.closeModal} />}
    </section>
  );
};
