"use client";

import { useMemo } from "react";

import { FUNNECTION_PHOTOS } from "@/constants/funnection-photos.constants";
import { useFunnectionAlbumPhotosQuery } from "@/hooks/react-query/useFunnectionAlbumPhotosQuery";
import { useFunnectionReviewPhotosQuery } from "@/hooks/react-query/useFunnectionReviewPhotosQuery";

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
  const { data: albumPhotosData } = useFunnectionAlbumPhotosQuery();
  const { data: reviewPhotosData } = useFunnectionReviewPhotosQuery();

  const resolvedAlbumPhotoUrls = useMemo(() => {
    const fetchedPhotoUrls =
      albumPhotosData?.photoUrls.filter((photoUrl) => photoUrl.trim().length > 0) ??
      [];

    return fetchedPhotoUrls.length > 0 ? fetchedPhotoUrls : albumPhotoUrls;
  }, [albumPhotoUrls, albumPhotosData?.photoUrls]);

  const resolvedReviewPhotoUrls = useMemo(() => {
    const fetchedPhotoUrls =
      reviewPhotosData?.photoUrls.filter((photoUrl) => photoUrl.trim().length > 0) ??
      [];

    return fetchedPhotoUrls.length > 0 ? fetchedPhotoUrls : reviewPhotoUrls;
  }, [reviewPhotoUrls, reviewPhotosData?.photoUrls]);

  return (
    <div className="mx-auto min-h-svh w-full bg-white">
      <AboutFunnectionHeroSection />
      <AboutFunnectionVideoSection />
      <AboutFunnectionDetailSection />
      <AboutFunnectionAlbumSection photoUrls={resolvedAlbumPhotoUrls} />
      <AboutFunnectionContentsSection />
      <AboutFunnectionReviewSection photoUrls={resolvedReviewPhotoUrls} />
      <AboutFunnectionScheduleSection />
      <BottomLinkBar />
    </div>
  );
};
