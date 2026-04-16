"use client";

import { useEffect, useMemo, useState } from "react";

import { privacyArticles } from "../_data/privacyPolicyData";
import { PrivacyArticleCard } from "./PrivacyArticleCard";
import { PrivacyPolicyNav } from "./PrivacyPolicyNav";
import { PrivacySectionHeading } from "./PrivacySectionHeading";

const HEADER_OFFSET = 88;

export const PrivacyPolicyDetailsSection = () => {
  const articleIds = useMemo(
    () => privacyArticles.map((article) => article.id),
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
        <PrivacySectionHeading
          eyebrow="POLICY DETAILS"
          title="개인정보 처리 기준"
          description="수집 항목, 이용 목적, 보관 기간, 이용자 권리까지 한 화면에서 읽기 쉽게 정리했습니다."
        />

        <div className="space-y-5">
          <PrivacyPolicyNav activeId={activeId} onSelect={handleSelect} />

          <div className="space-y-5">
            {privacyArticles.map((article) => (
              <PrivacyArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
