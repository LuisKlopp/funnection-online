"use client";

import { useEffect } from "react";

export const MobileViewportHandler = () => {
  useEffect(() => {
    const viewport = window.visualViewport;
    const getHeight = () =>
      viewport ? viewport.height : window.innerHeight || 0;
    const getGapBottom = () => {
      if (!viewport) return 0;
      return (
        window.innerHeight - (viewport.height + viewport.offsetTop || 0) || 0
      );
    };

    const setHeight = () => {
      const height = getHeight();
      const gapBottom = getGapBottom();
      document.documentElement.style.setProperty("--vvh", `${height}px`);
      document.documentElement.style.setProperty(
        "--vvh-gap-bottom",
        `${Math.max(gapBottom, 0)}px`
      );
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    viewport?.addEventListener("resize", setHeight);
    viewport?.addEventListener("scroll", setHeight);

    return () => {
      window.removeEventListener("resize", setHeight);
      viewport?.removeEventListener("resize", setHeight);
      viewport?.removeEventListener("scroll", setHeight);
    };
  }, []);

  return null;
};
