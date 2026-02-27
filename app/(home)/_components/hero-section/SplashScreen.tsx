"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-700",
        exiting ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div
          className="fade-up bg-primaryNavy/10 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/smile-icon.svg"
            alt="smile-logo"
            width={24}
            height={24}
          />
        </div>

        <h1
          className="fade-up text-primaryNavy text-4xl font-semibold tracking-tight"
          style={{ animationDelay: "0.6s" }}
        >
          Funnection
        </h1>

        <div
          className="fade-up flex flex-col gap-1"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-gray-8 text-base tracking-wide">
            Fun + Connection
          </p>
          <p className="text-gray-5 text-[18px]">
            재밌는 연결은 질문에서 시작됩니다.
          </p>
        </div>

        <div
          className="fade-up relative mt-6 h-0.75 w-40 overflow-hidden rounded-full bg-gray-200"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="loading-bar bg-primaryNavy/50 absolute top-0 left-0 h-full w-full" />
        </div>
      </div>
    </div>
  );
};
