/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import { ReviewPhotoModal } from "./ReviewPhotoModal";

const REVIEW_PLACEHOLDERS = [
  {
    title: "처음 만난 사람들과도",
    body: "질문이 있어서 어색함보다 이야기에 먼저 집중할 수 있었어요.",
  },
  {
    title: "생각보다 훨씬 편안했던 시간",
    body: "소개팅 같은 느낌이 아니라, 자연스럽게 서로의 이야기를 듣는 분위기였어요.",
  },
  {
    title: "다음 질문이 궁금해지는 모임",
    body: "짧은 답보다 진짜 생각을 나누게 돼서 기억에 오래 남았어요.",
  },
  {
    title: "부담 없이 연결되는 경험",
    body: "억지로 친해지려 하지 않아도 대화가 이어지는 점이 좋았어요.",
  },
];

interface AboutFunnectionReviewSectionProps {
  photoUrls?: readonly string[];
}

export const AboutFunnectionReviewSection = ({
  photoUrls = [],
}: AboutFunnectionReviewSectionProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  const reviewPhotoUrls = photoUrls.filter(
    (photoUrl) => photoUrl.trim().length > 0
  );
  const reviews =
    reviewPhotoUrls.length > 0 ? reviewPhotoUrls : REVIEW_PLACEHOLDERS;

  const scrollToReview = useCallback(
    (nextIndex: number) => {
      const track = trackRef.current;
      if (!track || reviews.length === 0) return;

      const normalizedIndex = (nextIndex + reviews.length) % reviews.length;
      const target = track.children.item(normalizedIndex);

      setActiveIndex(normalizedIndex);
      target?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    [reviews.length]
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

  return (
    <section className="smd:px-8 smd:py-18 bg-white px-4 py-12">
      <div className="mx-auto max-w-175">
        <div className="mx-auto max-w-3xl">
          <span className="text-primaryNavy text-[12px] font-bold tracking-widest uppercase">
            Reviews
          </span>
          <h2 className="text-gray-9 smd:text-[36px] smd:leading-[1.15] mt-5 text-[24px] leading-[1.18] font-bold tracking-tight break-keep">
            먼저 다녀간 사람들이
            <br />
            남긴 이야기예요
          </h2>
          <div className="text-gray-6 mt-6 space-y-6 break-keep">
            <p className="smd:text-[16px] smd:leading-7 text-[14px] leading-6">
              거짓 후기는 안키워요.
              <br />
              만족도 100%의 압도적인 후기를 보여드릴게요.
            </p>
            {reviewPhotoUrls.length > 0 && (
              <p className="smd:text-[15px] text-[13px] leading-6 font-bold text-primaryNavy">
                리뷰 사진을 눌러서 크게 확인해보세요.
              </p>
            )}
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="scrollbar-none smd:-mx-8 smd:px-8 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <article
                key={
                  typeof review === "string"
                    ? `${review}-${index}`
                    : `${review.title}-${index}`
                }
                className="smd:min-w-[46%] mdl:min-w-[38%] ring-gray-2 min-w-[78%] snap-center overflow-hidden rounded-[28px] bg-white shadow-[0_22px_55px_rgba(17,24,39,0.12)] ring-1"
              >
                {typeof review === "string" ? (
                  <div className="bg-gray-1 p-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPhotoIndex(index)}
                      className="group relative flex aspect-3/4 w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-[22px] bg-white"
                      aria-label={`퍼넥션 참여자 리뷰 ${index + 1} 크게 보기`}
                    >
                      <img
                        src={review}
                        alt={`퍼넥션 참여자 리뷰 ${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
                        <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white/92 text-primaryNavy shadow-[0_14px_34px_rgba(17,24,39,0.22)] backdrop-blur transition group-hover:scale-105">
                          <ZoomIn className="h-5.5 w-5.5" strokeWidth={2.2} />
                        </span>
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-1 aspect-3/4 p-5">
                    <div className="h-full rounded-[22px] bg-white px-5 py-6 shadow-sm">
                      <div className="flex gap-1.5">
                        <span className="bg-gray-3 h-2.5 w-2.5 rounded-full" />
                        <span className="bg-gray-3 h-2.5 w-2.5 rounded-full" />
                        <span className="bg-primaryAmber h-2.5 w-2.5 rounded-full" />
                      </div>
                      <div className="mt-8">
                        <p className="text-gray-9 smd:text-[20px] text-[18px] leading-[1.2] font-bold break-keep">
                          {review.title}
                        </p>
                        <p className="text-gray-6 smd:text-[16px] smd:leading-6.5 mt-5 text-[15px] leading-6 font-medium break-keep">
                          {review.body}
                        </p>
                      </div>
                      <div className="mt-8 space-y-3">
                        <div className="bg-lightNavy h-2 rounded-full" />
                        <div className="bg-lightNavy h-2 w-10/12 rounded-full" />
                        <div className="bg-lightNavy h-2 w-7/12 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          {reviews.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => scrollToReview(activeIndex - 1)}
                className="smd:left-2 text-gray-9 absolute top-1/2 left-1 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/88 shadow-[0_10px_24px_rgba(17,24,39,0.16)] backdrop-blur transition hover:bg-white"
                aria-label="이전 리뷰 보기"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={() => scrollToReview(activeIndex + 1)}
                className="smd:right-2 text-gray-9 absolute top-1/2 right-1 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/88 shadow-[0_10px_24px_rgba(17,24,39,0.16)] backdrop-blur transition hover:bg-white"
                aria-label="다음 리뷰 보기"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </>
          )}
        </div>

        {reviews.length > 1 && (
          <div className="mt-5 flex justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={`review-dot-${
                  typeof review === "string" ? review : review.title
                }-${index}`}
                type="button"
                onClick={() => scrollToReview(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primaryNavy w-7"
                    : "bg-primaryNavy/25 w-2"
                }`}
                aria-label={`${index + 1}번째 리뷰 보기`}
                aria-current={activeIndex === index}
              />
            ))}
          </div>
        )}

        {selectedPhotoIndex !== null && reviewPhotoUrls.length > 0 && (
          <ReviewPhotoModal
            initialIndex={selectedPhotoIndex}
            photos={reviewPhotoUrls}
            onClose={() => setSelectedPhotoIndex(null)}
          />
        )}
      </div>
    </section>
  );
};
