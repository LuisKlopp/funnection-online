"use client";

import { create } from "zustand";

import { AgeGroupType, GenderType } from "@/types/home.type";

interface UserInfoType {
  ageGroup: AgeGroupType;
  gender: GenderType;
  nickname: string;
}

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
