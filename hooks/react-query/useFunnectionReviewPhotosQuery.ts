import { useQuery } from "@tanstack/react-query";

import { fetchFunnectionReviewPhotos } from "@/api/fetchFunnectionReviewPhotos.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { FunnectionReviewPhotosResponse } from "@/types/funnection-review.type";

export const useFunnectionReviewPhotosQuery = () => {
  return useQuery<FunnectionReviewPhotosResponse>({
    queryKey: [QUERY_KEYS.FUNNECTION_REVIEW_PHOTOS],
    queryFn: fetchFunnectionReviewPhotos,
    staleTime: 1000 * 60 * 10,
  });
};
