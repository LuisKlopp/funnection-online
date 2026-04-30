"use client";

import { useMemo } from "react";

import { useEventsQuery } from "@/hooks/react-query/useEventsQuery";
import { parseLocalDate } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import { DEFAULT_VISIBLE_COUNT } from "./schedule.constants";
import { ScheduleCard } from "./ScheduleCard";
import { ScheduleEmptyState } from "./ScheduleEmptyState";
import { ScheduleSectionHeader } from "./ScheduleSectionHeader";
import { ScheduleSkeletonList } from "./ScheduleSkeletonList";

const getEventDateTime = (event: EventData) => {
  const date = parseLocalDate(event.eventDate);
  const [hours = 0, minutes = 0, seconds = 0] = event.startTime
    .split(":")
    .map(Number);

  date.setHours(hours, minutes, seconds, 0);

  return date.getTime();
};

const getNearestScheduleEvents = (events: EventData[]) => {
  const now = Date.now();
  const funnectionEvents = events.filter(
    (event) => event.eventType === "FUNNECTION"
  );

  const futureEvents = funnectionEvents
    .filter((event) => getEventDateTime(event) >= now)
    .sort((a, b) => getEventDateTime(a) - getEventDateTime(b));

  if (futureEvents.length > 0) {
    return futureEvents.slice(0, DEFAULT_VISIBLE_COUNT);
  }

  return funnectionEvents
    .filter((event) => getEventDateTime(event) < now)
    .sort((a, b) => getEventDateTime(b) - getEventDateTime(a))
    .slice(0, DEFAULT_VISIBLE_COUNT);
};

export const AboutFunnectionScheduleSection = () => {
  const { data: events = [], isLoading } = useEventsQuery();

  const visibleEvents = useMemo(
    () => getNearestScheduleEvents(events),
    [events]
  );

  return (
    <section className="bg-lightNavy smd:px-8 smd:py-20 px-4 py-12">
      <div className="mx-auto max-w-175">
        <ScheduleSectionHeader />

        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {isLoading && <ScheduleSkeletonList />}

          {!isLoading &&
            visibleEvents.map((event) => (
              <ScheduleCard key={event.id} event={event} />
            ))}

          {!isLoading && visibleEvents.length === 0 && (
            <ScheduleEmptyState />
          )}
        </div>
      </div>
    </section>
  );
};
