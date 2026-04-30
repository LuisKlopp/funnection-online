import { create } from "zustand";

import { AnswerType } from "@/types/answer.type";

interface CheckAnsweredState {
  answeredMap: Record<number, boolean>;
  myAnswers: Record<number, AnswerType>;
  isInitialized: boolean;

  setAnswered: (questionId: number) => void;
  setMyAnswer: (questionId: number, answer: AnswerType) => void;

  init: (map: Record<number, boolean>) => void;
}

export const useCheckAnsweredStore = create<CheckAnsweredState>((set) => ({
  answeredMap: {},
  myAnswers: {},
  isInitialized: false,

  setAnswered: (questionId) =>
    set((state) => ({
      isInitialized: true,
      answeredMap: {
        ...state.answeredMap,
        [questionId]: true,
      },
    })),

  setMyAnswer: (questionId, answer) =>
    set((state) => ({
      myAnswers: {
        ...state.myAnswers,
        [questionId]: answer,
      },
    })),

  init: (map) =>
    set((state) => ({
      ...state,
      answeredMap: map,
      isInitialized: true,
    })),
}));
