import { useQuery } from "@tanstack/react-query";

import { fetchAllApplications } from "@/api/admin-applications.api";
import { AdminEventGroup } from "@/types/admin-application.type";

export const useAllApplicationsQuery = (enabled = true) => {
  return useQuery<AdminEventGroup[]>({
    queryKey: ["applications"],
    queryFn: fetchAllApplications,
    enabled,
    staleTime: 1000 * 10,
  });
};
