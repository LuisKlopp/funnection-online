import { AdminLoginRequest, AdminLoginResponse } from "@/types/admin-auth.type";

import { axiosInstance } from "./axios";

export const loginAdmin = async (
  payload: AdminLoginRequest
): Promise<AdminLoginResponse> => {
  const { data } = await axiosInstance.post<AdminLoginResponse>(
    "/funnection-online/admin/auth/login",
    payload
  );

  return data;
};
