"use client";

import { useEffect, useState } from "react";

export const useFirstVisitSplash = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("home-visited");

    if (!visited) {
      setIsFirstVisit(true);
      setShowSplash(true);
      sessionStorage.setItem("home-visited", "true");
    }

    setChecked(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (showSplash) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [showSplash]);

  return {
    showSplash,
    setShowSplash,
    checked,
    isFirstVisit,
  };
};
