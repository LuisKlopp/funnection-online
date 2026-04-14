import { useEffect, useState } from "react";

interface HeroSectionFormQuestionProps {
  startTyping: boolean;
  question: string;
  onComplete: () => void;
}

export const HeroSectionFormQuestion = ({
  startTyping,
  question,
  onComplete,
}: HeroSectionFormQuestionProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!startTyping || !question) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(question.slice(0, index + 1));
      index++;

      if (index === question.length) {
        clearInterval(interval);
        onComplete();
      }
    }, 80);

    return () => clearInterval(interval);
  }, [startTyping, question, onComplete]);

  return (
    <h1 className="text-gray-7 smd:text-3xl smd:w-full smd:max-w-3xl font-nanum mx-auto mb-4 text-[28px] leading-9 tracking-tight break-keep">
      "{displayText}"
    </h1>
  );
};
