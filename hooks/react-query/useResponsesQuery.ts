import { useQuery } from "@tanstack/react-query";

import { fetchResponsesData } from "@/api/fetchResponsesData.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { ListAnswerType } from "@/types/answer.type";

export const useResponsesQuery = (
  questionId?: number,
  sort: "latest" | "like" = "latest",
  limit?: number,
  refetchOnMount?: boolean | "always"
) => {
  return useQuery<ListAnswerType>({
    queryKey: [QUERY_KEYS.ANSWERS, questionId ?? "none", sort, limit ?? "all"],
    queryFn: () => fetchResponsesData(questionId!, sort, limit),
    enabled: !!questionId,
    staleTime: 1000 * 30,
    refetchOnMount,
  });
};
