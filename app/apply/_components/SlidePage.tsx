"use client";

import { motion, Transition } from "framer-motion";
import { forwardRef } from "react";

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

export const SlidePage = forwardRef<HTMLDivElement, SlidePageProps>(
  ({ active, direction, children }, ref) => {
    const x = active ? "0%" : direction === "left" ? "-100%" : "100%";

    return (
      <motion.div
        ref={ref}
        initial={false}
        animate={{ x }}
        transition={spring}
        className={cn(
          "h-full overflow-y-auto",
          active ? "relative" : "pointer-events-none absolute inset-0"
        )}
      >
        {children}
      </motion.div>
    );
  }
);

SlidePage.displayName = "SlidePage";
