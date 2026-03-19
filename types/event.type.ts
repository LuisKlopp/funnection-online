export interface EventData {
  id: number;
  round: number;
  eventDate: string;
  startTime: string;
  location: string;
  maxParticipants: number;
  seatsLeft: number;
  eventType: "FUNNECTION" | "BOARDGAME";
  status: "OPEN" | "CLOSED";
}
