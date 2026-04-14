"use client";

import { Sheet } from "react-modal-sheet";

import { cn } from "@/lib/utils";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSnap?: (index: number) => void;
  children: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  snapPoints?: number[];
  initialSnap?: number;
  dragCloseThreshold?: number;
  dragVelocityThreshold?: number;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  onSnap,
  children,
  headerClassName,
  contentClassName,
  snapPoints = [0, 0.9, 1],
  initialSnap = 1,
  dragCloseThreshold,
  dragVelocityThreshold = 800,
}: BottomSheetProps) => {
  return (
    <Sheet
      className="mx-auto max-w-125"
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      dragCloseThreshold={dragCloseThreshold}
      dragVelocityThreshold={dragVelocityThreshold}
      disableScrollLocking
      onSnap={onSnap}
    >
      <Sheet.Container className="rounded-t-[28px]! shadow-2xl">
        <Sheet.Header className={cn("rounded-t-[28px]", headerClassName)}>
          <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-gray-500/80" />
        </Sheet.Header>

        <Sheet.Content className={cn("smd:pb-20 pb-20", contentClassName)}>
          {children}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop onTap={onClose} className="bg-black/80!" />
    </Sheet>
  );
};
