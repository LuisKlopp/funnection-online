"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";
import Link from "next/link";

import { Portal } from "@/components/layout/PortalWrapper";
import { EVENT_TYPE_LABEL } from "@/constants/event-type.constants";
import { useLockBodyScroll } from "@/hooks/ui/useLockBodyScroll";
import { formatParticipationText } from "@/lib/event-seats";
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
          {filteredEvents.map((event) => {
            const isBoardgame = event.eventType === "BOARDGAME";
            const isHoldem = event.eventType === "HOLDEM";

            return (
              <div
                key={event.id}
                className={`box-shadow-2 rounded-xl border-2 bg-white p-4 ${
                  isBoardgame
                    ? "border-green-600/60"
                    : isHoldem
                      ? "border-rose-600/60"
                      : "border-primaryNavy/70"
                }`}
              >
                <div className="flex w-full items-center justify-center gap-1">
                  <div
                    className={`font-semibold ${
                      isBoardgame
                        ? "text-green-700"
                        : isHoldem
                          ? "text-rose-700"
                          : "text-primaryNavy"
                    }`}
                  >
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
                    {formatParticipationText(
                      event.eventType,
                      event.seatsLeft,
                      event.maxParticipants
                    )}
                  </div>
                </div>

                <Link
                  href={`/apply?eventId=${event.id}`}
                  onClick={onClose}
                  className={`mt-3 block w-full rounded-lg py-2 text-center text-sm font-semibold text-white ${
                    isBoardgame
                      ? "bg-green-600"
                      : isHoldem
                        ? "bg-rose-600"
                        : "bg-[#3471eb]"
                  }`}
                >
                  신청하기
                </Link>
              </div>
            );
          })}
        </div>
      </BottomSheet>
    </Portal>
  );
};
