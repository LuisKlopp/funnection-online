import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown, UsersRound } from "lucide-react";

import { ApplicationCard } from "@/app/admin-applications/_components/ApplicationCard";
import { EVENT_TYPE_LABEL } from "@/constants/event-type.constants";
import { cn, formatKoreanDate, formatKoreanTime } from "@/lib/utils";
import {
  AdminApplication,
  AdminEventGroup,
} from "@/types/admin-application.type";

interface AdminEventCardProps {
  event: AdminEventGroup;
  isOpen: boolean;
  isActionPending: boolean;
  onToggle: () => void;
  onConfirm: (applicationId: number) => void;
  onCancel: (applicationId: number) => void;
}

interface ApplicationSectionProps {
  title: string;
  emptyMessage: string;
  items: AdminApplication[];
  tone: "blue" | "green" | "rose";
  isActionPending: boolean;
  onConfirm: (applicationId: number) => void;
  onCancel: (applicationId: number) => void;
}

const toneClassMap = {
  blue: {
    section: "border-amber-300 bg-amber-50",
    title: "text-amber-950",
    badge: "bg-amber-600 text-white",
    empty: "border-amber-200 bg-white text-amber-900",
  },
  green: {
    section: "border-emerald-300 bg-emerald-50",
    title: "text-emerald-950",
    badge: "bg-emerald-700 text-white",
    empty: "border-emerald-200 bg-white text-emerald-900",
  },
  rose: {
    section: "border-slate-300 bg-slate-100",
    title: "text-slate-950",
    badge: "bg-slate-700 text-white",
    empty: "border-slate-300 bg-white text-slate-700",
  },
};

const ApplicationSection = ({
  title,
  emptyMessage,
  items,
  tone,
  isActionPending,
  onConfirm,
  onCancel,
}: ApplicationSectionProps) => {
  const toneClass = toneClassMap[tone];

  return (
    <section className={cn("rounded-2xl border-2 p-3", toneClass.section)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className={cn("text-sm font-bold sm:text-base", toneClass.title)}>
          {title}
        </h3>

        <div
          className={cn(
            "rounded-full px-3 py-1 text-xs font-bold",
            toneClass.badge
          )}
        >
          {items.length}명
        </div>
      </div>

      <div className="mt-2.5 space-y-2">
        {items.length ? (
          items.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
              isActionPending={isActionPending}
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          ))
        ) : (
          <div
            className={cn(
              "rounded-xl border border-dashed px-3 py-4 text-center text-sm font-medium",
              toneClass.empty
            )}
          >
            {emptyMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export const AdminEventCard = ({
  event,
  isOpen,
  isActionPending,
  onToggle,
  onConfirm,
  onCancel,
}: AdminEventCardProps) => {
  const FUNNECTION_CAPACITY = 8;
  const isFunnection = event.eventType === "FUNNECTION";
  const isHoldem = event.eventType === "HOLDEM";
  const headerTheme = isFunnection
    ? {
        cardBorder: "border-slate-300",
        eventTypeBadge: "bg-primaryNavy text-white",
        infoBadge: "border-slate-300 bg-slate-50 text-slate-950",
        iconColor: "text-primaryNavy",
      }
    : isHoldem
      ? {
          cardBorder: "border-slate-300",
          eventTypeBadge: "bg-rose-700 text-white",
          infoBadge: "border-slate-300 bg-slate-50 text-slate-950",
          iconColor: "text-rose-700",
        }
    : {
        cardBorder: "border-slate-300",
        eventTypeBadge: "bg-emerald-700 text-white",
        infoBadge: "border-slate-300 bg-slate-50 text-slate-950",
        iconColor: "text-emerald-700",
      };
  const confirmedApplications = event.applications.filter(
    (item) => item.status === "CONFIRMED"
  );
  const appliedApplications = event.applications.filter(
    (item) => item.status === "APPLIED"
  );
  const cancelledApplications = event.applications.filter(
    (item) => item.status === "CANCELLED"
  );
  const confirmedMaleCount = confirmedApplications.filter(
    (item) => item.gender === "male"
  ).length;
  const confirmedFemaleCount = confirmedApplications.filter(
    (item) => item.gender === "female"
  ).length;
  const headerStats = [
    {
      label: "참여 확정",
      value: event.counts.confirmed,
      className: "border-emerald-300 bg-emerald-50 text-emerald-950",
    },
    {
      label: "신청 대기",
      value: event.counts.applied,
      className: "border-amber-300 bg-amber-50 text-amber-950",
    },
    {
      label: "취소",
      value: event.counts.cancelled,
      className: "border-slate-300 bg-slate-100 text-slate-950",
    },
  ];

  return (
    <motion.article
      layout
      className={cn(
        "overflow-hidden rounded-2xl border-2 bg-white shadow-sm",
        headerTheme.cardBorder
      )}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col gap-4 bg-white p-4 text-left transition hover:bg-slate-50 sm:p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <div
              className={cn(
                "inline-flex rounded-md px-2.5 py-1 text-[11px] font-bold tracking-[0.12em] uppercase",
                headerTheme.eventTypeBadge
              )}
            >
              {EVENT_TYPE_LABEL[event.eventType] ?? event.eventType}
            </div>
            <div className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              {event.round}회차
            </div>
          </div>

          <div className="rounded-full border border-slate-300 bg-white p-2">
            <ChevronDown
              className={cn(
                "h-4 w-4 text-slate-900 transition-transform duration-300",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <div
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold",
                headerTheme.infoBadge
              )}
            >
              <CalendarDays
                className={cn("h-3.5 w-3.5", headerTheme.iconColor)}
              />
              {formatKoreanDate(event.eventDate)} ·{" "}
              {formatKoreanTime(event.startTime)}
            </div>
            {isFunnection && (
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold",
                  headerTheme.infoBadge
                )}
              >
                <UsersRound
                  className={cn("h-4 w-4", headerTheme.iconColor)}
                />
                정원 {confirmedApplications.length}/{FUNNECTION_CAPACITY}
              </div>
            )}
            <div
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-semibold",
                headerTheme.infoBadge
              )}
            >
              참여인원 성별 남 {confirmedMaleCount} · 여 {confirmedFemaleCount}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {headerStats.map((stat) => (
              <div
                key={stat.label}
                className={cn(
                  "rounded-xl border px-3 py-2 text-center",
                  stat.className
                )}
              >
                <span className="block text-[11px] font-bold sm:text-xs">
                  {stat.label}
                </span>
                <span className="mt-0.5 block text-lg font-black sm:text-xl">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="space-y-3 border-t border-slate-200 bg-slate-50 p-3 sm:p-4"
            >
              <ApplicationSection
                title="참여 확정 인원"
                emptyMessage="아직 참여 확정된 인원이 없습니다."
                items={confirmedApplications}
                tone="green"
                isActionPending={isActionPending}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
              <ApplicationSection
                title="신청 대기 인원"
                emptyMessage="현재 신청 대기 인원이 없습니다."
                items={appliedApplications}
                tone="blue"
                isActionPending={isActionPending}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
              <ApplicationSection
                title="취소된 인원"
                emptyMessage="취소된 인원이 없습니다."
                items={cancelledApplications}
                tone="rose"
                isActionPending={isActionPending}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
