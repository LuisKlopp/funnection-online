"use client";

import { useCallback, useRef, useState } from "react";

import { useModal } from "@/hooks/ui/useModal";

export const useResultModal = () => {
  const modal = useModal();
  const [message, setMessage] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback(
    (msg: string, duration = 1200) => {
      setMessage(msg);

      modal.openModal("result");

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        modal.closeModal();
      }, duration);
    },
    [modal]
  );

  const close = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    modal.closeModal();
  }, [modal]);

  return {
    isOpen: modal.isModal === "result",
    message,
    show,
    close,
  };
};
