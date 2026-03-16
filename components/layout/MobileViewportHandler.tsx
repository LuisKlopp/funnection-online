"use client";

import { useEffect } from "react";

export const MobileViewportHandler = () => {
  useEffect(() => {
    const viewport = window.visualViewport;
    const getHeight = () =>
      viewport ? viewport.height : window.innerHeight || 0;

    const setHeight = () => {
      const height = getHeight();
      document.documentElement.style.setProperty("--vvh", `${height}px`);
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
