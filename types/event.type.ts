import type { EventType } from "@/constants/event-type.constants";

export interface EventData {
  id: number;
  round: number;
  eventDate: string;
  startTime: string;
  location: string;
  maxParticipants: number;
  seatsLeft: number;
  eventType: EventType;
  status: "OPEN" | "CLOSED";
}
