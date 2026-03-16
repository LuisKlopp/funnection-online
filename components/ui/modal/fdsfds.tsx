/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AnimatePresence,
  motion,
  useDragControls,
  useSpring,
} from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SPRING = { type: "spring", stiffness: 420, damping: 38 } as const;

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) => {
  const y = useSpring(0, SPRING);
  const dragControls = useDragControls();
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHeight = () => setViewportHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const positions = useMemo(() => {
    if (!viewportHeight) return null;
    const closed = viewportHeight;
    const half = Math.max(viewportHeight * 0.45, 320);
    const full = 0;
    return { closed, half, full };
  }, [viewportHeight]);

  useEffect(() => {
    if (!positions || !isOpen) return;
    // 시작 시 닫힌 위치로 점프 후 중간 높이로 스프링 이동
    y.set(positions.closed);
    requestAnimationFrame(() => y.set(positions.half));
  }, [isOpen, positions, y]);

  if (!positions) return null;

  const snapTo = (destination: number) => y.set(destination);

  const handleDragEnd = (_: any, info: any) => {
    const { half, full, closed } = positions;
    const currentY = y.get();
    const velocityY = info.velocity.y;
    const projected = currentY + velocityY * 0.2;
    const closeThreshold = half + (closed - half) * 0.85;
    const fullToHalfNudge = info.offset.y > 12 && currentY < half * 0.3;

    if (velocityY < -1100) {
      snapTo(full);
      return;
    }

    if (projected >= closeThreshold) {
      snapTo(closed);
      onClose();
      return;
    }

    if (fullToHalfNudge) {
      snapTo(half);
      return;
    }

    const fullThreshold = half * 0.25;
    if (projected <= fullThreshold) {
      snapTo(full);
      return;
    }

    snapTo(half);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-end justify-center">
          <motion.div
            onClick={() => {
              snapTo(positions.closed);
              onClose();
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
            dragElastic={0.08}
            style={{ y, height: "100vh" }}
            onDragEnd={handleDragEnd}
            exit={{ y: positions.closed }}
            transition={SPRING}
            className="relative flex w-full max-w-md flex-col rounded-t-3xl bg-[#f8f9ff] shadow-2xl"
          >
            <div
              className="flex cursor-grab justify-center pt-3 pb-2"
              onPointerDown={(event) => {
                event.stopPropagation();
                dragControls.start(event);
              }}
            >
              <div className="h-1.5 w-10 rounded-full bg-gray-400" />
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
