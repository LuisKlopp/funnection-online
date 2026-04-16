"use client";

import { useEffect, useMemo, useState } from "react";

import { termsArticles } from "../_data/termsOfUseData";
import { TermsArticleCard } from "./TermsArticleCard";
import { TermsPolicyNav } from "./TermsPolicyNav";
import { TermsSectionHeading } from "./TermsSectionHeading";

const HEADER_OFFSET = 88;

export const TermsPolicyDetailsSection = () => {
  const articleIds = useMemo(
    () => termsArticles.map((article) => article.id),
    []
  );
  const [activeId, setActiveId] = useState(articleIds[0]);

  useEffect(() => {
    const updateActiveId = () => {
      let currentId = articleIds[0];

      for (const id of articleIds) {
        const element = document.getElementById(id);

        if (!element) continue;

        if (window.scrollY + HEADER_OFFSET + 40 >= element.offsetTop) {
          currentId = id;
        }
      }

      setActiveId(currentId);
    };

    updateActiveId();
    window.addEventListener("scroll", updateActiveId, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveId);
  }, [articleIds]);

  const handleSelect = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    setActiveId(id);

    const top =
      element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="bg-lightNavy px-6 py-22 smd:py-24">
      <div className="mx-auto max-w-295">
        <TermsSectionHeading
          eyebrow="POLICY DETAILS"
          title="이용약관 상세 조항"
          description="스크롤 중에도 읽기 쉽도록 문단 간격과 줄 간격을 넉넉하게 유지했습니다."
        />

        <div className="space-y-5">
          <TermsPolicyNav activeId={activeId} onSelect={handleSelect} />

          <div className="space-y-5">
            {termsArticles.map((article) => (
              <TermsArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
