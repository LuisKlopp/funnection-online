import { AnswerType } from "@/types/answer.type";

import { ResponsePreviewCard } from "./ResponsePreviewCard";

interface ResponseListProps {
  answersData: AnswerType[];
}

export const ResponseList = ({ answersData }: ResponseListProps) => {
  return (
    <div className="space-y-6">
      {answersData.map((answer) => (
        <ResponsePreviewCard key={answer.id} answerInfo={answer} />
      ))}
    </div>
  );
};
