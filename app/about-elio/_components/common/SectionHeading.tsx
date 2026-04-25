import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  align?: "left" | "center";
  className?: string;
  description?: string;
  descriptionClassName?: string;
  eyebrow: string;
  eyebrowClassName?: string;
  title: React.ReactNode;
  titleClassName?: string;
}

export const SectionHeading = ({
  align = "left",
  className,
  description,
  descriptionClassName,
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span
        className={cn(
          "text-primaryNavy text-[12px] font-bold tracking-widest uppercase",
          eyebrowClassName
        )}
      >
        {eyebrow}
      </span>

      <h2
        className={cn(
          "text-gray-9 mt-4 text-[24px] leading-[1.18] font-bold tracking-tight break-keep smd:text-[36px] smd:leading-[1.15]",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "text-gray-6 mt-8 text-[14px] leading-6 break-keep smd:text-[16px] smd:leading-7",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};
