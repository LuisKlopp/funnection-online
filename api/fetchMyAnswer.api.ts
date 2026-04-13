import { getAnonId } from "@/lib/anon";

import { axiosInstance } from "./axios";

export const fetchMyAnswer = async (questionId: number) => {
  const anonId = getAnonId();

  const { data } = await axiosInstance.get(`/funnection-online/answers/me`, {
    params: { questionId, anonId },
  });

  return data;
};
