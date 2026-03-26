"use client";

import { useEffect, useState } from "react";

import { AgeGroupType, GenderType } from "@/types/home.type";

interface UserInfo {
  ageGroup: AgeGroupType;
  gender: GenderType;
}

const STORAGE_KEY = "userInfo";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  console.log(userInfo);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUserInfo(JSON.parse(stored));
    }
  }, []);

  const saveUserInfo = (data: UserInfo) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUserInfo(data);
  };

  return {
    userInfo,
    saveUserInfo,
  };
};
