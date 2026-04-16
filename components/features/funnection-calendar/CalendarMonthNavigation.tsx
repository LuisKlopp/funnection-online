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
        className="text-deepNavy hover:border-primaryAmber/45 hover:bg-primaryAmber/15 box-shadow-1 flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors"
      >
        <ChevronLeft />
      </button>

      <p className="text-deepNavy text-xl font-semibold tracking-tight">
        {format(month, "yyyy년 M월", { locale: ko })}
      </p>

      <button
        onClick={onNext}
        className="text-deepNavy hover:border-primaryAmber/45 hover:bg-primaryAmber/15 box-shadow-1 flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
