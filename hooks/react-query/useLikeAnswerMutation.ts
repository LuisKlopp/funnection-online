import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { likeAnswer } from "@/api/likeAnswer.api";
import { QUERY_KEYS } from "@/constants/query-keys.constants";
import { LikeAnswerResponse, ListAnswerType } from "@/types/answer.type";

const updateAnswerLikeState = ({
  answerId,
  likedByMe,
  likeCount,
  current,
}: {
  answerId: number;
  likedByMe: boolean;
  likeCount?: number;
  current?: ListAnswerType;
}) => {
  if (!current) return current;

  return {
    ...current,
    answers: current.answers.map((answer) =>
      answer.id === answerId
        ? {
            ...answer,
            likedByMe,
            likeCount: likeCount ?? answer.likeCount,
          }
        : answer
    ),
  };
};

export const useLikeAnswerMutation = (questionId: number) => {
  const queryClient = useQueryClient();
  const answerQueryKey = [QUERY_KEYS.ANSWERS, questionId];

  const syncAnswerLikeState = ({
    answerId,
    likedByMe,
    likeCount,
  }: {
    answerId: number;
    likedByMe: boolean;
    likeCount?: number;
  }) => {
    queryClient.setQueriesData<ListAnswerType>(
      { queryKey: answerQueryKey },
      (current) =>
        updateAnswerLikeState({
          answerId,
          likedByMe,
          likeCount,
          current,
        })
    );
  };

  const mutation = useMutation<
    LikeAnswerResponse,
    AxiosError,
    number,
    { previousQueries: Array<[readonly unknown[], ListAnswerType | undefined]> }
  >({
    mutationFn: likeAnswer,
    onMutate: async (answerId) => {
      await queryClient.cancelQueries({
        queryKey: answerQueryKey,
      });

      const previousQueries = queryClient.getQueriesData<ListAnswerType>({
        queryKey: answerQueryKey,
      });

      const currentAnswer = previousQueries
        .flatMap(([, current]) => current?.answers ?? [])
        .find((answer) => answer.id === answerId);

      if (currentAnswer) {
        syncAnswerLikeState({
          answerId,
          likedByMe: !currentAnswer.likedByMe,
          likeCount: Math.max(
            0,
            currentAnswer.likeCount + (currentAnswer.likedByMe ? -1 : 1)
          ),
        });
      }

      return { previousQueries };
    },
    onSuccess: (response, answerId) => {
      syncAnswerLikeState({
        answerId,
        likedByMe: response.likedByMe,
        likeCount: response.likeCount,
      });
    },
    onError: (_error, _answerId, context) => {
      context?.previousQueries.forEach(([queryKey, previousData]) => {
        queryClient.setQueryData(queryKey, previousData);
      });
    },
  });

  const likeOne = async (answerId: number) => {
    try {
      const response = await mutation.mutateAsync(answerId);

      return {
        ok: true as const,
        likedByMe: response.likedByMe,
        likeCount: response.likeCount,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;

        if (status === 409) {
          syncAnswerLikeState({
            answerId,
            likedByMe: true,
          });

          return {
            ok: true as const,
            likedByMe: true,
            alreadyLiked: true,
          };
        }

        if (status === 400) {
          return {
            ok: false as const,
            message: "내 답변에는 좋아요를 누를 수 없어요.",
          };
        }

        if (status === 404) {
          return {
            ok: false as const,
            message: "답변을 찾을 수 없어요.",
          };
        }

        return {
          ok: false as const,
          message:
            (error.response?.data as { message?: string } | undefined)
              ?.message || "좋아요 처리에 실패했어요.",
        };
      }

      return {
        ok: false as const,
        message: "좋아요 처리에 실패했어요.",
      };
    }
  };

  return {
    likeOne,
    isPending: mutation.isPending,
  };
};
