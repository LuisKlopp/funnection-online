/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface ModalState {
  modals: Record<string, boolean>;
  modalData: any | null;

  openModal: (id: string, data?: any) => void;
  closeModal: (id: string) => void;
  isOpen: (id: string) => boolean;

  getModalData: () => any | null;
}

export const useModalStore = create<ModalState>((set, get) => ({
  modals: {},
  modalData: null,

  openModal: (id, data) =>
    set((state) => ({
      modals: { ...state.modals, [id]: true },
      modalData: data ?? null,
    })),

  closeModal: (id) =>
    set((state) => ({
      modals: { ...state.modals, [id]: false },
      modalData: null,
    })),

  isOpen: (id) => !!get().modals[id],

  getModalData: () => get().modalData,
}));
