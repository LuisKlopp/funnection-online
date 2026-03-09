"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useModalStore } from "@/store/useModalStore";

export const InitBottomSubmitModal = () => {
  const close = useModalStore((s) => s.closeModal);
  const isOpen = useModalStore((s) => s.isOpen("init-bottom-submit"));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-9999 flex items-end justify-center">
        <motion.div
          onClick={() => close("init-bottom-submit")}
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
          className="relative w-full max-w-md rounded-t-3xl bg-white px-6 pt-6 pb-8 shadow-2xl"
        >
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-gray-300" />
          <h2 className="text-gray-8 text-lg font-semibold">정보 입력</h2>
          <p className="mt-2 text-sm text-gray-500">
            같은 나이대·성별의 답변을 모아 통계로 공개할 예정이에요. 비슷한
            사람들의 이야기가 궁금하다면 입력해주세요 😊
            <br />
            <span className="text-primaryNavy font-medium">
              최초 1회만 입력하시면 돼요!
            </span>
          </p>
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-gray-600">연령대</p>
            <div className="grid grid-cols-4 gap-2">
              {["10대", "20대", "30대", "40대+"].map((age) => (
                <button
                  key={age}
                  className="rounded-xl border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50"
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-gray-600">성별</p>

            <div className="grid grid-cols-2 gap-2">
              <button className="rounded-xl border border-gray-200 py-3 text-sm font-medium hover:bg-gray-50">
                남성
              </button>
              <button className="rounded-xl border border-gray-200 py-3 text-sm font-medium hover:bg-gray-50">
                여성
              </button>
            </div>
          </div>
          <button className="bg-primaryNavy/90 mt-6 w-full rounded-xl py-3 font-semibold text-white">
            답변하기
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
