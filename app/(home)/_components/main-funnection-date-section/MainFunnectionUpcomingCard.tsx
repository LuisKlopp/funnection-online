import { Clock, MapPin, Train } from "lucide-react";

export const MainFunnectionUpcomingCard = () => {
  return (
    <div className="relative rounded-3xl bg-white p-8 shadow-xl">
      <div className="bg-primaryNavy absolute top-0 left-0 h-2 w-full rounded-t-3xl" />

      <div className="mb-6 flex items-center gap-3">
        <p className="text-primaryNavy font-semibold">다가오는 모임</p>

        <span className="border-primaryNavy/40 text-primaryNavy rounded-full border px-3 py-1 text-xs">
          모집 중
        </span>
      </div>

      <h3 className="smd:text-4xl mb-6 text-2xl font-bold">
        2026 <span className="text-primaryNavy">3.14</span> (토)
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="text-primaryNavy h-5 w-5" />
          <p>오후 7시</p>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="text-primaryNavy mt-1 h-5 w-5" />
          <div>
            <p>관악구 남부순환로 1808</p>
            <p className="text-gray-5 text-sm">관악센츄리타워 1107호</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Train className="text-primaryNavy h-5 w-5" />
          <p>서울대입구역 4번 출구 도보 1분</p>
        </div>
      </div>
    </div>
  );
};
