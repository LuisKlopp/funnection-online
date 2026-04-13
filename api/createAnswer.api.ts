import { getAnonId } from "@/lib/anon";
import { CreateAnswerRequest } from "@/types/answer.type";

import { axiosInstance } from "./axios";

export const createAnswer = async (body: CreateAnswerRequest) => {
  const anonId = getAnonId();
  const { data } = await axiosInstance.post("/funnection-online/answers", {
    ...body,
    anonId,
  });

  return data;
};
