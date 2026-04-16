"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackToPreviousButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        router.push("/");
      }}
      className="border-primaryNavy/15 text-primaryNavy box-shadow-1 inline-flex items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white"
    >
      <ArrowLeft className="h-4 w-4" />
      돌아가기
    </button>
  );
};
