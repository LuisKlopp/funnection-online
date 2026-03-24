import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SampleQuestionCardProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export const SampleQuestionCard = ({
  icon: Icon,
  text,
  className,
}: SampleQuestionCardProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-2xl border border-blue-200/60 bg-white px-5 py-6 shadow-sm",
        className
      )}
    >
      <div className="text-primaryNavy flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
        <Icon size={22} />
      </div>
      <p className="text-gray-8 text-base leading-relaxed font-medium break-keep">
        {text}
      </p>
    </div>
  );
};
