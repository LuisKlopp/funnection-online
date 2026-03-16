"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";

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
    <BottomSheet isOpen={isModal} onClose={closeModal}>
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

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-6 pb-6">
        {events.map((event) => (
          <div key={event.id} className="rounded-xl bg-white p-4 shadow-sm">
            <div className="font-semibold text-gray-800">{event.title}</div>

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

            <button className="bg-primaryNavy mt-3 w-full rounded-lg py-2 text-sm font-semibold text-white">
              신청하기
            </button>
          </div>
        ))}
      </div>
    </BottomSheet>
  );
};
