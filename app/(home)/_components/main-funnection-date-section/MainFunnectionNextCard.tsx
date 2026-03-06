import { Clock, MapPin, Users } from "lucide-react";

export const MainFunnectionNextCard = () => {
  return (
    <div className="relative rounded-3xl bg-white p-8 shadow-xl">
      <div className="absolute top-0 left-0 h-2 w-full rounded-t-3xl bg-green-500" />

      <div className="mb-6 flex items-center gap-3">
        <p className="font-semibold text-green-600">그 다음 모임</p>

        <span className="rounded-full border border-green-500/40 px-3 py-1 text-xs text-green-600">
          모집 예정
        </span>
      </div>

      <h3 className="mb-6 text-4xl font-bold">
        2026 <span className="text-green-600">3.22</span>
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-green-600" />
          <p>오후 2시</p>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-green-600" />
          <div>
            <p>관악구 남부순환로 1808</p>
            <p className="text-gray-5 text-sm">관악센츄리타워 1107호</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-green-600" />
          <p>모집 인원 추후 공개</p>
        </div>
      </div>
    </div>
  );
};
