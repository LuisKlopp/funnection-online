"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useModal } from "@/hooks/ui/useModal";
import photo1 from "@/public/images/main-funnection-image/photo-1.webp";
import photo2 from "@/public/images/main-funnection-image/photo-2.webp";
import photo3 from "@/public/images/main-funnection-image/photo-3.webp";
import photo4 from "@/public/images/main-funnection-image/photo-4.webp";
import photo5 from "@/public/images/main-funnection-image/photo-5.webp";
import photo6 from "@/public/images/main-funnection-image/photo-6.webp";
import photo7 from "@/public/images/main-funnection-image/photo-7.webp";
import photo8 from "@/public/images/main-funnection-image/photo-8.webp";
import photo9 from "@/public/images/main-funnection-image/photo-9.webp";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

export const MainFunnectionPhotoCard = () => {
  const [index, setIndex] = useState(0);
  const { openModal } = useModal("funnection-image");

  const prev = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="box-shadow-2 relative overflow-hidden rounded-3xl">
      <div className="aspect-4/3 w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {photos.map((photo, i) => (
            <div key={i} className="relative min-w-full">
              <Image
                onClick={openModal}
                src={photo}
                alt="funnection meeting"
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-1.5 text-white backdrop-blur hover:bg-black/40"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-1.5 text-white backdrop-blur hover:bg-black/40"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute right-1 bottom-2 flex items-center gap-2 rounded-xl bg-black/50 p-2">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
