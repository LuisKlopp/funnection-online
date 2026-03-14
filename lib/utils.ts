import { type ClassValue, clsx } from "clsx";
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

export const formatAgeGroup = (ageGroup: AgeGroupType): string => {
  const map: Record<AgeGroupType, string> = {
    "10s": "10대",
    "20s": "20대",
    "30s": "30대",
    "40s": "40대",
    "50s": "50대",
  };

  return map[ageGroup];
};

export const getGenderEmoji = (gender: GenderType): string => {
  return gender === "male" ? "🙋🏻‍♂️" : "🙋🏻‍♀️";
};
