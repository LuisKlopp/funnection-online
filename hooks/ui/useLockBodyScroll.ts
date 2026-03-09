import { useEffect } from "react";

export const useLockBodyScroll = () => {
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    const preventTouch = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;

      document.removeEventListener("touchmove", preventTouch);
    };
  }, []);
};
