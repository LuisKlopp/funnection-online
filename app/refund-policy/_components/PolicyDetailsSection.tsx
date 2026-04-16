"use client";

import { useEffect, useMemo, useState } from "react";

import { policyArticles } from "../_data/refundPolicyData";
import { PolicyArticleCard } from "./PolicyArticleCard";
import { PolicySidebar } from "./PolicySidebar";
import { RefundSectionHeading } from "./RefundSectionHeading";

const HEADER_OFFSET = 88;

export const PolicyDetailsSection = () => {
  const articleIds = useMemo(
    () => policyArticles.map((article) => article.id),
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
        <RefundSectionHeading eyebrow="POLICY DETAILS" title="상세 정책 조항" />

        <div className="space-y-5">
          <PolicySidebar activeId={activeId} onSelect={handleSelect} />

          <div className="space-y-5">
            {policyArticles.map((article) => (
              <PolicyArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
