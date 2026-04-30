export const CalendarLegend = () => {
  return (
    <div className="text-gray-7 mt-4 flex items-center gap-4 text-xs">
      <div className="flex items-center gap-1.5">
        <span className="bg-primaryNavy/80 h-3 w-3 rounded-full" />
        퍼넥션
      </div>

      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-green-600/80" />
        보드게임
      </div>

      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-rose-600/80" />
        홀덤
      </div>
    </div>
  );
};
