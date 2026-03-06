import { InstagramIcon } from "@/components/icons/InstagramIcon";

export const MainFunnectionInstagram = () => {
  return (
    <div className="text-center">
      <p className="text-gray-5 mb-4">
        다음 모임 소식은 인스타그램에서 가장 먼저 공개돼요 ✦
      </p>

      <div className="inline-flex items-center gap-3 rounded-full border px-6 py-3">
        <InstagramIcon />
        <p className="font-medium">@funnection_official</p>
      </div>
    </div>
  );
};
