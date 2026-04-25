import { ContentsIntro } from "./ContentsIntro";
import { ContentStepList } from "./ContentStepList";

export const AboutFunnectionContentsSection = () => {
  return (
    <section className="bg-lightNavy px-4 py-12 smd:px-8 smd:py-12">
      <div className="mx-auto max-w-175">
        <ContentsIntro />
        <ContentStepList />
      </div>
    </section>
  );
};
