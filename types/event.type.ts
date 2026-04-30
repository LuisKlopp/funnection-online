import type { EventType } from "@/constants/event-type.constants";

export interface GenderSeatsLeft {
  total: number;
  female: number;
  male: number;
}

export type SeatsLeft = number | GenderSeatsLeft;

export interface EventData {
  id: number;
  round: number;
  eventDate: string;
  startTime: string;
  location: string;
  maxParticipants: number;
  seatsLeft: SeatsLeft;
  eventType: EventType;
  status: "OPEN" | "CLOSED";
}
