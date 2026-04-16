interface RefundSectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const RefundSectionHeading = ({
  eyebrow,
  title,
  description,
}: RefundSectionHeadingProps) => {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-primaryNavy mb-3 text-xs font-bold tracking-[0.24em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-gray-8 smd:text-3xl text-3xl leading-tight font-semibold">
        {title}
      </h2>
      {description && (
        <p className="text-gray-5 mt-3 text-sm leading-6 smd:text-base">
          {description}
        </p>
      )}
    </div>
  );
};
