import { useQuery } from "@tanstack/react-query";

import { fetchFunnectionAlbumPhotos } from "@/api/fetchFunnectionAlbumPhotos.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { FunnectionAlbumPhotosResponse } from "@/types/funnection-album.type";

export const useFunnectionAlbumPhotosQuery = () => {
  return useQuery<FunnectionAlbumPhotosResponse>({
    queryKey: [QUERY_KEYS.FUNNECTION_ALBUM_PHOTOS],
    queryFn: fetchFunnectionAlbumPhotos,
    staleTime: 1000 * 60 * 10,
  });
};
