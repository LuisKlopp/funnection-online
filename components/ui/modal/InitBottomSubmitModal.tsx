"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useModal } from "@/hooks/ui/useModal";

export const InitBottomSubmitModal = () => {
  const { closeModal, isModal } = useModal("init-bottom-submit");
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  if (!isModal) return null;

  const ages = ["10대", "20대", "30대", "40대", "50대+"];
  const genders = ["남", "여"];

  useLockBodyScroll();
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
          className="relative w-full max-w-md rounded-t-3xl bg-white px-6 pt-6 pb-8 shadow-2xl"
        >
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-gray-300" />
          <h2 className="text-gray-8 text-lg font-semibold">정보 입력</h2>
          <p className="mt-2 text-sm text-gray-500">
            정보를 입력하시면 전체답변 뿐만 아니라
            <br />
            나와 같은 나이대·성별의 답변도 확인하실 수 있어요. 😊
            <br />
            <span className="text-primaryNavy font-medium">
              최초 1회만 입력하시면 돼요!
            </span>
          </p>
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-gray-600">연령대</p>
            <div className="grid grid-cols-5 gap-2">
              {ages.map((age) => {
                const active = selectedAge === age;
                return (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`rounded-xl border py-2 text-sm font-medium transition ${
                      active
                        ? "border-primaryNavy bg-primaryNavy/5 text-primaryNavy"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {age}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-gray-600">성별</p>

            <div className="grid grid-cols-2 gap-2">
              {genders.map((gender) => {
                const active = selectedGender === gender;

                return (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    className={`rounded-xl border py-3 text-sm font-medium transition ${
                      active
                        ? "border-primaryNavy bg-primaryNavy/5 text-primaryNavy"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {active ? (gender === "남" ? "🙋🏻‍♂️" : "🙋🏻‍♀️") : gender}
                  </button>
                );
              })}
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
