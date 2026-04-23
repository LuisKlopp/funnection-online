import { AlbumCarousel } from "./AlbumCarousel";
import { AlbumIntro } from "./AlbumIntro";

interface AboutFunnectionAlbumSectionProps {
  photoUrls: readonly string[];
}

export const AboutFunnectionAlbumSection = ({
  photoUrls,
}: AboutFunnectionAlbumSectionProps) => {
  const photos = photoUrls.filter((photoUrl) => photoUrl.trim().length > 0);

  if (photos.length === 0) return null;

  return (
    <section className="bg-white px-4 py-8 smd:px-8 smd:py-18">
      <div className="mx-auto max-w-175">
        <AlbumIntro />
        <AlbumCarousel photos={photos} />
      </div>
    </section>
  );
};
