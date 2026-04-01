import { useMutation } from "@tanstack/react-query";

import { loginAdmin } from "@/api/admin-auth.api";

export const useAdminLoginMutation = () => {
  return useMutation({
    mutationFn: loginAdmin,
  });
};
