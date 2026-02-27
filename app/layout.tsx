import "../styles/globals.css";

import type { Metadata } from "next";
import React from "react";

import { LayoutShell } from "@/components/LayoutShell";
import ReactQueryProvider from "@/providers/react-query-provider";
import { dmDisplay, pretendard } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "Funnection Online",
  description: "질문은 사람을 연결합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${dmDisplay.variable}`}>
        <ReactQueryProvider>
          <LayoutShell>{children}</LayoutShell>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
