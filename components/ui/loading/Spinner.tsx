"use client";

export const Spinner = ({}: { size?: number; className?: string }) => {
  return (
    <div className="border-t-primaryAmber h-10 w-10 animate-spin rounded-full border-4 border-gray-200" />
  );
};
