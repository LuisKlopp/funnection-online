import { useQuery } from "@tanstack/react-query";

import { fetchResponsesData } from "@/api/fetchResponsesData.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { ResponsesData } from "@/types/response.type";

export const useResponsesQuery = (questionId: number) => {
  return useQuery<ResponsesData[]>({
    queryKey: [QUERY_KEYS.ANSWERS, questionId],
    queryFn: () => fetchResponsesData(questionId),
    enabled: !!questionId,
    staleTime: 1000 * 30,
  });
};
