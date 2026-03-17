"use client";

import { Sheet } from "react-modal-sheet";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={[0, 1]}
      initialSnap={1}
      disableScrollLocking
    >
      <Sheet.Container className="rounded-t-3xl bg-[#f8f9ff] shadow-2xl">
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} className="bg-black/80!" />
    </Sheet>
  );
};
