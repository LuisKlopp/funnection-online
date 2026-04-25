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
        "border-primaryNavy/10 px-5 py-5 smd:px-7 smd:py-6",
        !isLast && "border-b"
      )}
    >
      <div className="flex gap-4 smd:gap-5">
        <div className="text-primaryNavy flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lightNavy">
          <Icon className="h-5 w-5" strokeWidth={2.05} />
        </div>

        <div className="min-w-0">
          <h3 className="text-gray-9 text-[18px] leading-[1.2] font-bold tracking-tight smd:text-[20px]">
            {title}
          </h3>
          <p className="text-gray-6 mt-2.5 text-[15px] leading-6 break-keep smd:text-[16px] smd:leading-6.5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
