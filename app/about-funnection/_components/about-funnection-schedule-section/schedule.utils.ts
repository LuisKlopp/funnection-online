import { getCurrentParticipants } from "@/lib/event-seats";
import { formatKoreanTime, parseLocalDate } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import { SCHEDULE_DAY_NAMES } from "./schedule.constants";

export const formatScheduleDate = (dateString: string) => {
  const date = parseLocalDate(dateString);

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export const formatScheduleDayTime = (event: EventData) => {
  const date = parseLocalDate(event.eventDate);

  return `${SCHEDULE_DAY_NAMES[date.getDay()]} · ${formatKoreanTime(
    event.startTime
  )}~`;
};

export const getParticipationProgress = (event: EventData) => {
  if (event.maxParticipants <= 0) return 0;

  const currentParticipants = getCurrentParticipants(
    event.maxParticipants,
    event.seatsLeft
  );
  return Math.max(
    0,
    Math.min(100, (currentParticipants / event.maxParticipants) * 100)
  );
};
