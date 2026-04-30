export const EVENT_TYPE = {
  FUNNECTION: "FUNNECTION",
  BOARDGAME: "BOARDGAME",
  HOLDEM: "HOLDEM",
} as const;

export type EventType = (typeof EVENT_TYPE)[keyof typeof EVENT_TYPE];

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  FUNNECTION: "퍼넥션",
  BOARDGAME: "보드게임",
  HOLDEM: "홀덤",
};
