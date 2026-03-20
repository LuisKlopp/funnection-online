import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createAnswer } from "@/api/createAnswer.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { CreateAnswerRequest } from "@/types/answer.type";

export const useCreateAnswerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, CreateAnswerRequest>({
    mutationFn: createAnswer,

    onSuccess: (_, variables) => {
      localStorage.setItem("user_gender", variables.gender);
      localStorage.setItem("user_age_group", variables.ageGroup);

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ANSWERS],
      });
    },
  });
};
