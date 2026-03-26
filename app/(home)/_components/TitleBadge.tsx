import { cn } from "@/lib/utils";

interface TitleBadgeProps {
  title: string;
  isBackground?: boolean;
}

export const TitleBadge = ({ title, isBackground }: TitleBadgeProps) => {
  return (
    <div
      className={cn(
        "text-primaryNavy box-shadow-1 mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2",
        isBackground && "bg-primaryNavy/65 text-white"
      )}
    >
      <span
        className={cn(
          "bg-primaryNavy h-1.5 w-1.5 animate-pulse rounded-full",
          isBackground && "bg-white"
        )}
      />

      <span className="smd:text-sm text-[13px] font-normal">{title}</span>
    </div>
  );
};
