"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { valueSteps } from "@/constants/value-steps.constants";

import { ValueHeader } from "./ValueHeader";
import { ValueProgress } from "./ValueProgress";
import { ValueSteps } from "./ValueSteps";

export const MainFunnectionValueSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const step = valueSteps[activeStep];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % valueSteps.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="px-6 py-12"
      animate={{
        background: `linear-gradient(
          90deg,
          #ededed 10%,
          ${step.color}30 100%,
          #ffffff 100%
        )`,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="mx-auto max-w-md">
        <ValueHeader color={step.color} description={step.description} />

        <ValueSteps
          steps={valueSteps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <ValueProgress
          total={valueSteps.length}
          active={activeStep}
          color={step.color}
        />
      </div>
    </motion.section>
  );
};
