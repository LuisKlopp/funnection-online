import { ChevronDown, ChevronUp } from "lucide-react";

interface ScheduleToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export const ScheduleToggleButton = ({
  isExpanded,
  onClick,
}: ScheduleToggleButtonProps) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="border-primaryNavy/15 text-primaryNavy flex h-11 items-center gap-2 rounded-full border bg-white px-5 text-sm font-bold shadow-[0_10px_24px_rgba(53,112,233,0.08)] transition hover:border-primaryNavy/30"
      >
        {isExpanded ? "접기" : "더보기"}
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" strokeWidth={2.2} />
        ) : (
          <ChevronDown className="h-4 w-4" strokeWidth={2.2} />
        )}
      </button>
    </div>
  );
};
