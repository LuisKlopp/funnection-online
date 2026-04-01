"use client";

import { formatKoreanDate, formatKoreanTime } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import { FormState } from "../../hooks/useApplyStep";
import { FormField } from "./form/FormField";
import { GenderSelect } from "./form/GenderSelect";
import { NicknameInput } from "./form/NicknameInput";
import { PhoneNumberInput } from "./form/PhoneNumberInput";
import { TextAreaInput } from "./form/TextAreaInput";
import { YearInput } from "./form/YearInput";
import { QuoteCard } from "./QuoteCard";

interface ApplySecondStepProps {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  event: EventData | null;
}

export const ApplySecondStep = ({
  form,
  setForm,
  event,
}: ApplySecondStepProps) => {
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
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">신청서 작성</h1>
        <span className="text-gray-4 text-base">간단한 정보만 남겨주세요.</span>
      </div>
      {event && (
        <div className="border-primaryAmber/30 bg-primaryAmber/10 rounded-2xl border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primaryAmber text-sm">신청 중인 모임</p>
              <p className="mt-1 text-sm font-semibold">
                {event.round}회차 · {formatKoreanDate(event.eventDate)}{" "}
                {formatKoreanTime(event.startTime)}
              </p>
            </div>

            <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
              잔여 {event.seatsLeft}
            </div>
          </div>
        </div>
      )}
      <FormField label="성별" description="해당하는 성별을 선택해주세요">
        <GenderSelect
          value={form.gender}
          onChange={(v) => updateField("gender", v)}
        />
      </FormField>

      <FormField label="나이" description="태어난 년도를 입력해주세요">
        <YearInput
          value={form.birthYear}
          onChange={(v) => updateField("birthYear", v)}
        />
      </FormField>
      <FormField
        label="닉네임"
        description="모임 중에는 닉네임 뒤에 님자를 붙여 호칭할거예요!"
      >
        <NicknameInput
          value={form.nickname}
          onChange={(v) => updateField("nickname", v)}
        />
      </FormField>
      <FormField
        label="자기소개"
        description="어떤 사람인지 자유롭게 소개해주세요 (10자 이상)"
      >
        <TextAreaInput
          value={form.intro}
          maxLength={100}
          onChange={(v) => updateField("intro", v)}
        />
      </FormField>

      <FormField
        label="전화번호"
        description="문자(SMS)로 모임 안내를 보내드려요"
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
