import { useEffect, useRef } from "react";

import { smoothScrollTo } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import { EventCard } from "./EventCard";

interface ApplyFirstStepProps {
  events: EventData[];
  selectedId: number | null;
  setSelectedId: (id: number) => void;
}
export const ApplyFirstStep = ({
  events,
  selectedId,
  setSelectedId,
}: ApplyFirstStepProps) => {
  const selectedCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedId || !selectedCardRef.current) return;

    const scrollContainer = selectedCardRef.current.closest(
      '[data-scroll-container="apply-step"]'
    );

    if (!(scrollContainer instanceof HTMLElement)) return;

    const cardRect = selectedCardRef.current.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const targetY =
      scrollContainer.scrollTop +
      (cardRect.top - containerRect.top) -
      scrollContainer.clientHeight / 2 +
      selectedCardRef.current.clientHeight / 2;

    smoothScrollTo(Math.max(0, targetY), 1100, scrollContainer);
  }, [selectedId]);

  return (
    <div className="space-y-6 px-4 py-6 pb-24">
      <div>
        <h2 className="text-lg font-semibold">참여할 모임을 선택해주세요</h2>
        <p className="mt-1 text-sm text-white/60">신청 가능한 모임이에요</p>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            ref={selectedId === event.id ? selectedCardRef : null}
            event={event}
            selected={selectedId === event.id}
            onClick={() => setSelectedId(event.id)}
          />
        ))}
      </div>
    </div>
  );
};
