"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { EVENT_TYPE_LABEL } from "@/constants/event-type.constants";
import { useEventsQuery } from "@/hooks/react-query/useEventsQuery";
import { getTotalSeatsLeft } from "@/lib/event-seats";

import { ApplyFirstStep } from "./_components/apply-first-step/ApplyFirstStep";
import { ApplySecondStep } from "./_components/apply-second-step/ApplySecondStep";
import { ApplyHeader } from "./_components/ApplyHeader";
import { BottomCtaButton } from "./_components/BottomCtaButton";
import { SlidePage } from "./_components/SlidePage";
import { StepTab } from "./_components/StepTab";
import { useApplyForm } from "./hooks/useApplyForm";
import { useApplyStep } from "./hooks/useApplyStep";

export const ApplyElioPageClient = () => {
  const searchParams = useSearchParams();
  const { step, goNext, goBack } = useApplyStep();
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const initializedFromSearchRef = useRef(false);
  const { data: events = [], isFetched } = useEventsQuery();
  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const { form, setForm, isFormValid, handleSubmit } = useApplyForm({
    selectedEventId,
    selectedEventType: selectedEvent?.eventType ?? null,
  });

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const eventIdParam = searchParams.get("eventId");
  const isSelectedEventClosed = selectedEvent
    ? getTotalSeatsLeft(selectedEvent.seatsLeft) <= 0 ||
      selectedEvent.status === "CLOSED"
    : false;
  const selectedStepOneText = selectedEvent
    ? isSelectedEventClosed
      ? "마감된 모임이에요"
      : selectedEvent.eventType === "FUNNECTION"
        ? `${selectedEvent.round}회차 신청서 작성하기 →`
        : `${EVENT_TYPE_LABEL[selectedEvent.eventType]} 신청서 작성하기 →`
    : "신청할 모임을 선택해주세요!";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });

      const activeRef = step === 1 ? step1Ref : step2Ref;
      activeRef.current?.scrollTo({ top: 0, behavior: "auto" });
    }, 50);

    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (initializedFromSearchRef.current) return;

    if (!eventIdParam) {
      initializedFromSearchRef.current = true;
      return;
    }

    if (!isFetched) return;

    const nextEventId = Number(eventIdParam);

    if (!Number.isInteger(nextEventId)) {
      initializedFromSearchRef.current = true;
      return;
    }

    const matchedEvent = events.find((event) => event.id === nextEventId);

    if (matchedEvent) {
      setSelectedEventId(matchedEvent.id);
    }

    initializedFromSearchRef.current = true;
  }, [eventIdParam, events, isFetched]);

  return (
    <div className="bg-applyBackgroundColor smd:mx-auto flex h-svh max-w-175 flex-col text-white">
      <ApplyHeader step={step} onBack={goBack} />
      <div className="flex border-b border-white/10">
        <StepTab
          active={step === 1}
          label="모임 선택"
          onClick={step === 2 ? goBack : undefined}
          step={1}
        />
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
          disabled={!selectedEventId || isSelectedEventClosed}
          onClick={goNext}
          text={selectedStepOneText}
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
