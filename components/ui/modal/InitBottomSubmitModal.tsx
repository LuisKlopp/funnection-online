"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Portal } from "@/components/layout/PortalWrapper";
import {
  AGE_LABEL,
  AGE_OPTIONS,
  GENDER_LABEL,
  GENDER_OPTIONS,
} from "@/constants/user-options.constants";
import { useCreateAnswerMutation } from "@/hooks/react-query/useCreateAnswerMutation";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useQuestionStore } from "@/store/question.store";
import { useUserInfoStore } from "@/store/userInfo.store";
import { AgeGroupType, GenderType } from "@/types/home.type";

import { SubmitLoadingBar } from "../loading/SubmitLoadingBar";

export const InitBottomSubmitModal = ({
  content,
  onClose,
}: {
  content: string;
  onClose: () => void;
}) => {
  const [selectedAge, setSelectedAge] = useState<AgeGroupType | null>(null);
  const [selectedGender, setSelectedGender] = useState<GenderType | null>(null);
  const { mutate, isPending } = useCreateAnswerMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const question = useQuestionStore((s) => s.question);
  const { setUserInfo } = useUserInfoStore();

  const handleSubmit = () => {
    if (!question?.id || !selectedGender || !selectedAge) return;

    mutate(
      {
        questionId: question?.id,
        content,
        gender: selectedGender,
        ageGroup: selectedAge,
      },
      {
        onSuccess: () => {
          setUserInfo({
            ageGroup: selectedAge,
            gender: selectedGender,
          });

          setIsSuccess(true);

          setTimeout(() => {
            onClose();
          }, 1000);
        },
      }
    );
  };
  useLockBodyScroll();

  return (
    <Portal>
      <AnimatePresence>
        <div className="fixed inset-0 z-9999 flex items-end justify-center">
          <motion.div
            onClick={onClose}
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
            <h2 className="text-gray-8 font-semibold">
              당신을 조금만 알려주세요!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              비슷한 사람들의 답변을 보여드릴게요 😊
              <br />
              <span className="text-primaryNavy font-medium">
                최초 1회만 입력하시면 돼요!
              </span>
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-gray-600">연령대</p>
              <div className="grid grid-cols-5 gap-2">
                {AGE_OPTIONS.map((age) => {
                  const active = selectedAge === age;
                  return (
                    <button
                      key={age}
                      onClick={() => setSelectedAge(age)}
                      className={`box-shadow-1 rounded-xl border py-2 text-sm font-medium transition ${
                        active
                          ? "border-primaryNavy bg-primaryNavy/5 text-primaryNavy"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {AGE_LABEL[age]}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-gray-600">성별</p>

              <div className="grid grid-cols-2 gap-2">
                {GENDER_OPTIONS.map((gender) => {
                  const active = selectedGender === gender;

                  return (
                    <button
                      key={gender}
                      onClick={() => setSelectedGender(gender)}
                      className={`box-shadow-1 rounded-xl border py-3 text-sm font-medium transition ${
                        active
                          ? "border-primaryNavy bg-primaryNavy/5 text-primaryNavy"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {active
                        ? GENDER_LABEL[gender] === "남"
                          ? "🙋🏻‍♂️"
                          : "🙋🏻‍♀️"
                        : GENDER_LABEL[gender]}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isPending || isSuccess}
              className="bg-primaryNavy/90 mt-6 flex w-full items-center justify-center rounded-xl py-3 text-xs font-semibold text-white"
            >
              {isPending ? (
                <SubmitLoadingBar />
              ) : isSuccess ? (
                "제출완료"
              ) : (
                "답변하기"
              )}
            </button>
          </motion.div>
        </div>
      </AnimatePresence>
    </Portal>
  );
};
