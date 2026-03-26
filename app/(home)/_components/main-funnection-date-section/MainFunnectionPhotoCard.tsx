"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { MainFunnectionImageModal } from "@/components/ui/modal/MainFunnectionImageModal";
import { FUNNECTION_PHOTOS } from "@/constants/funnection-photos.constants";
import { useModal } from "@/hooks/ui/useModal";

export const MainFunnectionPhotoCard = () => {
  const [index, setIndex] = useState(0);
  const modal = useModal();

  const prev = () => {
    setIndex(
      (prev) => (prev - 1 + FUNNECTION_PHOTOS.length) % FUNNECTION_PHOTOS.length
    );
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % FUNNECTION_PHOTOS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="box-shadow-2 relative overflow-hidden rounded-3xl">
      <div className="smd:h-90 aspect-4/3 w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {FUNNECTION_PHOTOS.map((photo, i) => (
            <div key={i} className="relative min-w-full">
              <Image
                onClick={() => modal.openModal("photos")}
                src={photo}
                alt="funnection meeting"
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
        {FUNNECTION_PHOTOS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
      {modal.isModal && <MainFunnectionImageModal onClose={modal.closeModal} />}
    </div>
  );
};
