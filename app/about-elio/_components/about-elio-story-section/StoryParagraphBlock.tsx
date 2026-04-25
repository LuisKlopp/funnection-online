interface StoryParagraphBlockProps {
  paragraphs: readonly string[];
  withDivider?: boolean;
}

export const StoryParagraphBlock = ({
  paragraphs,
  withDivider = false,
}: StoryParagraphBlockProps) => {
  return (
    <div className={withDivider ? "border-primaryNavy/10 border-t pt-8" : ""}>
      <div className="space-y-3">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-gray-6 text-[15px] leading-7 break-keep smd:text-[16px] smd:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
