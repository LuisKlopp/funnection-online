export interface AdminApplication {
  id: number;
  nickname: string;
  phoneNumber: string;
  gender: "male" | "female";
  birthYear: number;
  memo: string;
  status: "APPLIED" | "CONFIRMED" | "CANCELLED";
  createdAt: string;
}

export interface AdminEventGroup {
  eventId: number;
  round: number;
  eventType: string;
  eventDate: string;
  startTime: string;

  counts: {
    applied: number;
    confirmed: number;
    cancelled: number;
  };

  applications: AdminApplication[];
}
