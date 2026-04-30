import { cn } from "@/lib/utils";

export const StepTab = ({
  active,
  label,
  onClick,
  step,
}: {
  active: boolean;
  label: string;
  onClick?: () => void;
  step: number;
}) => {
  const isClickable = !!onClick;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isClickable}
      className={cn(
        "flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium",
        active
          ? "text-primaryAmber border-b-primaryAmber border-b-2"
          : "text-white/40",
        isClickable && "cursor-pointer transition-colors hover:text-white/70"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full text-xs font-bold",
          active ? "text-primaryAmber" : "text-white/50"
        )}
      >
        {step}.
      </div>
      {label}
    </button>
  );
};
