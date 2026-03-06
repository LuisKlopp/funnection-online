export const CalendarLegend = () => {
  return (
    <div className="mt-4 flex items-center gap-4 text-sm">
      <div className="flex items-center gap-1">
        <span className="h-3 w-3 rounded-full bg-indigo-500" />
        퍼넥션
      </div>

      <div className="flex items-center gap-1">
        <span className="h-3 w-3 rounded-full bg-green-500" />
        보드게임
      </div>
    </div>
  );
};
