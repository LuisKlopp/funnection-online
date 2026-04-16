"use client";

import { cn } from "@/lib/utils";

import { termsNavigationItems } from "../_data/termsOfUseData";

interface TermsPolicyNavProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export const TermsPolicyNav = ({
  activeId,
  onSelect,
}: TermsPolicyNavProps) => {
  return (
    <div className="no-scrollbar overflow-x-auto">
      <div className="flex min-w-max gap-2 pb-1">
        {termsNavigationItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              activeId === item.id
                ? "border-primaryNavy bg-primaryNavy text-white"
                : "border-primaryNavy/10 bg-white text-gray-6"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};
