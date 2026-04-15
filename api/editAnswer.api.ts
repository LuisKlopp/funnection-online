import { getAnonId } from "@/lib/anon";
import {
  AnswerType,
  EditAnswerRequest,
  EditAnswerResponse,
} from "@/types/answer.type";

import { axiosInstance } from "./axios";

type EditAnswerApiResponse = AnswerType | EditAnswerResponse;

const isWrappedEditResponse = (
  response: EditAnswerApiResponse
): response is EditAnswerResponse => {
  return "answer" in response;
};

export const editAnswer = async (body: EditAnswerRequest) => {
  const anonId = getAnonId();
  const { data } = await axiosInstance.patch<EditAnswerApiResponse>(
    "/funnection-online/answers/me",
    {
      ...body,
      anonId,
    }
  );

  return isWrappedEditResponse(data) ? data.answer : data;
};
