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
        "border-primaryNavy/10 smd:grid smd:grid-cols-[84px_minmax(0,1fr)] smd:gap-6 smd:px-8 smd:py-8 px-5 py-6",
        !isLast && "border-b"
      )}
    >
      <div className="text-primaryNavy text-[12px] font-semibold tracking-[0.18em]">
        {number}
      </div>

      <div className="min-w-0">
        <h3 className="text-gray-9 smd:mt-0 smd:text-[20px] mt-3 text-[18px] leading-[1.2] font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-gray-6 smd:text-[16px] smd:leading-6.5 mt-3 text-[15px] leading-6 break-keep">
          {description}
        </p>
      </div>
    </div>
  );
};
