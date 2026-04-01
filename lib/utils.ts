import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

import { AgeGroupType, GenderType } from "@/types/home.type";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const smoothScrollTo = (targetY: number, duration = 1200) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

// ---------------

export const formatAgeGroup = (ageGroup: AgeGroupType): string => {
  const map: Record<AgeGroupType, string> = {
    "10s": "10대",
    "20s": "20대",
    "30s": "30대",
    "40s": "40대",
    "50s+": "50대+",
  };

  return map[ageGroup];
};

export const getGenderEmoji = (gender: GenderType): string => {
  return gender === "male" ? "🙋🏻‍♂️" : "🙋🏻‍♀️";
};

export const formatKoreanTime = (time: string) => {
  return format(new Date(`1970-01-01T${time}`), "a h시", {
    locale: ko,
  });
};

export const formatKoreanDate = (dateString: string) => {
  const date = new Date(dateString);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = dayNames[date.getDay()];

  return `${month}월 ${day}일 (${dayName})`;
};

export const parseLocalDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const convertYearToAgeGroup = (year: string) => {
  const birthYear = Number(year);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear + 1;

  if (age < 20) return "10s";
  if (age < 30) return "20s";
  if (age < 40) return "30s";
  if (age < 50) return "40s";
  return "50s+";
};
