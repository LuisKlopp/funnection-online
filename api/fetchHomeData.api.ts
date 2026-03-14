import { HomeResponse } from "@/types/home.type";

import { axiosInstance } from "./axios";

export const fetchHomeData = async (): Promise<HomeResponse> => {
  const { data } = await axiosInstance.get("/funnection-online/home");
  return data;
};
