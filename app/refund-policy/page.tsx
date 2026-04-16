import type { Metadata } from "next";

import { RefundPolicyPage } from "./_components/RefundPolicyPage";

export const metadata: Metadata = {
  title: "환불정책 | Funnection Online",
  description: "퍼넥션 온라인 오프라인 모임의 결제 및 환불 기준을 안내합니다.",
};

export default function Page() {
  return <RefundPolicyPage />;
}
