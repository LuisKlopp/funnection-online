interface AdminApplicationsHeaderProps {
  onLogout?: () => void;
  totalEvents: number;
}

export const AdminApplicationsHeader = ({
  onLogout,
  totalEvents,
}: AdminApplicationsHeaderProps) => {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-300 bg-white px-4 py-4 shadow-sm sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="inline-flex rounded-md bg-slate-900 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase">
            Admin
          </div>
          <h1 className="mt-2 text-lg font-bold text-slate-950">
            신청자 관리
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-700">
              현재 모임
            </span>
            <span className="text-xl font-black text-slate-950 sm:text-2xl">
              {totalEvents}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              로그아웃
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
