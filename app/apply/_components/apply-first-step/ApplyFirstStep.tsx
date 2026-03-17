import { EVENTS } from "@/constants/dummy-data/events.constants";

import { EventCard } from "./EventCard";

interface ApplyFirstStepProps {
  selectedId: number | null;
  setSelectedId: (id: number) => void;
}
export const ApplyFirstStep = ({
  selectedId,
  setSelectedId,
}: ApplyFirstStepProps) => {
  return (
    <div className="space-y-6 px-4 py-6 pb-24">
      <div>
        <h2 className="text-lg font-semibold">참여할 모임을 선택해주세요</h2>
        <p className="mt-1 text-sm text-white/60">신청 가능한 모임이에요</p>
      </div>
      <div className="space-y-4">
        {EVENTS.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            selected={selectedId === event.id}
            onClick={() => setSelectedId(event.id)}
          />
        ))}
      </div>
    </div>
  );
};
