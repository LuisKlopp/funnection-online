"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Portal } from "@/components/layout/PortalWrapper";

export const ResultModal = ({
  open,
  message = "완료됐어요.",
  onClose,
}: {
  open: boolean;
  message?: string;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <Portal>
      <AnimatePresence>
        <div className="fixed inset-0 z-9999 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
              mass: 0.8,
            }}
            className="border-primaryNavy/80 relative z-10 w-[80%] max-w-xs rounded-2xl border-2 bg-[#f8f8e8] px-6 py-6 text-center shadow-xl"
          >
            <p className="text-primaryNavy text-base font-medium">{message}</p>
          </motion.div>
        </div>
      </AnimatePresence>
    </Portal>
  );
};
