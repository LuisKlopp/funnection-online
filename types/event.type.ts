export interface EventData {
  id: number;
  round: number;
  eventType: string;
  title: string;
  eventDate: string;
  startTime: string;
  location: string;
  maxParticipants: number;
  status: "OPEN" | "CLOSED";
  createdAt: string;
  updatedAt: string;
}
