import { CONTENT_STEPS } from "./contentsData";
import { ContentStepCard } from "./ContentStepCard";

export const ContentStepList = () => {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="smd:-mx-8 smd:px-8 -mx-4 overflow-x-auto bg-white/55 px-4 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="smd:grid smd:w-full smd:grid-cols-2 smd:gap-4 flex w-max gap-3">
          {CONTENT_STEPS.map((step, index) => (
            <ContentStepCard key={step.name} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
