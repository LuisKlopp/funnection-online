import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { editAnswer } from "@/api/editAnswer.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";
import { AnswerType, EditAnswerRequest, ListAnswerType } from "@/types/answer.type";

const updateEditedAnswer = ({
  answer,
  current,
}: {
  answer: AnswerType;
  current?: ListAnswerType;
}) => {
  if (!current) return current;

  return {
    ...current,
    answers: current.answers.map((item) =>
      item.id === answer.id ? { ...item, ...answer } : item
    ),
  };
};

export const useEditAnswerMutation = (questionId: number) => {
  const queryClient = useQueryClient();
  const setMyAnswer = useCheckAnsweredStore((s) => s.setMyAnswer);
  const answerQueryKey = [QUERY_KEYS.ANSWERS, questionId];

  const mutation = useMutation<AnswerType, AxiosError, EditAnswerRequest>({
    mutationFn: editAnswer,
    onSuccess: (answer) => {
      setMyAnswer(questionId, answer);

      queryClient.setQueriesData<ListAnswerType>(
        { queryKey: answerQueryKey },
        (current) =>
          updateEditedAnswer({
            answer,
            current,
          })
      );
    },
  });

  const editMyAnswer = async (content: string) => {
    try {
      const answer = await mutation.mutateAsync({
        questionId,
        content,
      });

      return {
        ok: true as const,
        answer,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;

        if (status === 400) {
          return {
            ok: false as const,
            message:
              (error.response?.data as { message?: string } | undefined)
                ?.message || "수정할 답변 내용을 확인해주세요.",
          };
        }

        if (status === 404) {
          return {
            ok: false as const,
            message: "수정할 답변을 찾을 수 없어요.",
          };
        }

        return {
          ok: false as const,
          message:
            (error.response?.data as { message?: string } | undefined)
              ?.message || "답변 수정에 실패했어요.",
        };
      }

      return {
        ok: false as const,
        message: "답변 수정에 실패했어요.",
      };
    }
  };

  return {
    editMyAnswer,
    isPending: mutation.isPending,
  };
};
