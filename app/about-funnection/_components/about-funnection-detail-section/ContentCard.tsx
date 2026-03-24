import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ContentCard = ({
  icon: Icon,
  title,
  description,
  className,
}: ContentCardProps) => {
  return (
    <div
      className={cn(
        "relative mb-4 rounded-3xl border border-blue-200/60 bg-linear-to-br from-white to-blue-50/40 p-4 shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-gray-7 text-xl font-semibold">{title}</h3>
        <div className="text-primaryNavy bg-primaryNavy/20 flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm">
          <Icon size={22} />
        </div>
      </div>
      <div className="my-4 h-px w-full bg-blue-100" />
      <p className="text-gray-6 text-sm">{description}</p>
      <div className="absolute top-6 right-6 h-16 w-16 rounded-2xl bg-blue-100/40 blur-xl" />
    </div>
  );
};
