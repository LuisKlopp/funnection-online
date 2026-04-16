import { TermsHeroSection } from "./TermsHeroSection";
import { TermsNoticeSection } from "./TermsNoticeSection";
import { TermsPolicyDetailsSection } from "./TermsPolicyDetailsSection";
import { TermsQuickSummarySection } from "./TermsQuickSummarySection";

export const TermsOfUsePage = () => {
  return (
    <main className="w-full bg-white">
      <TermsHeroSection />
      <TermsQuickSummarySection />
      <TermsPolicyDetailsSection />
      <TermsNoticeSection />
    </main>
  );
};
