import { MapPin, Users } from "lucide-react";
import Link from "next/link";

import { formatParticipationText } from "@/lib/event-seats";
import { cn } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import {
  formatScheduleDate,
  formatScheduleDayTime,
  getParticipationProgress,
} from "./schedule.utils";

interface ScheduleCardProps {
  event: EventData;
}

export const ScheduleCard = ({ event }: ScheduleCardProps) => {
  const progress = getParticipationProgress(event);
  const participationText = formatParticipationText(
    event.eventType,
    event.seatsLeft,
    event.maxParticipants
  );

  return (
    <article className="box-shadow-2 smd:flex smd:items-center smd:gap-7 smd:px-7 smd:py-6 rounded-[28px] bg-white px-5 py-5">
      <div className="smd:w-32 smd:shrink-0">
        <div className="smd:block flex items-start justify-between gap-4">
          <div>
            <h3 className="text-primaryNavy smd:text-[16px] text-[18px] leading-[1.2] font-semibold tracking-tight">
              {formatScheduleDate(event.eventDate)}
            </h3>
            <p className="text-gray-6 smd:text-[15px] mt-1 text-[13px] font-medium">
              {formatScheduleDayTime(event)}
            </p>
          </div>

          <span
            className={cn(
              "smd:mt-3 smd:inline-flex shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold",
              event.status === "OPEN"
                ? "bg-primaryNavy/10 text-primaryNavy"
                : "bg-gray-1 text-gray-5"
            )}
          >
            {event.status === "OPEN" ? "신청 가능" : "마감"}
          </span>
        </div>

        <div className="bg-gray-2 smd:hidden mt-5 h-px" />
      </div>

      <div className="text-gray-6 smd:mt-0 smd:min-w-0 smd:flex-1 smd:border-l smd:border-gray-2 smd:pl-7 smd:text-[16px] smd:leading-6.5 mt-4 space-y-3 text-[13px] leading-5">
        <div className="flex gap-3">
          <MapPin className="text-gray-4 mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="text-gray-7 smd:text-sm leading-6 font-normal break-keep">
              {event.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="text-gray-4 h-4 w-4 shrink-0" />
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="smd:text-sm shrink-0 font-semibold">
              {participationText}
            </span>
            <div className="bg-primaryNavy/12 h-1.5 min-w-0 flex-1 overflow-hidden rounded-full">
              <div
                className="bg-primaryNavy/55 h-full rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/apply?eventId=${event.id}`}
        className="bg-primaryAmber smd:mt-0 smd:h-12 smd:w-28 smd:shrink-0 mt-5 flex h-9 w-full items-center justify-center rounded-xl text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(255,185,0,0.24)] transition hover:brightness-105 active:translate-y-px"
      >
        참여 신청
      </Link>
    </article>
  );
};
