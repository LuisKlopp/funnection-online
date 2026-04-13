"use client";

import { useEffect } from "react";

import { fetchMyAnswer } from "@/api/fetchMyAnswer.api";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

export const useSyncMyAnswer = (questionId: number) => {
  const answered = useCheckAnsweredStore((s) => s.answeredMap[questionId]);

  const myAnswer = useCheckAnsweredStore((s) => s.myAnswers[questionId]);

  const setMyAnswer = useCheckAnsweredStore((s) => s.setMyAnswer);

  useEffect(() => {
    if (!answered) return;
    if (myAnswer) return;

    const getMyAnswer = async () => {
      try {
        const res = await fetchMyAnswer(questionId);

        if (res) {
          setMyAnswer(questionId, res);
        }
      } catch (e) {
        console.error("내 답변 조회 실패", e);
      }
    };

    getMyAnswer();
  }, [answered, myAnswer, questionId, setMyAnswer]);
};
