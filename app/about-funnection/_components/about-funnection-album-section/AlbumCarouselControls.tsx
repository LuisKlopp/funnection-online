import { ChevronLeft, ChevronRight } from "lucide-react";

interface AlbumCarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

export const AlbumCarouselControls = ({
  onNext,
  onPrev,
}: AlbumCarouselControlsProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        className="smd:left-2 text-gray-9 absolute top-1/2 left-1 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/88 shadow-[0_10px_24px_rgba(17,24,39,0.16)] backdrop-blur transition hover:bg-white"
        aria-label="이전 사진 보기"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="smd:right-2 text-gray-9 absolute top-1/2 right-1 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/88 shadow-[0_10px_24px_rgba(17,24,39,0.16)] backdrop-blur transition hover:bg-white"
        aria-label="다음 사진 보기"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
      </button>
    </>
  );
};
