export interface Event {
  id: number;
  title: string;
  date: string;
  startTime: string;
  location: string;
  seatsLeft: number;
  keyword: string;
}

export const EVENTS: Event[] = [
  {
    id: 155,
    title: "155회차",
    date: "7월 19일 (토)",
    startTime: "오후 3:00",
    location: "남부순환로 1808 관악센츄리타워 1107호",
    seatsLeft: 4,
    keyword: "나를 움직이게 하는 것들",
  },
  {
    id: 156,
    title: "156회차",
    date: "8월 2일 (토)",
    startTime: "오후 3:00",
    location: "남부순환로 1808 관악센츄리타워 1107호",
    seatsLeft: 9,
    keyword: "지금 나에게 필요한 용기",
  },
  {
    id: 157,
    title: "157회차",
    date: "8월 16일 (토)",
    startTime: "오후 3:00",
    location: "남부순환로 1808 관악센츄리타워 1107호",
    seatsLeft: 12,
    keyword: "관계에서 나는 어떤 사람인가",
  },
  {
    id: 158,
    title: "158회차",
    date: "8월 23일 (토)",
    startTime: "오후 3:00",
    location: "남부순환로 1808 관악센츄리타워 1107호",
    seatsLeft: 12,
    keyword: "관계에서 나는 어떤 사람인가",
  },
];
