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
    <div className="border-primaryNavy/12 divide-primaryNavy/12 divide-y overflow-hidden rounded-[28px] border bg-white">
      {items.map((item) => (
        <IntroProfileItem key={item.label} {...item} />
      ))}
    </div>
  );
};
