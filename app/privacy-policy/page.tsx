import type { Metadata } from "next";

import { PrivacyPolicyPage } from "./_components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Funnection Online",
  description:
    "퍼넥션 온라인 서비스에서 처리하는 개인정보의 항목, 목적, 보유기간 및 이용자 권리를 안내합니다.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
