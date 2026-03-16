"use client";

import { useHomeQuery } from "@/hooks/react-query/useHomeQuery";

import { EmptyScreen } from "./_components/hero-section/EmptyScreen";
import { HeroSection } from "./_components/hero-section/HeroSection";
import { MainElioSection } from "./_components/main-elio-section/MainElioSection";
import { MainFunnectionDateSection } from "./_components/main-funnection-date-section/MainFunnectionDateSection";
import { MainFunnectionValueSection } from "./_components/main-funnection-value-section/MainFunnectionValueSection";
import { ResponseSection } from "./_components/main-response-section/ResponseSection";

export const HomePageClient = () => {
  const { data, isLoading } = useHomeQuery();
  if (isLoading || !data) return <EmptyScreen />;
  const { question, answers } = data;

  return (
    <>
      <HeroSection questionData={question} />
      <ResponseSection answers={answers} />
      <MainFunnectionDateSection />
      <MainElioSection />
      <MainFunnectionValueSection />
    </>
  );
};
