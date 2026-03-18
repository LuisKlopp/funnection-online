"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";
import Link from "next/link";

import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { useModal } from "@/hooks/ui/useModal";
import { formatKoreanTime } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import { BottomSheet } from "./BottomSheet";

export const BottomEventListModal = () => {
  const { isModal, closeModal, modalData } = useModal("bottom-event-list");

  useLockBodyScroll();

  if (!isModal) return null;

  const events: EventData[] = modalData?.events ?? [];
  const date = modalData?.date;

  return (
    <BottomSheet
      isOpen={isModal}
      onClose={closeModal}
      headerClassName="bg-gray-2"
      contentClassName="bg-gray-2"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Calendar size={16} />
          {date &&
            format(new Date(date), "yyyy년 M월 d일", {
              locale: ko,
            })}
        </div>

        <button
          onClick={closeModal}
          className="bg-primaryNavy/90 rounded-full p-2"
        >
          <X size={18} className="text-white" />
        </button>
      </div>

      <div className="flex w-full flex-col gap-3 overflow-y-auto px-6 pb-6">
        {events.map((event) => (
          <div key={event.id} className="box-shadow-2 rounded-xl bg-white p-4">
            <div className="text-primaryNavy font-semibold">{event.title}</div>

            <div className="mt-2 flex flex-col gap-1 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                {formatKoreanTime(event.startTime)}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14} />
                {event.location}
              </div>

              <div className="flex items-center gap-2">
                <Users size={14} />
                최대 {event.maxParticipants}명
              </div>
            </div>

            <Link
              href="/apply"
              onClick={closeModal}
              className="bg-primaryNavy mt-3 block w-full rounded-lg py-2 text-center text-sm font-semibold text-white"
            >
              신청하기
            </Link>
          </div>
        ))}
      </div>
    </BottomSheet>
  );
};
