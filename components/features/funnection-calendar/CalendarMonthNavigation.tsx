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
        className="flex h-8 w-8 items-center justify-center rounded-full"
      >
        <ChevronLeft />
      </button>

      <p className="text-primaryNavy/80 text-xl font-semibold">
        {format(month, "yyyy년 M월", { locale: ko })}
      </p>

      <button
        onClick={onNext}
        className="flex h-8 w-8 items-center justify-center rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
