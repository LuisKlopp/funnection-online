import { DEFAULT_VISIBLE_COUNT } from "./schedule.constants";

export const ScheduleSkeletonList = () => {
  return (
    <>
      {Array.from({ length: DEFAULT_VISIBLE_COUNT }).map((_, index) => (
        <div
          key={index}
          className="rounded-[28px] bg-white px-5 py-5 shadow-[0_18px_45px_rgba(53,112,233,0.08)] smd:px-7 smd:py-6"
        >
          <div className="h-6 w-40 rounded-full bg-gray-1" />
          <div className="mt-2 h-4 w-32 rounded-full bg-gray-1" />
          <div className="mt-5 h-px bg-gray-2" />
          <div className="mt-4 space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-gray-1" />
            <div className="h-4 w-2/3 rounded-full bg-gray-1" />
            <div className="h-4 w-full rounded-full bg-gray-1" />
          </div>
          <div className="mt-5 h-11 rounded-xl bg-primaryAmber/35" />
        </div>
      ))}
    </>
  );
};
