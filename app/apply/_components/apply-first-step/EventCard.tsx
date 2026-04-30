import {
  Calendar,
  Check,
  CircleDollarSign,
  Dices,
  MessageCircleMore,
} from "lucide-react";
import { forwardRef } from "react";

import { EVENT_TYPE_LABEL } from "@/constants/event-type.constants";
import { cn, formatKoreanDate, formatKoreanTime } from "@/lib/utils";
import { EventData } from "@/types/event.type";

interface EventCardProps {
  event: EventData;
  selected: boolean;
  onClick: () => void;
}

export const EventCard = forwardRef<HTMLDivElement, EventCardProps>(
  ({ event, selected, onClick }, ref) => {
    const isBoardgame = event.eventType === "BOARDGAME";
    const isHoldem = event.eventType === "HOLDEM";
    const isFunnection = event.eventType === "FUNNECTION";
    const maxParticipants = Math.max(event.maxParticipants, 0);
    const occupiedParticipants = Math.min(
      maxParticipants,
      Math.max(maxParticipants - event.seatsLeft, 0)
    );
    const occupiedPercent =
      maxParticipants > 0 ? (occupiedParticipants / maxParticipants) * 100 : 0;
    const isClosed = event.seatsLeft <= 0 || event.status === "CLOSED";
    const isAlmostFull = event.seatsLeft <= 3;
    const occupancyColorClass = isAlmostFull
      ? "bg-rose-500"
      : "bg-primaryAmber";
    const seatsLeftTextClass = isAlmostFull
      ? "text-rose-300"
      : "text-primaryAmber";
    const participationFeeText = isFunnection
      ? "35,000원"
      : isBoardgame
        ? "25,000원"
        : "당일결제";
    const seatsLeftText =
      event.seatsLeft <= 0 ? "정원 마감" : `${event.seatsLeft}자리 남음`;

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          "relative isolate cursor-pointer overflow-hidden rounded-2xl border-2 p-4 transition-colors duration-300 ease-out",
          selected
            ? isClosed
              ? "border-rose-500"
              : "border-primaryAmber"
            : isBoardgame
              ? "border-green-500/35 hover:border-green-500/45"
              : isHoldem
                ? "border-rose-500/35 hover:border-rose-500/45"
                : "border-primaryNavy/35 hover:border-primaryNavy/45"
        )}
      >
        {selected && (
          <div className="bg-primaryAmber/3 pointer-events-none absolute inset-0 z-0 rounded-2xl" />
        )}
        {selected && (
          <div className="bg-primaryAmber text-primaryNavy pointer-events-none absolute top-3 right-3 z-20 flex h-7 w-7 items-center justify-center rounded-full shadow-[0_0_18px_rgba(255,193,7,0.45)]">
            <Check className="h-4 w-4 stroke-3" />
          </div>
        )}

        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300",
                isBoardgame
                  ? selected
                    ? "bg-green-500/18 text-white"
                    : "bg-green-500/12 text-white"
                  : isHoldem
                    ? selected
                      ? "bg-rose-500/22 text-white"
                      : "bg-rose-500/14 text-white"
                    : selected
                      ? "bg-primaryNavy/40 text-blue-100"
                      : "bg-primaryNavy/40 text-white"
              )}
            >
              {isBoardgame ? (
                <Dices className="h-3.5 w-3.5" />
              ) : isHoldem ? (
                <CircleDollarSign className="h-3.5 w-3.5" />
              ) : (
                <MessageCircleMore className="h-3.5 w-3.5" />
              )}
              {EVENT_TYPE_LABEL[event.eventType]}
            </span>
            {isFunnection && (
              <span
                className={cn(
                  "rounded-full py-1 text-xs font-semibold transition-all duration-300",
                  selected ? "text-white" : "text-[#d7e4ff]/75"
                )}
              >
                {event.round}회차
              </span>
            )}
          </div>

          <span
            className={cn(
              "text-primaryAmber/80 text-[13px] font-medium",
              selected && "pr-8"
            )}
          >
            <span className="text-gray-3">참가비: </span>
            {participationFeeText}
          </span>
        </div>

        <div className="relative z-10 mt-3 space-y-1 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-4 mb-0.5" />
            <p className={cn("text-sm", selected && "font-bold text-white")}>
              {formatKoreanDate(event.eventDate)}
            </p>
            <p className="text-gray-4 text-xs">
              {formatKoreanTime(event.startTime)}~
            </p>
          </div>
          <div className="text-gray-4 text-xs">{event.location}</div>
        </div>

        {/* <div
          className={cn(
            "relative z-10 mt-3 inline-block rounded-md px-3 py-1 text-xs",
            isBoardgame
              ? "bg-green-500/10 text-green-200/90"
              : isHoldem
                ? "bg-rose-500/12 text-rose-100"
                : "bg-primaryNavy/12 text-blue-200/90"
          )}
        >
          {isBoardgame
            ? "함께 즐기는 보드게임 모임"
            : isHoldem
              ? "함께 즐기는 홀덤 모임"
              : "나를 움직이게 하는 것들"}
        </div> */}

        <div className="relative z-10 mt-4 flex items-center justify-between text-xs">
          <span className="text-gray-400">참여 현황</span>
          <span
            className={cn(
              "font-semibold transition-colors duration-300",
              seatsLeftTextClass
            )}
          >
            {seatsLeftText}
          </span>
        </div>

        <div
          role="progressbar"
          aria-label={`${occupiedParticipants}명 신청, 최대 ${maxParticipants}명`}
          aria-valuemin={0}
          aria-valuemax={maxParticipants}
          aria-valuenow={occupiedParticipants}
          className="relative z-10 mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              occupancyColorClass
            )}
            style={{ width: `${occupiedPercent}%` }}
          />
        </div>
      </div>
    );
  }
);

EventCard.displayName = "EventCard";
