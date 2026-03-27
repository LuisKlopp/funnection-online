import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const BottomLinkBar = () => {
  return (
    <div
      className="floating-box fixed left-0 z-50 w-full"
      style={{
        bottom:
          "calc(env(safe-area-inset-bottom, 0px) + var(--vvh-gap-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="ml-auto w-fit max-w-150 px-4 pb-3">
        <Link
          href="/apply"
          className="box-shadow-2 bg-primaryNavy flex items-center rounded-2xl px-4 py-2 font-semibold text-white transition-all duration-300"
        >
          <span className="text-sm">퍼넥션 신청하기</span>
          <ArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
