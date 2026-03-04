"use client";

import { useRef } from "react";

export const useDoubleTap = (onDoubleTap: () => void, delay = 300) => {
  const lastTap = useRef<number>(0);

  return () => {
    const now = Date.now();
    const delta = now - lastTap.current;

    if (delta < delay && delta > 0) {
      onDoubleTap();
    }

    lastTap.current = now;
  };
};
