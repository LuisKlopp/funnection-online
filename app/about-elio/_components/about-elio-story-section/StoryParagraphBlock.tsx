interface StoryParagraphBlockProps {
  paragraphs: readonly string[];
}

export const StoryParagraphBlock = ({ paragraphs }: StoryParagraphBlockProps) => {
  return (
    <div>
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
