import { useQuery } from "@tanstack/react-query";

import { fetchResponsesData } from "@/api/fetchResponsesData.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { AnswerType } from "@/types/answer.type";

export const useResponsesQuery = (questionId?: number) => {
  return useQuery<AnswerType[]>({
    queryKey: [QUERY_KEYS.ANSWERS, questionId ?? "none"],
    queryFn: () => fetchResponsesData(questionId!),
    enabled: !!questionId,
    staleTime: 1000 * 30,
  });
};
