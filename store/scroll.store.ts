import { create } from "zustand";

interface ScrollState {
  scrolled: boolean;
  setScrolled: (value: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrolled: false,
  setScrolled: (value) => set({ scrolled: value }),
}));
