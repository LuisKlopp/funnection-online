import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown } from "lucide-react";

import { ApplicationCard } from "@/app/admin-applications/_components/ApplicationCard";
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
    section: "border-blue-100 bg-blue-100",
    text: "text-blue-800",
    badge: "bg-white text-blue-700 border border-blue-100",
  },
  green: {
    section: "border-emerald-100 bg-emerald-100",
    text: "text-emerald-800",
    badge: "bg-white text-emerald-700 border border-emerald-100",
  },
  rose: {
    section: "border-rose-100 bg-rose-100",
    text: "text-rose-800",
    badge: "bg-white text-rose-700 border border-rose-100",
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
    <section className={cn("rounded-[20px] border p-3", toneClass.section)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className={cn("text-xs font-semibold sm:text-sm", toneClass.text)}>
          {title}
        </h3>

        <div
          className={cn(
            "rounded-full px-2.5 py-1 text-[11px] font-semibold",
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
          <div className="rounded-2xl border border-dashed border-white/90 bg-white/70 px-3 py-4 text-center text-xs text-gray-500">
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
    { label: "대기", value: event.counts.applied },
    { label: "남", value: confirmedMaleCount },
    { label: "여", value: confirmedFemaleCount },
  ];

  return (
    <motion.article
      layout
      className={cn(
        "overflow-hidden rounded-3xl border bg-white shadow-[0_14px_36px_rgba(15,23,42,0.08)]",
        isFunnection ? "border-blue-100/90" : "border-emerald-100/90"
      )}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full flex-col gap-3 p-4 text-left transition sm:p-5",
          isFunnection
            ? "bg-primaryNavy"
            : "bg-linear-to-r from-emerald-600 via-green-600 to-teal-600"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-full border border-white/30 bg-white/20 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-white/95 uppercase">
              {event.eventType}
            </div>
            <div className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {event.round}회차
            </div>
          </div>

          <div className="rounded-full bg-white/20 p-2">
            <ChevronDown
              className={cn(
                "h-4 w-4 text-white transition-transform duration-300",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] text-white">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatKoreanDate(event.eventDate)} ·{" "}
              {formatKoreanTime(event.startTime)}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {headerStats.map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-2 py-1 text-[10px] font-medium text-white sm:px-2.5 sm:text-[11px]"
              >
                <span className="text-white/72">{stat.label}</span>
                <span className="font-semibold text-white">{stat.value}</span>
              </div>
            ))}

            {isFunnection && (
              <div className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/20 px-2 py-1 text-[10px] font-semibold text-white sm:px-2.5 sm:text-[11px]">
                <span className="text-white/72">정원</span>
                <span>{confirmedApplications.length}</span>
                <span className="text-white/72">/</span>
                <span>{FUNNECTION_CAPACITY}</span>
              </div>
            )}
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
              className="space-y-3 border-t border-gray-100 bg-linear-to-b from-white to-gray-50/50 p-3 sm:p-4"
            >
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
                title="참여 확정 인원"
                emptyMessage="아직 참여 확정된 인원이 없습니다."
                items={confirmedApplications}
                tone="green"
                isActionPending={isActionPending}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
              {cancelledApplications.length > 0 && (
                <ApplicationSection
                  title="취소된 인원"
                  emptyMessage="취소된 인원이 없습니다."
                  items={cancelledApplications}
                  tone="rose"
                  isActionPending={isActionPending}
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
