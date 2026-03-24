import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface BadgeAboutFunnectionProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export const BadgeAboutFunnection = ({
  icon: Icon,
  text,
  className,
}: BadgeAboutFunnectionProps) => {
  return (
    <div
      className={cn(
        "bg-primaryNavy/10 text-primaryNavy mx-auto mt-12 flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-medium backdrop-blur",
        className
      )}
    >
      <Icon size={16} />
      {text}
    </div>
  );
};
