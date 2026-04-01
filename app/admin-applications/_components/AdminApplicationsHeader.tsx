interface AdminApplicationsHeaderProps {
  onLogout?: () => void;
  totalEvents: number;
}

export const AdminApplicationsHeader = ({
  onLogout,
  totalEvents,
}: AdminApplicationsHeaderProps) => {
  return (
    <section className="box-shadow-1 overflow-hidden rounded-[22px] border border-blue-200 bg-linear-to-br from-white via-blue-50/70 to-emerald-50/60 px-4 py-3 sm:px-5 sm:py-3.5">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-primaryNavy inline-flex rounded-full border border-blue-200/80 bg-white/80 px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] uppercase backdrop-blur-sm">
            Admin
          </div>
          <h1 className="mt-1.5 text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            신청자 관리
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-2xl border border-white/80 bg-white/85 px-3 py-2 shadow-sm backdrop-blur">
            <div className="text-[10px] font-medium tracking-[0.18em] text-gray-400 uppercase">
              Events
            </div>
            <div className="mt-0.5 flex items-end gap-1">
              <span className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {totalEvents}
              </span>
              <span className="pb-0.5 text-[11px] text-gray-500">개</span>
            </div>
          </div>

          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              className="rounded-2xl border border-gray-200 bg-white/85 px-3 py-2 text-xs font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50"
            >
              로그아웃
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
