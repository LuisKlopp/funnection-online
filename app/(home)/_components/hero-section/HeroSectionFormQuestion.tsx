import { useEffect, useState } from "react";

interface HeroSectionFormQuestionProps {
  startTyping: boolean;
  onComplete: () => void;
}

export const HeroSectionFormQuestion = ({
  startTyping,
  onComplete,
}: HeroSectionFormQuestionProps) => {
  const fullText = "당신이 가장 최근에 느낀 행복은 어떤 순간이었나요?";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
        onComplete();
      }
    }, 80);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <h1 className="leading-middlePlus text-gray-7 smd:text-3xl mb-4 max-w-3xl text-2xl font-semibold tracking-tight break-keep md:text-4xl">
      {displayText}
    </h1>
  );
};
