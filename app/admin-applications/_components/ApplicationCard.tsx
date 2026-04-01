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
    <div className="rounded-[20px] border border-white/80 bg-white/90 px-3 py-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-gray-900">
            {application.nickname}
          </div>
        </div>

        <div className="min-w-0 shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-600">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <UserRound className="h-3 w-3 shrink-0" />
            <span>{application.birthYear}</span>
            <span>{getGenderEmoji(application.gender)}</span>
            <span className="text-gray-400">|</span>
            <Phone className="h-3 w-3 shrink-0 text-gray-400" />
            <span>{application.phoneNumber}</span>
          </div>
        </div>
      </div>

      {application.memo && (
        <div className="mt-2 rounded-xl bg-gray-50 px-2.5 py-1.5">
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
              className="text-xs leading-5 wrap-break-word whitespace-pre-wrap text-gray-700"
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
                className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-gray-500"
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
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => onConfirm(application.id)}
            disabled={isActionPending}
            className="bg-primaryNavy hover:bg-deepNavy disabled:bg-primaryNavy/40 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-white transition disabled:cursor-not-allowed"
          >
            <Check className="h-3.5 w-3.5" />
            수락
          </button>

          <button
            type="button"
            onClick={() => onCancel(application.id)}
            disabled={isActionPending}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-rose-300"
          >
            <X className="h-3.5 w-3.5" />
            거절
          </button>
        </div>
      )}
    </div>
  );
};
