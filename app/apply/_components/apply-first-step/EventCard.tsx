import { Calendar, CircleDollarSign, Dices, MessageCircleMore } from "lucide-react";
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

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          "relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 ease-out",
          selected
            ? isBoardgame || isHoldem
              ? "border-primaryAmber bg-primaryAmber/7"
              : "border-primaryAmber bg-primaryAmber/7"
            : isBoardgame
              ? "border-green-500/20 hover:border-green-500/35"
              : isHoldem
                ? "border-rose-500/25 hover:border-rose-500/45"
              : "border-primaryNavy/20 hover:border-primaryNavy/35"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300",
                isBoardgame
                  ? selected
                    ? "bg-green-500/18 text-green-300"
                    : "bg-green-500/12 text-green-200"
                  : isHoldem
                    ? selected
                      ? "bg-rose-500/22 text-rose-200"
                      : "bg-rose-500/14 text-rose-200"
                  : selected
                    ? "bg-primaryNavy/40 text-blue-100"
                    : "bg-primaryNavy/40 text-blue-100"
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
              "text-sm font-medium",
              isBoardgame
                ? "text-green-200/70"
                : isHoldem
                  ? "text-rose-200/75"
                  : "text-[#9fc0ff]"
            )}
          >
            {event.seatsLeft}자리 남음
          </span>
        </div>

        <div className="mt-3 space-y-1 text-sm text-white/80">
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

        <div
          className={cn(
            "mt-3 inline-block rounded-md px-3 py-1 text-xs",
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
        </div>

        <div
          className={cn(
            "bg-primaryAmber absolute left-[75%] mt-3 h-1 w-[40%] -translate-x-[50%] rounded-full transition-all duration-300",
            selected ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          )}
        />
      </div>
    );
  }
);

EventCard.displayName = "EventCard";
