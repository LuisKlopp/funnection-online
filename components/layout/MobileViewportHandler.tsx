"use client";

import { useEffect } from "react";

export const MobileViewportHandler = () => {
  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--vvh",
        `${viewport.height}px`
      );
    };

    setHeight();
    viewport.addEventListener("resize", setHeight);

    return () => {
      viewport.removeEventListener("resize", setHeight);
    };
  }, []);

  return null;
};
