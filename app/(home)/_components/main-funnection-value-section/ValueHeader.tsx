"use client";

import { motion } from "framer-motion";

interface Props {
  description: string;
  color: string;
}

export const ValueHeader = ({ description, color }: Props) => {
  return (
    <div className="mb-12">
      <h2 className="text-[32px] leading-tight font-semibold">
        질문은
        <br />
        사람을
        <br />
        <motion.span
          key={color}
          animate={{ color }}
          className="underline decoration-4 underline-offset-4"
        >
          연결합니다
        </motion.span>
      </h2>

      <motion.p
        key={description}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="leading-tightPlus mt-6 break-keep text-gray-500"
      >
        {description}
      </motion.p>
    </div>
  );
};
