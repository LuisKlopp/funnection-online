"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { ApplyFirstStep } from "./_components/apply-first-step/ApplyFirstStep";
import { ApplySecondStep } from "./_components/apply-second-step/ApplySecondStep";
import { BottomCtaButton } from "./_components/BottomCtaButton";
import { SlidePage } from "./_components/SlidePage";
import { StepTab } from "./_components/StepTab";

type Gender = "male" | "female" | null;

export interface FormState {
  gender: Gender;
  year: string;
  intro: string;
  phone: string;
}

export const ApplyPageClient = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

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
    console.log("submit", {
      selectedEventId,
      ...form,
    });
    // TODO: API 호출 + 완료 페이지 이동
  };

  useEffect(() => {
    if (step === 2) {
      window.history.pushState({ step: 2 }, "");
    }
  }, [step]);

  useEffect(() => {
    const handlePopState = () => {
      if (step === 2) {
        setStep(1);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [step]);

  return (
    <div className="bg-applyBackgroundColor mdl:mx-auto mdl:w-1/3 flex h-svh flex-col text-white">
      <div className="bg-applyBackgroundColor sticky top-0 z-10 border-b border-white/10 px-4 py-4">
        <div className="relative flex items-center">
          <div
            className="flex cursor-pointer items-center gap-1 text-sm text-gray-400"
            onClick={() => {
              if (step === 2) setStep(1);
              else window.history.back();
            }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{step === 2 ? "모임 다시 선택" : "돌아가기"}</span>
          </div>

          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-base font-semibold">
            퍼넥션 신청
          </span>
        </div>
      </div>
      <div className="flex border-b border-white/10">
        <StepTab active={step === 1} label="모임 선택" step={1} />
        <div className="h-12 w-px bg-white/10" />
        <StepTab active={step === 2} label="신청서 작성" step={2} />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <SlidePage active={step === 1} direction="left">
          <ApplyFirstStep
            selectedId={selectedEventId}
            setSelectedId={setSelectedEventId}
          />
        </SlidePage>

        <SlidePage active={step === 2} direction="right">
          <ApplySecondStep form={form} setForm={setForm} />
        </SlidePage>
      </div>
      {step === 1 && (
        <BottomCtaButton
          disabled={!selectedEventId}
          onClick={() => setStep(2)}
          text={
            selectedEventId
              ? `${selectedEventId}회차 신청서 작성하기 →`
              : "신청할 모임을 선택해주세요!"
          }
        />
      )}
      {step === 2 && (
        <BottomCtaButton
          disabled={!isFormValid}
          onClick={handleSubmit}
          text="신청 완료하기"
        />
      )}
    </div>
  );
};
