import { AboutFunnectionDetailSection } from "./_components/about-funnection-detail-section/AboutFunnectionDetailSection";
import { AboutFunnectionHeroSection } from "./_components/about-funnection-hero-section/AboutFunnectionHeroSection";
import { BottomLinkBar } from "./_components/BottomLinkBar";

export const AboutFunnectionPageClient = () => {
  return (
    <div className="mx-auto min-h-svh w-full bg-white">
      <AboutFunnectionHeroSection />
      <AboutFunnectionDetailSection />
      <BottomLinkBar />
    </div>
  );
};
