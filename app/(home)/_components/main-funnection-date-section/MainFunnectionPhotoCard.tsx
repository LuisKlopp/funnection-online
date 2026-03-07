import Image from "next/image";

import MainFunnectionImage from "@/public/images/main-funnection-image.webp";

export const MainFunnectionPhotoCard = () => {
  return (
    <div className="relative">
      <Image
        src={MainFunnectionImage}
        alt="funnection meeting"
        width={350}
        height={500}
        className="box-shadow-2 h-full w-full rounded-3xl object-cover"
      />

      {/* <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
        <span className="h-2 w-2 rounded-full bg-white" />
        <p className="text-sm">2026년 2월 22일 모임 현장</p>
      </div> */}
    </div>
  );
};
