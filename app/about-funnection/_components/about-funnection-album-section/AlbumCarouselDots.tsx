interface AlbumCarouselDotsProps {
  activeIndex: number;
  photos: readonly string[];
  onSelect: (index: number) => void;
}

export const AlbumCarouselDots = ({
  activeIndex,
  photos,
  onSelect,
}: AlbumCarouselDotsProps) => {
  return (
    <div className="mt-5 flex justify-center gap-2">
      {photos.map((photoUrl, index) => (
        <button
          key={`dot-${photoUrl}-${index}`}
          type="button"
          onClick={() => onSelect(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            activeIndex === index ? "bg-primaryNavy w-7" : "bg-primaryNavy/25 w-2"
          }`}
          aria-label={`${index + 1}번째 사진 보기`}
          aria-current={activeIndex === index}
        />
      ))}
    </div>
  );
};
