"use client";

import { useState } from "react";

import { VideoIntro } from "./VideoIntro";
import { VideoModal } from "./VideoModal";
import { VideoPreviewCard } from "./VideoPreviewCard";

export const AboutFunnectionVideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-white px-4 py-12 smd:px-8 smd:py-8">
        <div className="mx-auto max-w-6xl">
          <div className="smd:grid-cols-[minmax(0,1fr)_auto] grid items-center gap-8">
            <VideoIntro />
            <VideoPreviewCard onOpen={() => setIsOpen(true)} />
          </div>
        </div>
      </section>
      {isOpen && <VideoModal onClose={() => setIsOpen(false)} />}
    </>
  );
};
