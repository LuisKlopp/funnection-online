"use client";

import { motion } from "framer-motion";

import { ValueStep } from "@/types/value-step.type";

interface Props {
  step: ValueStep;
  active: boolean;
  index: number;
  onClick: () => void;
}

export const ValueStepCard = ({ step, active, onClick }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -2 }}
      style={
        active
          ? {
              borderColor: step.color,
            }
          : undefined
      }
      className={`box-shadow-2 flex cursor-pointer items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm transition ${active ? "bg-white" : "border-white opacity-40"} `}
    >
      <div className="flex items-center gap-4">
        <div
          className="h-2 w-2 rounded-full"
          style={{ background: step.color }}
        />

        <p className="text-sm font-semibold">
          {String(step.id).padStart(2, "0")}
        </p>

        <div>
          <p className="font-semibold">{step.title}</p>
          <p className="text-sm text-gray-400">{step.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};
