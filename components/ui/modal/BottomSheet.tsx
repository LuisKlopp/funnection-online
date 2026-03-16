/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  animate,
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SPRING = { type: "spring", stiffness: 260, damping: 32 } as const;

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();
  const [sheetState, setSheetState] = useState<"full" | "half">("half");
  const [viewportHeight, setViewportHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const vv = window.visualViewport;
      const height = vv?.height ?? window.innerHeight;
      setViewportHeight(height);
      document.documentElement.style.setProperty("--vvh", `${height}px`);
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("scroll", updateHeight);
    };
  }, []);

  const positions = useMemo(() => {
    const closed = viewportHeight;
    const half = Math.max(viewportHeight * 0.3, 240);
    const full = 0;

    return { closed, half, full };
  }, [viewportHeight]);

  useEffect(() => {
    if (!isOpen || viewportHeight === 0) return;

    y.set(positions.closed);
    animate(y, positions.half, { ...SPRING });
  }, [isOpen, viewportHeight]);

  const snapTo = (destination: number, velocity?: number) => {
    if (destination === positions.full) setSheetState("full");
    if (destination === positions.half) setSheetState("half");

    animate(y, destination, {
      ...SPRING,
      velocity: destination === positions.closed ? 0 : velocity,
    });
  };

  const handleDragEnd = (_: any, info: any) => {
    const { half, full, closed } = positions;

    const currentY = y.get();
    const projected = currentY + info.velocity.y * 0.12;

    const fastPullDown = info.velocity.y > 1200;
    const fastPullUp = info.velocity.y < -1200;

    const isFull = currentY < half * 0.5;

    if (isFull) {
      if (fastPullUp) {
        snapTo(full);
        return;
      }
      snapTo(half);
      return;
    }
    if (fastPullUp) {
      snapTo(full);
      return;
    }
    if (fastPullDown || projected > half + 120) {
      snapTo(closed);
      setTimeout(onClose, 250);
      return;
    }

    snapTo(half);
  };
  return (
    <AnimatePresence>
      {isOpen && viewportHeight > 0 && (
        <div className="fixed inset-0 z-9999 flex items-end justify-center">
          <motion.div
            onClick={() => {
              snapTo(positions.closed);
              setTimeout(onClose, 250);
            }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: positions.full, bottom: positions.closed }}
            dragElastic={0.18}
            style={{ y, height: "var(--vvh, 100dvh)" }}
            onDragEnd={handleDragEnd}
            exit={{ y: positions.closed }}
            transition={SPRING}
            className="relative flex w-full max-w-md flex-col rounded-t-3xl bg-[#f8f9ff] shadow-2xl"
          >
            <div
              className="flex cursor-grab justify-center pt-3 pb-2 active:cursor-grabbing"
              onPointerDown={(event) => {
                event.stopPropagation();
                dragControls.start(event);
              }}
            >
              <div className="h-1.5 w-10 rounded-full bg-gray-400" />
            </div>

            <div
              className="min-h-0 flex-1 overflow-y-auto"
              style={{
                paddingBottom:
                  sheetState === "half" ? `${viewportHeight * 0.35}px` : "0px",
              }}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
