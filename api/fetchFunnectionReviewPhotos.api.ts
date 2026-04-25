import { FunnectionReviewPhotosResponse } from "@/types/funnection-review.type";

import { axiosInstance } from "./axios";

export const fetchFunnectionReviewPhotos =
  async (): Promise<FunnectionReviewPhotosResponse> => {
    const { data } = await axiosInstance.get<FunnectionReviewPhotosResponse>(
      "/funnection-online/about/funnection/review-photos"
    );

    return data;
  };
