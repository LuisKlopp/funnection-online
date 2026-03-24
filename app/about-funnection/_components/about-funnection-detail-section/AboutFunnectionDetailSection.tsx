"use client";

import { Sparkles } from "lucide-react";

import { BadgeAboutFunnection } from "../BadgeAboutFunnection";
import { ContentList } from "./ContentList";
import { DescribeBox } from "./DescribeBox";
import { FeatureList } from "./FeatureList";
import { InnerTitle } from "./InnerTitle";
import { SampleQuestionList } from "./SampleQuestionList";

export const AboutFunnectionDetailSection = () => {
  return (
    <section className="bg-lightNavy/70 min-h-svh px-4">
      <div className="mx-auto max-w-175">
        <div className="flex w-full flex-col gap-4">
          <BadgeAboutFunnection icon={Sparkles} text="About Funnection" />
        </div>
        <FeatureList />
        <DescribeBox />
        <InnerTitle prefix="이런" highlight="질문" suffix="들을 나눠요" />
        <SampleQuestionList />
        <InnerTitle prefix="어떤" highlight="콘텐츠" suffix="들이 있을까요?" />
        <ContentList />
      </div>
    </section>
  );
};
