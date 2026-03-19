import { Calendar } from "lucide-react";

import { cn, formatKoreanDate, formatKoreanTime } from "@/lib/utils";
import { EventData } from "@/types/event.type";

export const EventCard = ({
  event,
  selected,
  onClick,
}: {
  event: EventData;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 ease-out",
        selected
          ? "border-primaryAmber bg-primaryAmber/10"
          : "border-white/10 bg-white/5 hover:border-white/20"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span
            className={cn("text-sm", selected && "font-bold text-amber-400")}
          >
            퍼넥션
          </span>
          <span
            className={cn(
              "rounded-full px-2 py-1 text-xs font-semibold transition-all duration-300",
              selected
                ? "bg-primaryAmber/20 text-primaryAmber"
                : "bg-white/10 text-white/60"
            )}
          >
            {event.round}회차
          </span>
        </div>

        <span className="text-sm text-green-500">
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

      <div className="mt-3 inline-block rounded-md bg-white/10 px-3 py-1 text-xs text-white/70">
        나를 움직이게 하는 것들
      </div>

      <div
        className={cn(
          "bg-primaryAmber absolute left-[75%] mt-3 h-1 w-[40%] -translate-x-[50%] rounded-full transition-all duration-300",
          selected ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        )}
      />
    </div>
  );
};
