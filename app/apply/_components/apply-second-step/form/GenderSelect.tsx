"use client";

import { cn } from "@/lib/utils";

type Gender = "male" | "female";

interface GenderSelectProps {
  value: Gender | null;
  onChange: (value: Gender) => void;
}

export const GenderSelect = ({ value, onChange }: GenderSelectProps) => {
  return (
    <div className="flex gap-3">
      {[
        { label: "남", value: "male" },
        { label: "여", value: "female" },
      ].map((item) => {
        const selected = value === item.value;

        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value as Gender)}
            className={cn(
              "flex-1 rounded-2xl py-4 text-base font-semibold transition-all duration-200",
              selected
                ? "bg-primaryAmber text-black shadow-[0_0_20px_rgba(255,193,7,0.4)]"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
