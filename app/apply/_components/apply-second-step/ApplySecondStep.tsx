"use client";

import { FormState } from "../../hooks/useApplyStep";
import { FormField } from "./form/FormField";
import { GenderSelect } from "./form/GenderSelect";
import { PhoneNumberInput } from "./form/PhoneNumberInput";
import { TextAreaInput } from "./form/TextAreaInput";
import { YearInput } from "./form/YearInput";
import { QuoteCard } from "./QuoteCard";

interface ApplySecondStepProps {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}

export const ApplySecondStep = ({ form, setForm }: ApplySecondStepProps) => {
  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 p-8 pb-24">
      <FormField label="성별" description="해당하는 성별을 선택해주세요">
        <GenderSelect
          value={form.gender}
          onChange={(v) => updateField("gender", v)}
        />
      </FormField>

      <FormField label="나이" description="태어난 년도를 입력해주세요">
        <YearInput value={form.year} onChange={(v) => updateField("year", v)} />
      </FormField>

      <FormField
        label="자기소개"
        description="어떤 사람인지 자유롭게 소개해주세요"
      >
        <TextAreaInput
          value={form.intro}
          onChange={(v) => updateField("intro", v)}
        />
      </FormField>

      <FormField
        label="전화번호"
        description="카카오톡으로 모임 안내를 보내드려요"
      >
        <PhoneNumberInput
          value={form.phone}
          onChange={(v) => updateField("phone", v)}
        />
      </FormField>
      <QuoteCard />
    </div>
  );
};
