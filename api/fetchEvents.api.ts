import { EventData } from "@/types/event.type";

import { axiosInstance } from "./axios";

export const fetchEvents = async (): Promise<EventData[]> => {
  const { data } = await axiosInstance.get<EventData[]>(
    "/funnection-online/events"
  );

  return data;
};
