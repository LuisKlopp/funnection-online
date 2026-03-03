import { useEffect, useState } from "react";

interface HeroSectionFormQuestionProps {
  startTyping: boolean;
  onComplete: () => void;
}

export const HeroSectionFormQuestion = ({
  startTyping,
  onComplete,
}: HeroSectionFormQuestionProps) => {
  const fullText = "올해의 나에게 기대되는 일이 있다면 무엇인가요?";
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
    <h1 className="text-gray-7 smd:text-2xl smd:w-full smd:max-w-3xl font-nanum mx-auto mb-8 w-70 text-[24px] leading-9 tracking-tight break-keep">
      "{displayText}"
    </h1>
  );
};
