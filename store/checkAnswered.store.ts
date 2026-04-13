import { create } from "zustand";

interface Answer {
  id: number;
  content: string;
  questionId: number;
  nickname: string;
  gender: string;
  ageGroup: string;
  anonId: string;
  likeCount: number;
  createdAt: string;
}

interface CheckAnsweredState {
  answeredMap: Record<number, boolean>;
  myAnswers: Record<number, Answer>;

  setAnswered: (questionId: number) => void;
  setMyAnswer: (questionId: number, answer: Answer) => void;

  init: (map: Record<number, boolean>) => void;
}

export const useCheckAnsweredStore = create<CheckAnsweredState>((set) => ({
  answeredMap: {},
  myAnswers: {},

  setAnswered: (questionId) =>
    set((state) => ({
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
    })),
}));
