import { ContentStep } from "./contentsData";

interface ContentStepCardProps {
  step: ContentStep;
  index: number;
}

export const ContentStepCard = ({ step, index }: ContentStepCardProps) => {
  const { icon: Icon, name, summary } = step;
  const isPrimaryCard = index % 2 === 1;

  return (
    <article
      className={`box-shadow-2 smd:w-[calc(50%-1.5rem)] w-55 shrink-0 snap-start overflow-hidden rounded-[28px] border ${
        isPrimaryCard
          ? "bg-primaryNavy/80 border-transparent"
          : "border-primaryNavy/80 border-2 bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5">
        <div
          className={`text-primaryNavy flex h-10 w-10 items-center justify-center rounded-2xl shadow-sm ${
            isPrimaryCard ? "bg-white" : "bg-primaryNavy/8"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </div>
        <span
          className={`text-[12px] font-semibold tracking-[0.18em] ${
            isPrimaryCard ? "text-white" : "text-primaryNavy/70"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="px-5 pb-5">
        <h3
          className={`smd:text-[18px] font-dohyun text-[20px] leading-[1.2] font-semibold tracking-tight ${
            isPrimaryCard ? "text-white" : "text-gray-7"
          }`}
        >
          {name}
        </h3>
        <p
          className={`smd:text-[15px] smd:leading-6.5 mt-3 border-t pt-3 text-[14px] leading-5 break-keep ${
            isPrimaryCard
              ? "text-gray-1 border-white/25"
              : "border-primaryNavy/15 text-gray-6"
          }`}
        >
          {summary}
        </p>
      </div>
    </article>
  );
};
