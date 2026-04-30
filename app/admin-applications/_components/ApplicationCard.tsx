"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Phone, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn, getGenderEmoji } from "@/lib/utils";
import { AdminApplication } from "@/types/admin-application.type";

interface ApplicationCardProps {
  application: AdminApplication;
  isActionPending: boolean;
  onConfirm: (applicationId: number) => void;
  onCancel: (applicationId: number) => void;
}

export const ApplicationCard = ({
  application,
  isActionPending,
  onConfirm,
  onCancel,
}: ApplicationCardProps) => {
  const memoContentRef = useRef<HTMLDivElement | null>(null);
  const [isMemoExpanded, setIsMemoExpanded] = useState(false);
  const [isMemoOverflowing, setIsMemoOverflowing] = useState(false);
  const [expandedMemoHeight, setExpandedMemoHeight] = useState(0);
  const collapsedMemoHeight = 20;

  useEffect(() => {
    if (!application.memo) return;

    const updateMemoState = () => {
      if (!memoContentRef.current) return;

      const nextExpandedMemoHeight = memoContentRef.current.scrollHeight;
      const nextIsMemoOverflowing =
        nextExpandedMemoHeight > collapsedMemoHeight + 2;

      setExpandedMemoHeight(nextExpandedMemoHeight);
      setIsMemoOverflowing(nextIsMemoOverflowing);

      if (!nextIsMemoOverflowing) {
        setIsMemoExpanded(false);
      }
    };

    updateMemoState();
    window.addEventListener("resize", updateMemoState);

    return () => {
      window.removeEventListener("resize", updateMemoState);
    };
  }, [application.memo]);

  return (
    <div className="rounded-xl border border-slate-300 bg-white px-3 py-3 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="truncate text-base font-bold text-slate-950">
            {application.nickname}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-slate-800">
          <div className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-slate-50 px-2 py-1">
            <UserRound className="h-3.5 w-3.5 shrink-0 text-slate-500" />
            <span>{application.birthYear}</span>
            <span>{getGenderEmoji(application.gender)}</span>
          </div>
          <div className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-slate-50 px-2 py-1">
            <Phone className="h-3.5 w-3.5 shrink-0 text-slate-500" />
            <span>{application.phoneNumber}</span>
          </div>
        </div>
      </div>

      {application.memo && (
        <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
          <motion.div
            initial={false}
            animate={{
              height: isMemoOverflowing
                ? isMemoExpanded
                  ? expandedMemoHeight
                  : collapsedMemoHeight
                : expandedMemoHeight || "auto",
            }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              ref={memoContentRef}
              className="text-sm leading-6 wrap-break-word whitespace-pre-wrap text-slate-900"
            >
              {application.memo}
            </div>
          </motion.div>

          <AnimatePresence initial={false}>
            {isMemoOverflowing && (
              <motion.button
                type="button"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                onClick={() => setIsMemoExpanded((prev) => !prev)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-slate-600"
              >
                <span>{isMemoExpanded ? "접기" : "메모 더보기"}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    isMemoExpanded && "rotate-180"
                  )}
                />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      {application.status === "APPLIED" && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onConfirm(application.id)}
            disabled={isActionPending}
            className="bg-primaryNavy hover:bg-deepNavy disabled:bg-primaryNavy/40 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-bold text-white transition disabled:cursor-not-allowed"
          >
            <Check className="h-3.5 w-3.5" />
            수락
          </button>

          <button
            type="button"
            onClick={() => onCancel(application.id)}
            disabled={isActionPending}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-rose-600 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-rose-300"
          >
            <X className="h-3.5 w-3.5" />
            거절
          </button>
        </div>
      )}
    </div>
  );
};
