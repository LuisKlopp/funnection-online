import { create } from "zustand";

import { HomeQuestion } from "@/types/home.type";

interface QuestionStore {
  question: HomeQuestion | null;
  setQuestion: (question: HomeQuestion) => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: null,
  setQuestion: (question) => set({ question }),
}));
