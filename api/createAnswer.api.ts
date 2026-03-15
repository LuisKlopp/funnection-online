import { CreateAnswerRequest } from "@/types/answer.type";

import { axiosInstance } from "./axios";

export const createAnswer = async (body: CreateAnswerRequest) => {
  const { data } = await axiosInstance.post("/funnection-online/answers", body);

  return data;
};
