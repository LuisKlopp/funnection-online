import { AboutElioIntroSection } from "./_components/about-elio-intro-section/AboutElioIntroSection";
import { AboutElioNoteSection } from "./_components/about-elio-note-section/AboutElioNoteSection";
import { AboutElioRolesSection } from "./_components/about-elio-roles-section/AboutElioRolesSection";
import { AboutElioStorySection } from "./_components/about-elio-story-section/AboutElioStorySection";
import { AboutElioValuesSection } from "./_components/about-elio-values-section/AboutElioValuesSection";

export const AboutElioPageClient = () => {
  return (
    <div className="mx-auto min-h-svh w-full bg-white">
      <AboutElioIntroSection />
      <AboutElioStorySection />
      <AboutElioValuesSection />
      <AboutElioRolesSection />
      <AboutElioNoteSection />
    </div>
  );
};
