import { useQuery } from "@tanstack/react-query";

import { fetchApplicationsByEvent } from "@/api/admin-applications.api";

export const useApplicationsByEventQuery = (eventId: number) => {
  return useQuery({
    queryKey: ["applications", eventId],
    queryFn: () => fetchApplicationsByEvent(eventId),
    enabled: !!eventId,
  });
};
