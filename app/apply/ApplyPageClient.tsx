"use client";

import { useEffect, useRef, useState } from "react";

import { useEventsQuery } from "@/hooks/react-query/useEventsQuery";

import { ApplyFirstStep } from "./_components/apply-first-step/ApplyFirstStep";
import { ApplySecondStep } from "./_components/apply-second-step/ApplySecondStep";
import { ApplyHeader } from "./_components/ApplyHeader";
import { BottomCtaButton } from "./_components/BottomCtaButton";
import { SlidePage } from "./_components/SlidePage";
import { StepTab } from "./_components/StepTab";
import { useApplyForm } from "./hooks/useApplyForm";
import { useApplyStep } from "./hooks/useApplyStep";

export const ApplyPageClient = () => {
  const { step, goNext, goBack } = useApplyStep();
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const { data: events = [] } = useEventsQuery();
  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const { form, setForm, isFormValid, handleSubmit } = useApplyForm({
    selectedEventId,
  });

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });

      const activeRef = step === 1 ? step1Ref : step2Ref;
      activeRef.current?.scrollTo({ top: 0, behavior: "auto" });
    }, 50);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="bg-applyBackgroundColor smd:mx-auto flex h-svh max-w-175 flex-col text-white">
      <ApplyHeader step={step} onBack={goBack} />
      <div className="flex border-b border-white/10">
        <StepTab active={step === 1} label="모임 선택" step={1} />
        <div className="h-12 w-px bg-white/10" />
        <StepTab active={step === 2} label="신청서 작성" step={2} />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <SlidePage ref={step1Ref} active={step === 1} direction="left">
          <ApplyFirstStep
            events={events}
            selectedId={selectedEventId}
            setSelectedId={setSelectedEventId}
          />
        </SlidePage>

        <SlidePage ref={step2Ref} active={step === 2} direction="right">
          <ApplySecondStep
            form={form}
            setForm={setForm}
            event={selectedEvent}
          />
        </SlidePage>
      </div>
      {step === 1 && (
        <BottomCtaButton
          disabled={!selectedEventId}
          onClick={goNext}
          text={
            selectedEventId
              ? `${selectedEvent?.round}회차 신청서 작성하기 →`
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
