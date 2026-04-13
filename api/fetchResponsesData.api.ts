import { AnswerType } from "@/types/answer.type";

import { axiosInstance } from "./axios";

export const fetchResponsesData = async (
  questionId: number
): Promise<AnswerType[]> => {
  const { data } = await axiosInstance.get("/funnection-online/answers", {
    params: {
      questionId,
      sort: "latest",
    },
  });

  return data;
};
