"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";
import Link from "next/link";

import { Portal } from "@/components/layout/PortalWrapper";
import { EVENT_TYPE_LABEL } from "@/constants/event-type.constants";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { formatKoreanTime, parseLocalDate } from "@/lib/utils";
import { EventData } from "@/types/event.type";

import { BottomSheet } from "./BottomSheet";

interface BottomEventListModalProps {
  events: EventData[];
  date: Date | null;
  onClose: () => void;
}

export const BottomEventListModal = ({
  events,
  date,
  onClose,
}: BottomEventListModalProps) => {
  useLockBodyScroll();

  const filteredEvents = events.filter((event) => {
    if (!date) return false;

    const eventDate = parseLocalDate(event.eventDate);

    return (
      eventDate.getFullYear() === date.getFullYear() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getDate() === date.getDate()
    );
  });

  return (
    <Portal>
      <BottomSheet isOpen={true} onClose={onClose}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-base font-semibold text-gray-700">
            <Calendar size={18} className="mb-1" />
            {date &&
              format(new Date(date), "yyyy년 M월 d일", {
                locale: ko,
              })}
          </div>

          <button onClick={onClose} className="bg-primaryNavy rounded-full p-2">
            <X size={18} className="text-white" />
          </button>
        </div>

        <div className="flex w-full flex-col gap-3 overflow-y-auto px-6 pb-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="box-shadow-2 border-primaryNavy/70 rounded-xl border-2 bg-white p-4"
            >
              <div className="flex items-center gap-1">
                <div className="text-primaryNavy font-semibold">
                  {EVENT_TYPE_LABEL[event.eventType]}
                </div>
                <div className="text-gray-7 rounded-full text-[13px] font-semibold">
                  {event.round}회차
                </div>
              </div>

              <div className="text-gray-5 mt-2 flex flex-col gap-1 text-xs">
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
                onClick={onClose}
                className="mt-3 block w-full rounded-lg bg-[#3471eb] py-2 text-center text-sm font-semibold text-white"
              >
                신청하기
              </Link>
            </div>
          ))}
        </div>
      </BottomSheet>
    </Portal>
  );
};
