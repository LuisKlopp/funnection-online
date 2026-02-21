import { HeroSection } from "./_components/hero-section/HeroSection";
import { MainElioSection } from "./_components/main-elio-section/MainElioSection";
import { MainFunnectionDateSection } from "./_components/main-funnection-date-section/MainFunnectionDateSection";
import { MainFunnectionValueSection } from "./_components/main-funnection-value-section/MainFunnectionValueSection";
import { ResponseSection } from "./_components/response-section/ResponseSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <HeroSection />
      <ResponseSection />
      <MainFunnectionDateSection />
      <MainFunnectionValueSection />
      <MainElioSection />
    </div>
  );
}
