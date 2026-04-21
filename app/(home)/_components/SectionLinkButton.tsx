"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SectionLinkButtonProps {
  href: string;
  isElio?: boolean;
  children: React.ReactNode;
}

export const SectionLinkButton = ({
  href,
  isElio,
  children,
}: SectionLinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        `btn-press-in box-shadow-2 bg-deepNavy/80 smd:w-auto hover:bg-deepNavy inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold text-white`,
        isElio && "bg-primaryNavy"
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
};
