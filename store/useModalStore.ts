/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface ModalState {
  modals: Record<string, boolean>;
  modalData: Record<string, any>;

  openModal: (id: string, data?: any) => void;
  closeModal: (id: string) => void;
  isOpen: (id: string) => boolean;

  getModalData: (id: string) => any;
}

export const useModalStore = create<ModalState>((set, get) => ({
  modals: {},
  modalData: {},

  openModal: (id, data) =>
    set((state) => ({
      modals: { ...state.modals, [id]: true },
      modalData: { ...state.modalData, [id]: data ?? null },
    })),

  closeModal: (id) =>
    set((state) => ({
      modals: { ...state.modals, [id]: false },
      modalData: { ...state.modalData, [id]: null },
    })),

  isOpen: (id) => !!get().modals[id],

  getModalData: (id) => get().modalData[id],
}));
