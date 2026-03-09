import "../styles/globals.css";

import type { Metadata } from "next";
import React from "react";

import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { RootModalLayer } from "@/components/layout/RootModalLayer";
import { MobileViewportHandler } from "@/components/MobileViewportHandler";
import ReactQueryProvider from "@/providers/react-query-provider";
import { dmDisplay, maruBuri, pretendard } from "@/public/fonts/fonts";

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
      <body
        className={`${pretendard.className} ${maruBuri.variable} ${dmDisplay.variable}`}
      >
        <ReactQueryProvider>
          <MobileViewportHandler />
          <Header />
          <RootModalLayer />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
