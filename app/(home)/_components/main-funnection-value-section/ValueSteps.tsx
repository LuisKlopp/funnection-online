import { ValueStep } from "@/types/value-step.type";

import { ValueStepCard } from "./ValueStepCard";

interface Props {
  steps: ValueStep[];
  activeStep: number;
  setActiveStep: (index: number) => void;
}

export const ValueSteps = ({ steps, activeStep, setActiveStep }: Props) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <ValueStepCard
          key={step.id}
          step={step}
          active={index === activeStep}
          index={index}
          onClick={() => setActiveStep(index)}
        />
      ))}
    </div>
  );
};
