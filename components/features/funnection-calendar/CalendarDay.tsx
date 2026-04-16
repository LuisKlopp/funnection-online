import { cn } from "@/lib/utils";
import { EventData } from "@/types/event.type";

interface CalendarDayProps {
  date: Date;
  events?: EventData[];
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const EVENT_TYPE_DOT_CLASS = {
  FUNNECTION: "bg-primaryNavy",
  BOARDGAME: "bg-green-600/85",
} as const;

const SELECTED_EVENT_TYPE_DOT_CLASS = {
  FUNNECTION: "bg-white",
  BOARDGAME: "bg-green-400",
} as const;

export const CalendarDay = ({
  date,
  events,
  selectedDate,
  onSelectDate,
}: CalendarDayProps) => {
  const day = date.getDate();
  const isSunday = date.getDay() === 0;

  const today = new Date();
  const isToday = today.toDateString() === date.toDateString();

  const isSelected =
    selectedDate && selectedDate.toDateString() === date.toDateString();
  const eventTypes = Array.from(
    new Set(events?.map((event) => event.eventType) ?? [])
  );

  return (
    <button
      onClick={() => onSelectDate(date)}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all ${
        isSelected
          ? "bg-deepNavy/80 text-white ring-offset-[#fff9ed]"
          : isToday
            ? isSunday
              ? "bg-primaryAmber/22 font-semibold text-red-600"
              : "bg-primaryAmber/22 text-primaryNavy font-semibold"
            : isSunday
              ? "hover:bg-primaryAmber/10 text-red-600"
              : "text-primaryNavy/75 hover:bg-primaryAmber/10"
      }`}
    >
      {day}

      {eventTypes.length > 0 && (
        <span className="absolute bottom-0.5 flex items-center justify-center gap-1">
          {eventTypes.map((eventType) => (
            <span
              key={eventType}
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                isSelected
                  ? SELECTED_EVENT_TYPE_DOT_CLASS[eventType]
                  : EVENT_TYPE_DOT_CLASS[eventType]
              )}
            />
          ))}
        </span>
      )}
    </button>
  );
};
