import { HomeAnswer } from "@/types/home.type";

import { ResponseCard } from "./ResponseCard";

interface ResponseListProps {
  answersData: HomeAnswer[];
}

export const ResponseList = ({ answersData }: ResponseListProps) => {
  return (
    <div className="space-y-6">
      {answersData.map((answer) => (
        <ResponseCard key={answer.id} answerInfo={answer} variant="preview" />
      ))}
    </div>
  );
};
