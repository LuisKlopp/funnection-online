import { useQuery } from "@tanstack/react-query";

import { fetchEvents } from "@/api/fetchEvents.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { EventData } from "@/types/event.type";

export const useEventsQuery = () => {
  return useQuery<EventData[]>({
    queryKey: [QUERY_KEYS.EVENTS],
    queryFn: fetchEvents,
    staleTime: 1000 * 60 * 10,
  });
};
