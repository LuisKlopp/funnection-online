"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FormState } from "./useApplyStep";

interface UseApplyFormProps {
  selectedEventId: number | null;
}

export const useApplyForm = ({ selectedEventId }: UseApplyFormProps) => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    gender: null,
    year: "",
    intro: "",
    phone: "",
  });

  const isFormValid =
    form.gender &&
    form.year.length === 4 &&
    form.intro.length > 10 &&
    form.phone.length >= 12;

  const handleSubmit = () => {
    if (!isFormValid) return;

    const payload = {
      eventId: selectedEventId,
      ...form,
    };
    console.log(payload);

    router.push("/apply-complete");
    // 👉 여기 나중에 API 붙이면 됨
    // await applyApi(payload)
    // router.push("/apply/complete")
  };

  return {
    form,
    setForm,
    isFormValid,
    handleSubmit,
  };
};
