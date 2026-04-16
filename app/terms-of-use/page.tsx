import type { Metadata } from "next";

import { TermsOfUsePage } from "./_components/TermsOfUsePage";

export const metadata: Metadata = {
  title: "퍼넥션 온라인 이용약관 | Funnection Online",
  description:
    "퍼넥션 온라인 서비스의 이용 조건과 절차, 권리와 의무, 책임사항을 안내합니다.",
};

export default function Page() {
  return <TermsOfUsePage />;
}
