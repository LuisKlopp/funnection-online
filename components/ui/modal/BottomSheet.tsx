"use client";

import { Sheet } from "react-modal-sheet";

import { cn } from "@/lib/utils";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  headerClassName,
  contentClassName,
}: BottomSheetProps) => {
  return (
    <Sheet
      className="mx-auto max-w-125"
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={[0, 0.9, 1]}
      initialSnap={1}
      dragVelocityThreshold={800}
      disableScrollLocking
    >
      <Sheet.Container className="rounded-t-[28px]! shadow-2xl">
        <Sheet.Header className={cn("rounded-t-[28px]", headerClassName)}>
          <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-gray-500/80" />
        </Sheet.Header>

        <Sheet.Content className={cn("smd:pb-20 pb-16", contentClassName)}>
          {children}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop onTap={onClose} className="bg-black/80!" />
    </Sheet>
  );
};
