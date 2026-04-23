import { CalendarDays } from "lucide-react";

export const ScheduleEmptyState = () => {
  return (
    <div className="rounded-[28px] bg-white px-5 py-10 text-center shadow-[0_18px_45px_rgba(53,112,233,0.08)]">
      <CalendarDays className="text-primaryNavy mx-auto h-7 w-7" />
      <p className="mt-4 text-[15px] font-semibold text-gray-6">
        아직 공개된 퍼넥션 일정이 없어요
      </p>
    </div>
  );
};
