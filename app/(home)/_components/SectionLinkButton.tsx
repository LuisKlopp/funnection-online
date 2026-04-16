"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionLinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export const SectionLinkButton = ({
  href,
  children,
}: SectionLinkButtonProps) => {
  return (
    <Link
      href={href}
      className="btn-press-in box-shadow-2 bg-deepNavy/80 smd:w-auto hover:bg-deepNavy inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold text-white"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
};
