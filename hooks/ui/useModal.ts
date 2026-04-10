import { useCallback, useState } from "react";

type ModalType = "submit" | "answers" | "events" | "photos" | "result" | null;

export const useModal = () => {
  const [isModal, setIsModal] = useState<ModalType>(null);

  const openModal = useCallback((type: ModalType) => {
    setIsModal(type);
  }, []);

  const closeModal = useCallback(() => {
    setIsModal(null);
  }, []);

  return {
    isModal,
    openModal,
    closeModal,
  };
};
