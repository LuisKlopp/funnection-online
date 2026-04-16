interface TermsSectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const TermsSectionHeading = ({
  eyebrow,
  title,
  description,
}: TermsSectionHeadingProps) => {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-primaryNavy mb-3 text-xs font-bold tracking-[0.24em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-gray-8 text-3xl leading-tight font-semibold smd:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-gray-5 mt-3 text-sm leading-7 smd:text-base">
          {description}
        </p>
      )}
    </div>
  );
};
