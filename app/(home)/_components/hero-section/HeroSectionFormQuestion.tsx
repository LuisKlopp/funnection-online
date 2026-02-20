"use client";

import { useEffect, useState } from "react";

interface HeroSectionFormQuestionProps {
  startTyping: boolean;
}

export const HeroSectionFormQuestion = ({
  startTyping,
}: HeroSectionFormQuestionProps) => {
  const fullText =
    "당신이 가장 최근에 느낀 행복은 어떤 순간이었나요? 행복은 어떤 순간이었나요?";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <h1 className="leading-middlePlus mb-8 max-w-3xl text-3xl font-semibold tracking-tight break-keep text-gray-900 md:text-4xl">
      {displayText}
      <span className="ml-1 animate-pulse font-light">|</span>
    </h1>
  );
};
