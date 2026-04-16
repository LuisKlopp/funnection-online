import { cn } from "@/lib/utils";

import { TermsArticle, TermsTone } from "../_data/termsOfUseData";

interface TermsArticleCardProps {
  article: TermsArticle;
}

const toneStyle = {
  blue: {
    wrap: "border-[#bfd1ff] bg-[#edf3ff]",
    badge: "bg-primaryNavy text-white",
    text: "text-primaryNavy",
  },
  red: {
    wrap: "border-[#ffd3d3] bg-[#fff1f1]",
    badge: "bg-[#ff4d4f] text-white",
    text: "text-[#ff4d4f]",
  },
  gray: {
    wrap: "border-[#e6ebf4] bg-[#f6f8fc]",
    badge: "bg-[#6b7280] text-white",
    text: "text-gray-6",
  },
};

const TermsNumberList = ({
  items,
  tone,
}: {
  items: string[];
  tone: TermsTone;
}) => {
  const style = toneStyle[tone];

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item}
          className={cn(
            "flex items-start gap-3 rounded-2xl px-4 py-4",
            tone === "gray" ? "bg-[#f6f8fc]" : style.wrap
          )}
        >
          <span
            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${style.badge}`}
          >
            {index + 1}
          </span>
          <span className="text-gray-7 text-sm leading-7 smd:text-base smd:leading-8">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export const TermsArticleCard = ({ article }: TermsArticleCardProps) => {
  return (
    <article
      id={article.id}
      className="border-gray-2 scroll-mt-24 overflow-hidden rounded-[28px] border bg-white shadow-[0_12px_36px_rgba(110,129,167,0.12)]"
    >
      <div className="border-gray-2 flex items-center gap-3 border-b px-5 py-5 smd:px-6">
        <span className="bg-primaryNavy h-7 w-1 rounded-full" />
        <h3 className="text-gray-8 text-xl font-semibold smd:text-[28px] smd:leading-9">
          {article.title}
        </h3>
      </div>

      <div className="space-y-5 px-5 py-6 smd:px-6 smd:py-7">
        {article.blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p
                key={`${article.id}-paragraph-${index}`}
                className="text-gray-7 text-sm leading-7 smd:text-base smd:leading-8"
              >
                {block.text}
              </p>
            );
          }

          if (block.type === "callout") {
            return (
              <div
                key={`${article.id}-callout-${index}`}
                className={`rounded-[22px] border px-4 py-4 smd:px-5 smd:py-5 ${toneStyle[block.tone].wrap}`}
              >
                <p className={`mb-2 text-sm font-semibold ${toneStyle[block.tone].text}`}>
                  {block.title}
                </p>
                <p className="text-gray-7 text-sm leading-7 smd:text-base smd:leading-8">
                  {block.text}
                </p>
              </div>
            );
          }

          return (
            <TermsNumberList
              key={`${article.id}-number-list-${index}`}
              items={block.items}
              tone={block.tone}
            />
          );
        })}
      </div>
    </article>
  );
};
