"use client";

import { create } from "zustand";

import { UserInfoType } from "@/types/user-info.type";

interface UserInfoStore {
  userInfo: UserInfoType | null;
  setUserInfo: (data: UserInfoType) => void;
  initUserInfo: () => void;
}

const STORAGE_KEY = "userInfo";

export const useUserInfoStore = create<UserInfoStore>((set) => ({
  userInfo: null,

  setUserInfo: (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    set({ userInfo: data });
  },

  initUserInfo: () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      set({ userInfo: JSON.parse(stored) });
    }
  },
}));
