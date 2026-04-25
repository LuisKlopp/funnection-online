import { ContentStep } from "./contentsData";

interface ContentStepCardProps {
  step: ContentStep;
  index: number;
}

export const ContentStepCard = ({ step, index }: ContentStepCardProps) => {
  const { icon: Icon, name, summary } = step;

  return (
    <article className="smd:w-auto box-shadow-2 w-55 overflow-hidden rounded-[28px] bg-[#648fee]">
      <div className="flex items-center justify-between px-5 py-5">
        <div className="text-primaryNavy flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <span className="text-[12px] font-semibold tracking-[0.18em] text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="px-5 pb-5">
        <h3 className="smd:text-[18px] font-dohyun text-[20px] leading-[1.2] font-semibold tracking-tight text-white">
          {name}
        </h3>
        <p className="text-gray-1 smd:text-[15px] smd:leading-6.5 mt-3 border-t border-white/25 pt-3 text-[14px] leading-5 break-keep">
          {summary}
        </p>
      </div>
    </article>
  );
};
