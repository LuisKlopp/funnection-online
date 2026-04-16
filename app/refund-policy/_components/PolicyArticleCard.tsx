import { cn } from "@/lib/utils";

import { PolicyArticle, RefundTone } from "../_data/refundPolicyData";
import { RefundPolicyIcon } from "./RefundPolicyIcon";

interface PolicyArticleCardProps {
  article: PolicyArticle;
}

const toneStyle = {
  blue: {
    wrap: "border-[#bfd1ff] bg-[#edf3ff]",
    line: "bg-primaryNavy",
    badge: "bg-primaryNavy text-white",
    text: "text-primaryNavy",
    row: "bg-white/85",
  },
  red: {
    wrap: "border-[#ffd3d3] bg-[#fff1f1]",
    line: "bg-[#ff4d4f]",
    badge: "bg-[#ff4d4f] text-white",
    text: "text-[#ff4d4f]",
    row: "bg-white/70",
  },
  gray: {
    wrap: "border-[#e6ebf4] bg-[#f6f8fc]",
    line: "bg-[#6b7280]",
    badge: "bg-[#6b7280] text-white",
    text: "text-gray-6",
    row: "bg-white/90",
  },
};

const ArticleHighlightList = ({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: Exclude<RefundTone, "gray">;
}) => {
  const style = toneStyle[tone];

  return (
    <div className={`smd:p-5 rounded-[22px] border p-4 ${style.wrap}`}>
      <p className={`mb-3 text-sm font-semibold ${style.text}`}>{title}</p>
      <div className="space-y-2.5">
        {items.map((item, index) => (
          <div key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${style.badge}`}
            >
              {index + 1}
            </span>
            <span className="text-gray-7 smd:text-base text-sm leading-6">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArticleNumberList = ({
  items,
  tone,
}: {
  items: string[];
  tone: RefundTone;
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
          <span className="text-gray-7 smd:text-base text-sm leading-6">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export const PolicyArticleCard = ({ article }: PolicyArticleCardProps) => {
  return (
    <article
      id={article.id}
      className="border-gray-2 scroll-mt-24 overflow-hidden rounded-[28px] border bg-white shadow-[0_12px_36px_rgba(110,129,167,0.12)]"
    >
      <div className="border-gray-2 smd:px-6 flex items-center gap-3 border-b px-5 py-5">
        <span className="bg-primaryNavy h-7 w-1 rounded-full" />
        <h3 className="text-gray-8 smd:leading-9 text-lg font-semibold">
          {article.title}
        </h3>
      </div>

      <div className="smd:px-6 smd:py-7 space-y-5 px-5 py-6">
        {article.blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p
                key={`${article.id}-paragraph-${index}`}
                className="text-gray-7 smd:text-base smd:leading-8 text-sm leading-7"
              >
                {block.text}
              </p>
            );
          }

          if (block.type === "highlight-list") {
            return (
              <ArticleHighlightList
                key={`${article.id}-highlight-${index}`}
                title={block.title}
                items={block.items}
                tone={block.tone}
              />
            );
          }

          if (block.type === "banner") {
            return (
              <div
                key={`${article.id}-banner-${index}`}
                className="flex items-center gap-3 rounded-2xl bg-[#f6f8fc] px-4 py-4"
              >
                <div className="text-primaryNavy flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                  <RefundPolicyIcon name={block.icon} className="h-4 w-4" />
                </div>
                <span className="text-gray-7 smd:text-base text-sm leading-6 font-medium">
                  {block.text}
                </span>
              </div>
            );
          }

          if (block.type === "icon-grid") {
            return (
              <div
                key={`${article.id}-icon-grid-${index}`}
                className="smd:p-5 rounded-[22px] bg-[#edf3ff] p-4"
              >
                <p className="text-primaryNavy mb-4 text-sm font-semibold">
                  {block.title}
                </p>
                <div className="smd:grid-cols-3 grid gap-3">
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4"
                    >
                      <div className="bg-primaryNavy/8 text-primaryNavy flex h-9 w-9 items-center justify-center rounded-xl">
                        <RefundPolicyIcon
                          name={item.icon}
                          className="h-4 w-4"
                        />
                      </div>
                      <span className="text-gray-7 text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (block.type === "info-grid") {
            return (
              <div
                key={`${article.id}-info-grid-${index}`}
                className="smd:grid-cols-3 grid gap-3"
              >
                {block.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] bg-[#f6f8fc] px-5 py-5"
                  >
                    <div className="text-primaryNavy mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <RefundPolicyIcon name={item.icon} className="h-4 w-4" />
                    </div>
                    <h4 className="text-gray-8 text-lg font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-5 smd:leading-5.5 mt-3 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            );
          }

          return (
            <ArticleNumberList
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
