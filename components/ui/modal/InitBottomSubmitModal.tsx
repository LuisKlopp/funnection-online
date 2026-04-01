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
import { cn } from "@/lib/utils";
import { useQuestionStore } from "@/store/question.store";
import { useUserInfoStore } from "@/store/userInfo.store";
import { AgeGroupType, GenderType } from "@/types/home.type";

import { SubmitLoadingBar } from "../loading/SubmitLoadingBar";

const generateRandomNickname = () => {
  const adjectives = ["조용한", "솔직한", "따뜻한", "유쾌한", "센스있는"];
  const animals = ["고양이", "강아지", "여우", "곰", "토끼"];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];

  return `${adj} ${animal}`;
};

export const InitBottomSubmitModal = ({
  content,
  onClose,
}: {
  content: string;
  onClose: () => void;
}) => {
  const [selectedAge, setSelectedAge] = useState<AgeGroupType | null>(null);
  const [selectedGender, setSelectedGender] = useState<GenderType | null>(null);
  const [nickname, setNickname] = useState("");
  const { mutate, isPending } = useCreateAnswerMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const question = useQuestionStore((s) => s.question);
  const { setUserInfo } = useUserInfoStore();

  const handleSubmit = () => {
    if (!question?.id || !selectedGender || !selectedAge) return;

    const finalNickname =
      nickname.trim() !== "" ? nickname : generateRandomNickname();

    mutate(
      {
        questionId: question?.id,
        content,
        gender: selectedGender,
        ageGroup: selectedAge,
        nickname: finalNickname,
      },
      {
        onSuccess: () => {
          setUserInfo({
            ageGroup: selectedAge,
            gender: selectedGender,
            nickname: finalNickname,
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
            <h2 className="text-gray-8 text-lg font-semibold">
              당신을 조금만 알려주세요!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              나와 비슷한 사람들의 답변을 보여드릴게요 😊
              <br />
              <span className="text-primaryNavy font-medium">
                최초 1회만 입력하시면 돼요!
              </span>
            </p>
            <div className="border-gray-3 my-4 w-[50%] border-b" />
            <p className="mb-2 text-sm font-medium text-gray-600">
              연령대 <span className="text-red-600">*</span>
            </p>
            <div className="grid grid-cols-5 gap-2">
              {AGE_OPTIONS.map((age) => {
                const active = selectedAge === age;
                return (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`box-shadow-1 rounded-xl border py-2 text-sm font-medium transition ${
                      active
                        ? "border-2 border-gray-400 bg-gray-100 text-gray-800"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {AGE_LABEL[age]}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col">
              <p className="mb-2 text-sm font-medium text-gray-600">
                성별 <span className="text-red-600">*</span>
              </p>
              <div className="grid grid-cols-2 gap-2">
                {GENDER_OPTIONS.map((gender) => {
                  const active = selectedGender === gender;

                  return (
                    <button
                      key={gender}
                      onClick={() => setSelectedGender(gender)}
                      className={`box-shadow-1 rounded-xl border py-3 text-sm font-medium transition ${
                        active
                          ? gender === "female"
                            ? "border-2 border-pink-500/40 bg-pink-500/5 text-pink-500"
                            : "border-primaryNavy/50 bg-primaryNavy/5 text-primaryNavy border-2"
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
            <div className="mt-5 flex-1">
              <p className="text-gray-6 mb-2 text-sm font-medium">
                닉네임{" "}
                <span className="text-gray-5 text-xs">(선택, 10자 이하)</span>
              </p>
              <input
                type="text"
                placeholder="빈칸으로 둬도 괜찮아요~"
                value={nickname}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value;

                  const filtered = value.replace(
                    /[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/g,
                    ""
                  );

                  setNickname(filtered);
                }}
                className="box-shadow-1 focus:ring-primaryNavy/50 w-full rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none placeholder:text-[13px] placeholder:text-gray-400 focus:ring-2"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={
                isPending || isSuccess || !selectedAge || !selectedGender
              }
              className={cn(
                "mt-6 flex w-full items-center justify-center rounded-xl py-3 text-xs font-semibold text-white transition-all",
                isPending || isSuccess || !selectedAge || !selectedGender
                  ? "bg-primaryNavy/40 cursor-not-allowed"
                  : "bg-primaryNavy/90 hover:bg-deepNavy"
              )}
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
