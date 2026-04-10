import { useCreateAnswerMutation } from "@/hooks/react-query/useCreateAnswerMutation";
import { useQuestionStore } from "@/store/question.store";
import { useUserInfoStore } from "@/store/userInfo.store";
import { UserInfoType } from "@/types/user-info.type";

export const useSubmitAnswer = () => {
  const { mutate, isPending } = useCreateAnswerMutation();
  const question = useQuestionStore((s) => s.question);
  const { setUserInfo } = useUserInfoStore();

  const submitAnswer = ({
    content,
    userInfo,
    onSuccess,
  }: {
    content: string;
    userInfo: UserInfoType;
    onSuccess?: () => void;
  }) => {
    if (!question?.id) return;

    mutate(
      {
        questionId: question.id,
        content,
        ...userInfo,
      },
      {
        onSuccess: () => {
          setUserInfo(userInfo);
          onSuccess?.();
        },
      }
    );
  };

  return { submitAnswer, isPending };
};
