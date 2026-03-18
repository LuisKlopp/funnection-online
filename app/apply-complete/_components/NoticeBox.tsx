"use client";

import { Megaphone, X } from "lucide-react";

export const NoticeBox = () => {
  return (
    <div className="box-shadow-4 w-full rounded-3xl border border-white/10 bg-linear-to-br from-[#1F2A3A] to-[#0F172A] p-6">
      <div className="mb-5 flex items-center gap-2">
        <Megaphone className="h-5 w-5 text-gray-300" />
        <span className="text-lg font-semibold text-gray-200">
          참여 전 꼭 읽어주세요
        </span>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-gray-400">
        <Item text="종교·정치·다단계 관련 홍보나 권유는 절대 금지예요" />
        <Item text="상대방의 이야기는 듣지 않고 본인 의견만 반복해서 어필하는 행동은 삼가주세요" />
        <Item text="특정 이성에게 과하게 어필하거나 불편함을 주는 행동은 자제해주세요" />
      </div>
      <div className="my-5 h-px bg-white/10" />
      <p className="text-center text-sm text-gray-400">
        모두가 편하고 즐거운 자리를 만들기 위한 <br className="smd:hidden" />{" "}
        약속이에요 🙏
      </p>
    </div>
  );
};

const Item = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start gap-3 break-keep">
      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
      <span>{text}</span>
    </div>
  );
};
