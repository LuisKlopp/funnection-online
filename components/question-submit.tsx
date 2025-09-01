"use client";

import axios from "axios";

import { useModal } from "@/hooks/useModal";
import { useAnswerStore } from "@/store/answer-store";
import { OnlineQuestion } from "@/types/online-question.type";

import { PrimaryButton } from "./button/primary-button";
import { Input } from "./input";
import { AnswerModal } from "./modal/answer-modal";

interface QuestionSubmitProps {
  question: OnlineQuestion;
}

export const QuestionSubmit = ({ question }: QuestionSubmitProps) => {
  const { questionAnswer, setQuestionAnswer } = useAnswerStore();
  const { isModal, closeModal } = useModal();

  const handleSubmit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/online-answer`, {
        question_id: question.id,
        nickname: "익명의 고양이",
        content: questionAnswer,
      })
      .then(() => {
        setQuestionAnswer("");
        alert("답변이 저장되었어요 📝");
      });
  };

  return (
    <main className="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4">
      <div className="box-shadow-02 mb-12 flex min-w-[330px] flex-col items-center gap-4 rounded-xl bg-[#ECF0FF] px-8 py-8">
        <h2 className="text-sub-color mb-2 text-[18px] font-normal">
          오늘의 문답
        </h2>
        <p className="font-jua mb-4 text-base text-[#2e3953]">
          {question.content}
        </p>
        <Input
          value={questionAnswer}
          onChange={(e) => setQuestionAnswer(e.target.value)}
          placeholder="답변을 입력해보세요 :)"
          className="box-shadow-02 text-primary-color !w-full"
        />
        <div className="flex w-full justify-end">
          <PrimaryButton
            text="제출하기"
            disabled={!questionAnswer}
            onClick={handleSubmit}
          />
        </div>
        {isModal && <AnswerModal closeModal={closeModal} />}
      </div>
    </main>
  );
};
