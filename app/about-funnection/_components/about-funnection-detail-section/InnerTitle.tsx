interface InnerTitleProps {
  prefix: string;
  highlight: string;
  suffix: string;
}

export const InnerTitle = ({ prefix, highlight, suffix }: InnerTitleProps) => {
  return (
    <div className="smd:text-3x mt-12 mb-4 flex w-full justify-start gap-1 text-center text-xl font-semibold">
      <span>{prefix}</span>
      <span>
        <span className="text-primaryNavy">{highlight}</span>
        {suffix}
      </span>
    </div>
  );
};
