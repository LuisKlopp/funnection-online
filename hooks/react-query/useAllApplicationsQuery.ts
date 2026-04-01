import { useQuery } from "@tanstack/react-query";

import { fetchAllApplications } from "@/api/admin-applications.api";

export const useAllApplicationsQuery = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: fetchAllApplications,
    staleTime: 1000 * 10,
  });
};
