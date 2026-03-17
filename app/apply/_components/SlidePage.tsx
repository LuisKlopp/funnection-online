"use client";

import { motion, Transition } from "framer-motion";

import { cn } from "@/lib/utils";

interface SlidePageProps {
  active: boolean;
  direction: "left" | "right";
  children: React.ReactNode;
}

const spring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.9,
};

export const SlidePage = ({ active, direction, children }: SlidePageProps) => {
  const getX = () => {
    if (active) return "0%";
    return direction === "left" ? "-100%" : "100%";
  };

  return (
    <motion.div
      initial={false}
      animate={{ x: getX() }}
      transition={spring}
      className={cn(
        "h-full overflow-y-auto",
        active ? "relative" : "pointer-events-none absolute inset-0"
      )}
    >
      {children}
    </motion.div>
  );
};
