import { getAnonId } from "@/lib/anon";
import { ListAnswerType } from "@/types/answer.type";

import { axiosInstance } from "./axios";

export const fetchResponsesData = async (
  questionId: number,
  sort: "latest" | "like" = "latest",
  limit?: number
): Promise<ListAnswerType> => {
  const anonId = getAnonId();

  const { data } = await axiosInstance.get("/funnection-online/answers", {
    params: {
      questionId,
      sort,
      limit,
      anonId,
    },
  });

  return data;
};
