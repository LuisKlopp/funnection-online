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
        </div>

        <div className="flex flex-col items-center rounded-2xl py-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-5 text-sm">현재 모임</span>
            <span className="text-gray-8 text-xl font-semibold sm:text-2xl">
              {totalEvents}
            </span>
          </div>
        </div>

        <div className="flex items-center">
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
