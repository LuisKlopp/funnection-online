import { axiosInstance } from "./axios";

export const fetchAllApplications = async () => {
  const res = await axiosInstance.get("/funnection-online/admin/events");
  return res.data;
};

export const fetchApplicationsByEvent = async (eventId: number) => {
  const res = await axiosInstance.get(
    `/funnection-online/admin/events/${eventId}`
  );
  return res.data;
};

export const confirmApplication = async (applicationId: number) => {
  const res = await axiosInstance.patch(
    `/funnection-online/admin/events/applications/${applicationId}/confirm`
  );

  return res.data;
};

export const cancelApplication = async (applicationId: number) => {
  const res = await axiosInstance.patch(
    `/funnection-online/admin/events/applications/${applicationId}/cancel`
  );

  return res.data;
};
