import { useCallback } from "react";

import { useModalStore } from "@/store/useModalStore";

export const useModal = (id: string) => {
  const isOpen = useModalStore((s) => s.isOpen(id));
  const modalData = useModalStore((s) => s.getModalData());

  const openModal = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data?: any) => {
      useModalStore.getState().openModal(id, data);
    },
    [id]
  );

  const closeModal = useCallback(() => {
    useModalStore.getState().closeModal(id);
  }, [id]);

  const toggleModal = useCallback(() => {
    const state = useModalStore.getState();
    if (state.isOpen(id)) {
      state.closeModal(id);
    } else {
      state.openModal(id);
    }
  }, [id]);

  return { isModal: isOpen, openModal, closeModal, toggleModal, modalData };
};
