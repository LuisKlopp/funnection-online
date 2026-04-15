/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useApplyMutation } from "@/hooks/react-query/useApplyMutation";

import { FormState } from "./useApplyStep";

interface UseApplyFormProps {
  selectedEventId: number | null;
  selectedEventType: "FUNNECTION" | "BOARDGAME" | null;
}

const APPLY_COMPLETE_EVENT_TYPE_KEY = "applyCompleteEventType";

export const useApplyForm = ({
  selectedEventId,
  selectedEventType,
}: UseApplyFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useApplyMutation();

  const [form, setForm] = useState<FormState>({
    gender: null,
    birthYear: "",
    intro: "",
    phone: "",
    nickname: "",
  });

  const currentYear = new Date().getFullYear();
  const birthYear = Number(form.birthYear);

  const isValidYear =
    form.birthYear.length === 4 &&
    birthYear >= 1900 &&
    birthYear <= currentYear;

  const isFormValid =
    !!form.gender &&
    isValidYear &&
    form.intro.trim().length > 10 &&
    form.phone.replace(/-/g, "").length >= 10 &&
    form.nickname.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid || !selectedEventId) return;

    const payload = {
      eventId: selectedEventId,
      ...form,
    };

    mutate(payload, {
      onSuccess: () => {
        if (selectedEventType) {
          sessionStorage.setItem(
            APPLY_COMPLETE_EVENT_TYPE_KEY,
            selectedEventType
          );
        }
        router.push("/apply-complete");
      },
      onError: (error: any) => {
        console.error(error);

        const message =
          error?.response?.data?.message || "신청에 실패했습니다.";

        alert(message);
      },
    });
  };

  return {
    form,
    setForm,
    isFormValid,
    handleSubmit,
    isPending,
  };
};
