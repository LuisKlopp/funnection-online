import { useCreateAnswerMutation } from "@/hooks/react-query/useCreateAnswerMutation";
import { setAnsweredLocal } from "@/lib/check-answered";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";
import { useQuestionStore } from "@/store/question.store";
import { useUserInfoStore } from "@/store/userInfo.store";
import { UserInfoType } from "@/types/user-info.type";

export const useSubmitAnswer = () => {
  const { mutate, isPending } = useCreateAnswerMutation();
  const question = useQuestionStore((s) => s.question);
  const { setUserInfo } = useUserInfoStore();
  const setAnswered = useCheckAnsweredStore((s) => s.setAnswered);
  const setMyAnswer = useCheckAnsweredStore((s) => s.setMyAnswer);

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
        onSuccess: (res) => {
          setAnswered(question.id);
          setMyAnswer(question.id, res.answer);
          setAnsweredLocal(question.id);
          setUserInfo(userInfo);
          onSuccess?.();
        },
      }
    );
  };

  return { submitAnswer, isPending };
};
