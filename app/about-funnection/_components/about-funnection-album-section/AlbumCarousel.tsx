"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { AlbumCarouselControls } from "./AlbumCarouselControls";
import { AlbumCarouselDots } from "./AlbumCarouselDots";
import { AlbumPhotoCard } from "./AlbumPhotoCard";
import { AlbumPhotoModal } from "./AlbumPhotoModal";

interface AlbumCarouselProps {
  photos: readonly string[];
}

export const AlbumCarousel = ({ photos }: AlbumCarouselProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  const scrollToPhoto = useCallback(
    (nextIndex: number) => {
      const track = trackRef.current;
      if (!track || photos.length === 0) return;

      const normalizedIndex = (nextIndex + photos.length) % photos.length;
      const target = track.children.item(normalizedIndex);

      setActiveIndex(normalizedIndex);
      target?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    [photos.length]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const childCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(trackCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    if (activeIndex > photos.length - 1) {
      setActiveIndex(Math.max(photos.length - 1, 0));
    }
  }, [activeIndex, photos.length]);

  return (
    <div className="smd:mt-12 mt-10">
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 smd:-mx-8 smd:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photoUrl, index) => (
            <AlbumPhotoCard
              key={`${photoUrl}-${index}`}
              index={index}
              onClick={() => setSelectedPhotoIndex(index)}
              photoUrl={photoUrl}
              totalCount={photos.length}
            />
          ))}
        </div>

        {photos.length > 1 && (
          <AlbumCarouselControls
            onPrev={() => scrollToPhoto(activeIndex - 1)}
            onNext={() => scrollToPhoto(activeIndex + 1)}
          />
        )}
      </div>

      {photos.length > 1 && (
        <AlbumCarouselDots
          activeIndex={activeIndex}
          photos={photos}
          onSelect={scrollToPhoto}
        />
      )}

      {selectedPhotoIndex !== null && (
        <AlbumPhotoModal
          initialIndex={selectedPhotoIndex}
          photos={photos}
          onClose={() => setSelectedPhotoIndex(null)}
        />
      )}
    </div>
  );
};
