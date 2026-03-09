import Link from "next/link";

import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";

export const MainFunnectionInstagram = () => {
  return (
    <div className="text-center">
      <p className="text-gray-4 leading-tightPlus mb-4 text-sm">
        모임 후기 및 다음 모임일정은 <br /> 엘리오 인스타그램에서 확인할 수
        있어요!
      </p>

      <Link
        href="https://www.instagram.com/el_25_ryu"
        className="box-shadow-2 text-gray-6 hover:bg-gray-1 inline-flex cursor-pointer items-center gap-3 rounded-full border bg-white px-6 py-2 transition-all"
      >
        <InstagramIcon />
        <p className="font-medium">@el_25_ryu</p>
      </Link>
    </div>
  );
};
