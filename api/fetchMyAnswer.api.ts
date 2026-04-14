import { getAnonId } from "@/lib/anon";
import { AnswerType } from "@/types/answer.type";

import { axiosInstance } from "./axios";

export const fetchMyAnswer = async (
  questionId: number
): Promise<AnswerType | null> => {
  const anonId = getAnonId();

  const { data } = await axiosInstance.get<AnswerType | null>(
    `/funnection-online/answers/me`,
    {
      params: { questionId, anonId },
    }
  );

  return data;
};
