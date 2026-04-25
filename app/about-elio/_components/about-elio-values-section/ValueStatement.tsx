import { cn } from "@/lib/utils";

interface ValueStatementProps {
  description: string;
  isLast?: boolean;
  number: string;
  title: string;
}

export const ValueStatement = ({
  description,
  isLast = false,
  number,
  title,
}: ValueStatementProps) => {
  return (
    <div
      className={cn(
        "border-primaryNavy/10 px-5 py-6 smd:grid smd:grid-cols-[84px_minmax(0,1fr)] smd:gap-6 smd:px-8 smd:py-8",
        !isLast && "border-b"
      )}
    >
      <div className="text-primaryNavy/55 text-[12px] font-semibold tracking-[0.18em]">
        {number}
      </div>

      <div className="min-w-0">
        <h3 className="text-gray-9 mt-3 text-[18px] leading-[1.2] font-bold tracking-tight smd:mt-0 smd:text-[20px]">
          {title}
        </h3>
        <p className="text-gray-6 mt-3 text-[15px] leading-6 break-keep smd:text-[16px] smd:leading-6.5">
          {description}
        </p>
      </div>
    </div>
  );
};
