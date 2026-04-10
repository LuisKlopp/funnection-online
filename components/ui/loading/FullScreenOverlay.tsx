"use client";

import { Portal } from "@/components/layout/PortalWrapper";

export const FullscreenOverlay = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <Portal>
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-xs">
        {children}
      </div>
    </Portal>
  );
};
