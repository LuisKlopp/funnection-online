import { type LucideIcon } from "lucide-react";

interface IntroProfileItemProps {
  description: string;
  icon: LucideIcon;
  label: string;
}

export const IntroProfileItem = ({
  description,
  label,
}: IntroProfileItemProps) => {
  return (
    <div className="smd:px-7 smd:py-6 px-5 py-5">
      <div className="smd:gap-5 flex gap-4">
        {/* <div className="text-primaryNavy flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lightNavy">
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div> */}

        <div className="min-w-0">
          <p className="text-primaryNavy smd:text-[16px] smd:leading-6.5 text-[15px] font-semibold tracking-tight">
            {label}
          </p>
          <p className="text-gray-6 smd:text-[16px] smd:leading-6.5 mt-2.5 text-[15px] leading-6 break-keep">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
