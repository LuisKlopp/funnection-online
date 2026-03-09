"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { ResponseCard } from "@/app/(home)/_components/main-response-section/ResponseCard";
import { RESPONSES } from "@/constants/responses.constants";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useModal } from "@/hooks/ui/useModal";

export const BottomAnswerListModal = () => {
  const { isModal, closeModal } = useModal("bottom-answer-list");
  useLockBodyScroll();

  if (!isModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-9999 flex items-end justify-center">
        <motion.div
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
          className="relative flex h-[80vh] w-full max-w-md flex-col rounded-t-3xl bg-white shadow-2xl"
        >
          <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-gray-300" />
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-gray-8 text-lg font-semibold">
                전체 답변 구경하기
              </h2>
              <p className="text-gray-4 text-xs">
                좋아요 많은 순 · 총 {RESPONSES.length}개
              </p>
            </div>

            <button
              onClick={closeModal}
              className="rounded-full bg-gray-100 p-2"
            >
              <X size={18} />
            </button>
          </div>
          <div className="h-px bg-gray-100" />
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
            {RESPONSES.map((item, i) => (
              <ResponseCard
                key={i}
                icon={item.icon}
                iconBg={item.iconBg}
                profile={item.profile}
                content={item.content}
                likes={item.likes}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
