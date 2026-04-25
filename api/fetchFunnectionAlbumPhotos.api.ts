import { FunnectionAlbumPhotosResponse } from "@/types/funnection-album.type";

import { axiosInstance } from "./axios";

export const fetchFunnectionAlbumPhotos =
  async (): Promise<FunnectionAlbumPhotosResponse> => {
    const { data } = await axiosInstance.get<FunnectionAlbumPhotosResponse>(
      "/funnection-online/about/funnection/album-photos"
    );

    return data;
  };
