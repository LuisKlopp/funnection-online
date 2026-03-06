import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  month: Date;
  onPrev: () => void;
  onNext: () => void;
}

export const CalendarMonthNavigation = ({ month, onPrev, onNext }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrev}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100"
      >
        <ChevronLeft />
      </button>

      <p className="text-xl font-semibold text-indigo-900">
        {format(month, "yyyy년 M월", { locale: ko })}
      </p>

      <button
        onClick={onNext}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
