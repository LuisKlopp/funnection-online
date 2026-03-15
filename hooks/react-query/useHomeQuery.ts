import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { fetchHomeData } from "@/api/fetchHomeData.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { useQuestionStore } from "@/store/question.store";
import { HomeResponse } from "@/types/home.type";

export const useHomeQuery = () => {
  const setQuestion = useQuestionStore((s) => s.setQuestion);

  const query = useQuery<HomeResponse>({
    queryKey: QUERY_KEYS.HOME,
    queryFn: fetchHomeData,
    staleTime: 1000 * 30,
  });

  useEffect(() => {
    if (query.data?.question) {
      setQuestion(query.data.question);
    }
  }, [query.data?.question]);

  return query;
};
