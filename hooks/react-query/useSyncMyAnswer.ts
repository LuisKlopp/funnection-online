"use client";

import { useEffect, useState } from "react";

import { fetchMyAnswer } from "@/api/fetchMyAnswer.api";
import { useCheckAnsweredStore } from "@/store/checkAnswered.store";

export const useSyncMyAnswer = (questionId: number) => {
  const [isSyncComplete, setIsSyncComplete] = useState(false);

  const isAnsweredMapInitialized = useCheckAnsweredStore(
    (s) => s.isInitialized
  );

  const answered = useCheckAnsweredStore((s) => s.answeredMap[questionId]);

  const myAnswer = useCheckAnsweredStore((s) => s.myAnswers[questionId]);

  const setMyAnswer = useCheckAnsweredStore((s) => s.setMyAnswer);

  useEffect(() => {
    if (!isAnsweredMapInitialized) {
      setIsSyncComplete(false);
      return;
    }

    if (!answered || myAnswer) {
      setIsSyncComplete(true);
      return;
    }

    let ignore = false;
    setIsSyncComplete(false);

    const getMyAnswer = async () => {
      try {
        const res = await fetchMyAnswer(questionId);

        if (res && !ignore) {
          setMyAnswer(questionId, res);
        }
      } catch (e) {
        console.error("내 답변 조회 실패", e);
      } finally {
        if (!ignore) {
          setIsSyncComplete(true);
        }
      }
    };

    getMyAnswer();

    return () => {
      ignore = true;
    };
  }, [
    answered,
    isAnsweredMapInitialized,
    myAnswer,
    questionId,
    setMyAnswer,
  ]);

  return { isSyncComplete };
};
