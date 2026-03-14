import { useQuery } from "@tanstack/react-query";

import { fetchHomeData } from "@/api/fetchHomeData.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { HomeResponse } from "@/types/home.type";

export const useHomeQuery = () => {
  return useQuery<HomeResponse>({
    queryKey: QUERY_KEYS.HOME,
    queryFn: fetchHomeData,
    staleTime: 1000 * 30,
  });
};
