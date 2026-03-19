import "../styles/globals.css";

import type { Metadata, Viewport } from "next";
import React from "react";

import { LayoutShell } from "@/components/layout/LayoutShell";
import ReactQueryProvider from "@/providers/react-query-provider";
import { dmDisplay, maruBuri, pretendard } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "Funnection Online",
  description: "질문은 사람을 연결합니다.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} ${maruBuri.variable} ${dmDisplay.variable}`}
      >
        <ReactQueryProvider>
          <LayoutShell>{children}</LayoutShell>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
