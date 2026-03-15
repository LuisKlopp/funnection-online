import { ResponsesData } from "@/types/response.type";

import { axiosInstance } from "./axios";

export const fetchResponsesData = async (
  questionId: number
): Promise<ResponsesData[]> => {
  const { data } = await axiosInstance.get("/funnection-online/answers", {
    params: {
      questionId,
      sort: "latest",
    },
  });

  return data;
};
