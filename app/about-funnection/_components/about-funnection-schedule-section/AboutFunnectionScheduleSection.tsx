"use client";

import { useMemo, useState } from "react";

import { useEventsQuery } from "@/hooks/react-query/useEventsQuery";
import { parseLocalDate } from "@/lib/utils";

import { DEFAULT_VISIBLE_COUNT } from "./schedule.constants";
import { ScheduleCard } from "./ScheduleCard";
import { ScheduleEmptyState } from "./ScheduleEmptyState";
import { ScheduleSectionHeader } from "./ScheduleSectionHeader";
import { ScheduleSkeletonList } from "./ScheduleSkeletonList";
import { ScheduleToggleButton } from "./ScheduleToggleButton";

export const AboutFunnectionScheduleSection = () => {
  const { data: events = [], isLoading } = useEventsQuery();
  const [isExpanded, setIsExpanded] = useState(false);

  const funnectionEvents = useMemo(
    () =>
      events
        .filter((event) => event.eventType === "FUNNECTION")
        .sort(
          (a, b) =>
            parseLocalDate(a.eventDate).getTime() -
            parseLocalDate(b.eventDate).getTime()
        ),
    [events]
  );

  const visibleEvents = isExpanded
    ? funnectionEvents
    : funnectionEvents.slice(0, DEFAULT_VISIBLE_COUNT);
  const canToggle = funnectionEvents.length > DEFAULT_VISIBLE_COUNT;

  return (
    <section className="bg-lightNavy px-4 py-14 smd:px-8 smd:py-20">
      <div className="mx-auto max-w-175">
        <ScheduleSectionHeader />

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 smd:mt-12">
          {isLoading && <ScheduleSkeletonList />}

          {!isLoading &&
            visibleEvents.map((event) => (
              <ScheduleCard key={event.id} event={event} />
            ))}

          {!isLoading && funnectionEvents.length === 0 && (
            <ScheduleEmptyState />
          )}
        </div>

        {canToggle && (
          <ScheduleToggleButton
            isExpanded={isExpanded}
            onClick={() => setIsExpanded((prev) => !prev)}
          />
        )}
      </div>
    </section>
  );
};
