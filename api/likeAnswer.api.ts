import { getAnonId } from "@/lib/anon";
import { LikeAnswerResponse } from "@/types/answer.type";

import { axiosInstance } from "./axios";

export const likeAnswer = async (
  answerId: number
): Promise<LikeAnswerResponse> => {
  const anonId = getAnonId();

  const { data } = await axiosInstance.post<LikeAnswerResponse>(
    `/funnection-online/answers/${answerId}/like`,
    {
      anonId,
    }
  );

  return data;
};
