"use client";

import { motion } from "framer-motion";

export const SuccessCheckAnimation = () => {
  const circleRadius = 28;
  const circleCircumference = 2 * Math.PI * circleRadius;

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-primaryAmber/10 border-primaryAmber/30 flex h-24 w-24 items-center justify-center rounded-full border"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <motion.circle
            cx="36"
            cy="36"
            r={circleRadius}
            stroke="#FFB300"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
            initial={{
              strokeDasharray: circleCircumference,
              strokeDashoffset: circleCircumference,
            }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ rotate: -90, transformOrigin: "50% 50%" }}
          />

          <motion.path
            d="M22 37L32.5 47L51 27"
            stroke="#FFB300"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.75 }}
          />
        </svg>
      </motion.div>
    </div>
  );
};
