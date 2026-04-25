"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { type PointerEvent, useCallback, useRef, useState } from "react";

import { CONTENT_STEPS } from "./contentsData";
import { ContentStepCard } from "./ContentStepCard";

export const ContentStepList = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isDragging: false,
    scrollLeft: 0,
    startX: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * scroller.clientWidth,
      behavior: "smooth",
    });
  }, []);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== "mouse") return;

      const scroller = scrollerRef.current;
      if (!scroller) return;

      dragStateRef.current = {
        isDragging: true,
        scrollLeft: scroller.scrollLeft,
        startX: event.clientX,
      };
      setIsDragging(true);
      scroller.setPointerCapture(event.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const scroller = scrollerRef.current;
      const dragState = dragStateRef.current;
      if (!scroller || !dragState.isDragging || event.pointerType !== "mouse") {
        return;
      }

      event.preventDefault();
      scroller.scrollLeft =
        dragState.scrollLeft - (event.clientX - dragState.startX);
    },
    []
  );

  const endDrag = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    dragStateRef.current.isDragging = false;
    setIsDragging(false);

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
  }, []);

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`smd:-mx-8 smd:px-4 border-gray-3 -mx-4 snap-x snap-mandatory overflow-x-auto scroll-smooth border-y bg-white px-4 py-4 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
        }`}
      >
        <div className="smd:w-full smd:gap-4 flex w-max gap-4">
          <div className="shrink-0 snap-start" aria-hidden="true" />
          {CONTENT_STEPS.map((step, index) => (
            <ContentStepCard key={step.name} step={step} index={index} />
          ))}
          {/* <div className="shrink-0 snap-start" aria-hidden="true" /> */}
        </div>
      </div>
      <div className="smd:flex mt-5 hidden justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          className="border-primaryNavy/20 text-primaryNavy hover:border-primaryNavy/40 hover:bg-primaryNavy/5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border bg-white shadow-[0_10px_24px_rgba(53,112,233,0.08)] transition"
          aria-label="이전 콘텐츠 보기"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          className="border-primaryNavy/20 text-primaryNavy hover:border-primaryNavy/40 hover:bg-primaryNavy/5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border bg-white shadow-[0_10px_24px_rgba(53,112,233,0.08)] transition"
          aria-label="다음 콘텐츠 보기"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};
