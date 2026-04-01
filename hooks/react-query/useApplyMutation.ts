import { useMutation } from "@tanstack/react-query";

import { submitApplyForm } from "@/api/submitApplyForm.api";

export const useApplyMutation = () => {
  return useMutation({
    mutationFn: submitApplyForm,
  });
};
