import { PrivacyHeroSection } from "./PrivacyHeroSection";
import { PrivacyNoticeSection } from "./PrivacyNoticeSection";
import { PrivacyPolicyDetailsSection } from "./PrivacyPolicyDetailsSection";
import { PrivacyQuickSummarySection } from "./PrivacyQuickSummarySection";

export const PrivacyPolicyPage = () => {
  return (
    <main className="w-full bg-white">
      <PrivacyHeroSection />
      <PrivacyQuickSummarySection />
      <PrivacyPolicyDetailsSection />
      <PrivacyNoticeSection />
    </main>
  );
};
