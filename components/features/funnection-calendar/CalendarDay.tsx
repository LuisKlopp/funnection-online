import { cn } from "@/lib/utils";
import { EventData } from "@/types/event.type";

interface CalendarDayProps {
  date: Date;
  events?: EventData[];
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export const CalendarDay = ({
  date,
  events,
  selectedDate,
  onSelectDate,
}: CalendarDayProps) => {
  const day = date.getDate();

  const today = new Date();
  const isToday = today.toDateString() === date.toDateString();

  const isSelected =
    selectedDate && selectedDate.toDateString() === date.toDateString();

  return (
    <button
      onClick={() => onSelectDate(date)}
      className={`relative flex h-8 w-8 items-center justify-center rounded-full text-sm ${
        isSelected
          ? "bg-primaryNavy text-white"
          : isToday
            ? "text-primaryNavy font-semibold"
            : "text-gray-400 hover:bg-indigo-50"
      }`}
    >
      {day}

      {events && events.length > 0 && (
        <span
          className={cn(
            "bg-primaryNavy absolute bottom-0 h-1 w-1 rounded-full",

            isSelected && "mb-0.5 bg-white"
          )}
        />
      )}
    </button>
  );
};
