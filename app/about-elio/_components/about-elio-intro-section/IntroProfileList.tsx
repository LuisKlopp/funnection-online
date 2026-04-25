import { type LucideIcon } from "lucide-react";

import { IntroProfileItem } from "./IntroProfileItem";

interface IntroProfileListProps {
  items: ReadonlyArray<{
    description: string;
    icon: LucideIcon;
    label: string;
  }>;
}

export const IntroProfileList = ({ items }: IntroProfileListProps) => {
  return (
    <div className="border-primaryNavy/12 divide-primaryNavy/12 overflow-hidden rounded-[28px] border divide-y bg-white">
      {items.map((item) => (
        <IntroProfileItem key={item.label} {...item} />
      ))}
    </div>
  );
};
