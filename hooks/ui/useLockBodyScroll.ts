"use client";

import { useEffect } from "react";

export const useLockBodyScroll = () => {
  useEffect(() => {
    const body = document.body;
    const scrollY = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      const y = body.style.top;

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";

      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, []);
};
