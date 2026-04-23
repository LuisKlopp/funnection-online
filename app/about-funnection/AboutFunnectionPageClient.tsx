import { FUNNECTION_PHOTOS } from "@/constants/funnection-photos.constants";

import { AboutFunnectionAlbumSection } from "./_components/about-funnection-album-section/AboutFunnectionAlbumSection";
import { AboutFunnectionContentsSection } from "./_components/about-funnection-contents-section/AboutFunnectionContentsSection";
import { AboutFunnectionDetailSection } from "./_components/about-funnection-detail-section/AboutFunnectionDetailSection";
import { AboutFunnectionHeroSection } from "./_components/about-funnection-hero-section/AboutFunnectionHeroSection";
import { AboutFunnectionReviewSection } from "./_components/about-funnection-review-section/AboutFunnectionReviewSection";
import { AboutFunnectionScheduleSection } from "./_components/about-funnection-schedule-section/AboutFunnectionScheduleSection";
import { AboutFunnectionVideoSection } from "./_components/about-funnection-video-section/AboutFunnectionVideoSection";
import { BottomLinkBar } from "./_components/BottomLinkBar";

const DEFAULT_ALBUM_PHOTO_URLS = FUNNECTION_PHOTOS.map((photo) => photo.src);

interface AboutFunnectionPageClientProps {
  albumPhotoUrls?: string[];
  reviewPhotoUrls?: string[];
}

export const AboutFunnectionPageClient = ({
  albumPhotoUrls = DEFAULT_ALBUM_PHOTO_URLS,
  reviewPhotoUrls = [],
}: AboutFunnectionPageClientProps) => {
  return (
    <div className="mx-auto min-h-svh w-full bg-white">
      <AboutFunnectionHeroSection />
      <AboutFunnectionVideoSection />
      <AboutFunnectionDetailSection />
      <AboutFunnectionAlbumSection photoUrls={albumPhotoUrls} />
      <AboutFunnectionContentsSection />
      <AboutFunnectionReviewSection photoUrls={reviewPhotoUrls} />
      <AboutFunnectionScheduleSection />
      <BottomLinkBar />
    </div>
  );
};
