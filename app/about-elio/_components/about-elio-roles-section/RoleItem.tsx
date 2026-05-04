import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface RoleItemProps {
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
  title: string;
}

export const RoleItem = ({
  description,
  icon: Icon,
  isLast = false,
  title,
}: RoleItemProps) => {
  return (
    <div
      className={cn(
        "border-primaryNavy/10 smd:px-7 smd:py-6 px-5 py-5",
        !isLast && "border-b"
      )}
    >
      <div className="smd:gap-5 flex gap-4">
        <div className="text-primaryNavy flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
          <Icon className="h-5 w-5" strokeWidth={2.05} />
        </div>

        <div className="min-w-0">
          <h3 className="text-gray-9 smd:text-[20px] text-[18px] leading-[1.2] font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-gray-6 smd:text-[16px] smd:leading-6.5 mt-2.5 text-[15px] leading-6 break-keep">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
