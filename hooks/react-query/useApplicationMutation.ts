import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  cancelApplication,
  confirmApplication,
} from "@/api/admin-applications.api";

export const useApplicationMutation = () => {
  const queryClient = useQueryClient();

  const confirmMutation = useMutation({
    mutationFn: confirmApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });

  const cancelMutation = useMutation({
    mutationFn: cancelApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });

  return {
    confirm: confirmMutation.mutate,
    cancel: cancelMutation.mutate,
    isConfirming: confirmMutation.isPending,
    isCancelling: cancelMutation.isPending,
  };
};
