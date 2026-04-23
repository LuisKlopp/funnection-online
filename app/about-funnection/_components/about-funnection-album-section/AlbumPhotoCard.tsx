/* eslint-disable @next/next/no-img-element */

interface AlbumPhotoCardProps {
  index: number;
  onClick: () => void;
  photoUrl: string;
  totalCount: number;
}

export const AlbumPhotoCard = ({
  index,
  onClick,
  photoUrl,
  totalCount,
}: AlbumPhotoCardProps) => {
  return (
    <figure className="smd:h-105 smd:min-w-[68%] mdl:min-w-[58%] relative h-76 min-w-[84%] snap-center overflow-hidden rounded-[28px] bg-white shadow-[0_22px_55px_rgba(17,24,39,0.12)]">
      <button
        type="button"
        onClick={onClick}
        className="group h-full w-full cursor-zoom-in overflow-hidden"
        aria-label={`퍼넥션 앨범 사진 ${index + 1} 크게 보기`}
      >
        <img
          src={photoUrl}
          alt={`퍼넥션 앨범 사진 ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </button>
      <figcaption className="text-gray-8 absolute right-4 bottom-4 rounded-full bg-white/86 px-3 py-1.5 text-[12px] font-bold shadow-sm backdrop-blur">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(totalCount).padStart(2, "0")}
      </figcaption>
    </figure>
  );
};
