/* eslint-disable @next/next/no-img-element */
"use client";
import { Copy } from "lucide-react";
import Link from "next/link";

import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";

export const MainFunnectionInstagram = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://funnection-online.vercel.app/"
      );
      alert("링크가 복사되었습니다!");
    } catch (_) {
      alert("복사에 실패했습니다.");
    }
  };
  return (
    <div className="text-center">
      <p className="text-gray-5 leading-tightPlus mb-4 text-sm">
        모임 후기는 엘리오 인스타그램과
        <br /> 네이버 블로그에서 확인할 수 있어요!
      </p>

      <div className="flex w-full justify-center gap-1">
        <Link
          href="https://www.instagram.com/el_25_ryu"
          className="box-shadow-2 text-gray-6 hover:bg-gray-1 inline-flex cursor-pointer items-center gap-3 rounded-full border bg-white px-6 py-2 transition-all"
        >
          <InstagramIcon />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://blog.naver.com/fbgus333"
          className="box-shadow-2 text-gray-6 hover:bg-gray-1 inline-flex cursor-pointer items-center gap-3 rounded-full border bg-white px-6 py-2 transition-all"
        >
          <img
            src="images/blog-icon.webp"
            alt="blog-icon"
            draggable={false}
            className="h-5 w-5 rounded-lg object-contain select-none"
          />
        </Link>
        <button
          onClick={handleCopy}
          className="box-shadow-2 text-gray-6 hover:bg-gray-1 inline-flex cursor-pointer items-center gap-3 rounded-full border bg-white px-6 py-2 transition-all"
        >
          <Copy size={18} />
        </button>
      </div>
    </div>
  );
};
