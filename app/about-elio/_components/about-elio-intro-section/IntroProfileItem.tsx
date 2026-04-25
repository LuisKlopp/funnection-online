import { type LucideIcon } from "lucide-react";

interface IntroProfileItemProps {
  description: string;
  icon: LucideIcon;
  label: string;
}

export const IntroProfileItem = ({
  description,
  icon: Icon,
  label,
}: IntroProfileItemProps) => {
  return (
    <div className="px-5 py-5 smd:px-7 smd:py-6">
      <div className="flex gap-4 smd:gap-5">
        <div className="text-primaryNavy flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lightNavy">
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>

        <div className="min-w-0">
          <p className="text-primaryNavy text-[15px] font-semibold tracking-tight smd:text-[16px] smd:leading-6.5">
            {label}
          </p>
          <p className="text-gray-6 mt-2.5 text-[15px] leading-6 break-keep smd:text-[16px] smd:leading-6.5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
