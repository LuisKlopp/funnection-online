"use client";

import { cn } from "@/lib/utils";

import { tableOfContents } from "../_data/refundPolicyData";

interface PolicySidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export const PolicySidebar = ({ activeId, onSelect }: PolicySidebarProps) => {
  return (
    <div className="no-scrollbar overflow-x-auto">
      <div className="flex min-w-max gap-2 pb-1">
        {tableOfContents.map((item) => (
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
