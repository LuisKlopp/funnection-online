import { getAdminAccessToken } from "@/lib/admin-auth";
import { AdminEventGroup } from "@/types/admin-application.type";

import { axiosInstance } from "./axios";

const getAdminRequestConfig = () => {
  const accessToken = getAdminAccessToken();

  if (!accessToken) {
    return undefined;
  }

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export const fetchAllApplications = async (): Promise<AdminEventGroup[]> => {
  const { data } = await axiosInstance.get<AdminEventGroup[]>(
    "/funnection-online/admin/events",
    getAdminRequestConfig()
  );
  return data;
};

export const fetchApplicationsByEvent = async (eventId: number) => {
  const res = await axiosInstance.get(
    `/funnection-online/admin/events/${eventId}`,
    getAdminRequestConfig()
  );
  return res.data;
};

export const confirmApplication = async (applicationId: number) => {
  const res = await axiosInstance.patch(
    `/funnection-online/admin/events/applications/${applicationId}/confirm`,
    undefined,
    getAdminRequestConfig()
  );

  return res.data;
};

export const cancelApplication = async (applicationId: number) => {
  const res = await axiosInstance.patch(
    `/funnection-online/admin/events/applications/${applicationId}/cancel`,
    undefined,
    getAdminRequestConfig()
  );

  return res.data;
};
