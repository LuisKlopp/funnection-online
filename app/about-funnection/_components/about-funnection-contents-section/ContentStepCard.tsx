import { ContentStep } from "./contentsData";

interface ContentStepCardProps {
  step: ContentStep;
  index: number;
}

export const ContentStepCard = ({ step, index }: ContentStepCardProps) => {
  const { icon: Icon, name, summary } = step;

  return (
    <article className="border-primaryNavy/10 smd:w-auto w-55 rounded-[28px] border bg-white px-5 py-5 shadow-[0_18px_45px_rgba(53,112,233,0.06)]">
      <div className="flex items-center justify-between">
        <div className="text-primaryNavy flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <span className="text-primaryNavy/55 text-[12px] font-semibold tracking-[0.18em]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-gray-9 smd:text-[18px] mt-4 text-[18px] leading-[1.2] font-bold tracking-tight">
        {name}
      </h3>
      <p className="text-gray-6 smd:text-[16px] smd:leading-6.5 mt-2.5 text-[15px] leading-6 break-keep">
        {summary}
      </p>
    </article>
  );
};
