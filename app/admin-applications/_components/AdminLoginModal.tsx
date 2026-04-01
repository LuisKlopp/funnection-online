"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  LoaderCircle,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";

interface AdminLoginModalProps {
  errorMessage: string | null;
  isPending: boolean;
  onSubmit: (values: { username: string; password: string }) => Promise<void>;
}

export const AdminLoginModal = ({
  errorMessage,
  isPending,
  onSubmit,
}: AdminLoginModalProps) => {
  useLockBodyScroll();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim() || !password.trim() || isPending) {
      return;
    }

    await onSubmit({
      username: username.trim(),
      password,
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-120 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.22)]"
        >
          <div className="bg-primaryNavy px-5 py-4 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
              <ShieldCheck className="h-3.5 w-3.5" />
              Private Admin
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              관리자 로그인
            </h2>
            <p className="mt-1 text-sm text-white/85">
              인증 후 12시간 동안 이 기기에서 다시 로그인하지 않습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 px-5 py-5">
            <label className="block">
              <span className="mb-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600">
                <UserRound className="h-3.5 w-3.5" />
                아이디
              </span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                inputMode="text"
                className="focus:ring-primaryNavy/20 focus:border-primaryNavy w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-900 outline-none focus:ring-4"
                placeholder="아이디를 입력하세요"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600">
                <LockKeyhole className="h-3.5 w-3.5" />
                비밀번호
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                className="focus:ring-primaryNavy/20 focus:border-primaryNavy w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-900 outline-none focus:ring-4"
                placeholder="비밀번호를 입력하세요"
              />
            </label>

            {errorMessage && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs leading-5 text-rose-700">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending || !username.trim() || !password.trim()}
              className="bg-primaryNavy hover:bg-deepNavy disabled:bg-primaryNavy/40 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  확인 중...
                </>
              ) : (
                "로그인"
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
