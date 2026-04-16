import { AtAGlanceSection } from "./AtAGlanceSection";
import { HowToApplySection } from "./HowToApplySection";
import { PolicyDetailsSection } from "./PolicyDetailsSection";
import { QuickSummarySection } from "./QuickSummarySection";
import { RefundHeroSection } from "./RefundHeroSection";

export const RefundPolicyPage = () => {
  return (
    <main className="w-full bg-white">
      <RefundHeroSection />
      <QuickSummarySection />
      <AtAGlanceSection />
      <PolicyDetailsSection />
      <HowToApplySection />
    </main>
  );
};
