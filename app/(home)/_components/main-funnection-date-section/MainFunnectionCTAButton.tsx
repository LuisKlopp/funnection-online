import { Calendar } from "lucide-react";

export const MainFunnectionCTAButton = () => {
  return (
    <button className="bg-primaryNavy hover:bg-deepNavy flex w-full items-center justify-center gap-3 rounded-3xl py-3 text-lg font-semibold text-white transition">
      <Calendar className="h-5 w-5" />
      오프라인 일정 보기
    </button>
  );
};
