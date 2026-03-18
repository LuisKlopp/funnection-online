"use client";

import { useEffect, useState } from "react";

type Gender = "male" | "female" | null;

export interface FormState {
  gender: Gender;
  year: string;
  intro: string;
  phone: string;
}

export const useApplyStep = () => {
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {
    if (step === 2) {
      window.history.pushState({ step: 2 }, "");
    }
  }, [step]);

  useEffect(() => {
    const handlePopState = () => {
      setStep((prev) => (prev === 2 ? 1 : prev));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const goNext = () => setStep(2);
  const goBack = () => window.history.back();

  return {
    step,
    setStep,
    goNext,
    goBack,
  };
};
