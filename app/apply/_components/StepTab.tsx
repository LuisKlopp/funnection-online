import { cn } from "@/lib/utils";

export const StepTab = ({
  active,
  label,
  step,
}: {
  active: boolean;
  label: string;
  step: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium",
        active
          ? "text-primaryAmber border-b-primaryAmber border-b-2"
          : "text-white/40"
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
    </div>
  );
};
