import Link from "next/link";

import { cn } from "@/lib/utils";

interface HeaderNavDesktopProps {
  isFunnection: boolean;
  isElio: boolean;
}

export const HeaderNavDesktop = ({
  isFunnection,
  isElio,
}: HeaderNavDesktopProps) => {
  return (
    <div className="smd:flex hidden">
      <div className="bg-primaryNavy/8 flex items-center rounded-full px-1 py-1">
        <Link
          href="/funnection"
          className={cn(
            "rounded-full px-4 py-1 text-sm font-medium transition-all duration-200",
            isFunnection
              ? "bg-primaryNavy text-white"
              : "text-gray-8 hover:bg-primaryNavy hover:text-white"
          )}
        >
          퍼넥션 오프라인 모임
        </Link>

        <div className="bg-primaryNavy/80 mx-1 h-4 w-0.5" />

        <Link
          href="/elio"
          className={cn(
            "rounded-full px-4 py-1 text-sm font-medium transition-all duration-200",
            isElio
              ? "bg-primaryNavy text-white"
              : "text-gray-8 hover:bg-primaryNavy hover:text-white"
          )}
        >
          엘리오는 누구인가요?
        </Link>
      </div>
    </div>
  );
};
