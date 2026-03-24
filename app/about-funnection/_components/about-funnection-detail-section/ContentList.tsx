"use client";

import { useState } from "react";

import { CONTENT_LIST } from "@/constants/contents-list-constants";

import { ContentCard } from "./ContentCard";

export const ContentList = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleList = expanded ? CONTENT_LIST : CONTENT_LIST.slice(0, 3);

  return (
    <div className="rounded-2xl">
      <div className="flex flex-col">
        {visibleList.map((item) => (
          <ContentCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {CONTENT_LIST.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-primaryNavy border-primaryNavy/30 hover:bg-primaryNavy/10 w-full rounded-full border bg-white px-6 py-2 text-sm font-medium transition"
          >
            {expanded ? "접기" : "전체 보기"}
          </button>
        </div>
      )}
    </div>
  );
};
