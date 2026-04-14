import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Pretendard-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
});

export const dmDisplay = localFont({
  variable: "--font-dmDisplay",
  src: [
    {
      path: "./DMSerifDisplay-Italic.woff",
      weight: "400",
      style: "italic",
    },
  ],
  preload: false,
});

export const maruBuri = localFont({
  variable: "--font-MaruBuri-Semibold",
  src: [
    {
      path: "./omu.woff2",
      weight: "600",
      style: "light",
    },
  ],
  display: "swap",
  preload: false,
});

export const bmDohyun = localFont({
  variable: "--font-bmDohyun",
  src: [
    {
      path: "./BM-Dohyun.otf",
      weight: "600",
      style: "light",
    },
  ],
  preload: false,
});
