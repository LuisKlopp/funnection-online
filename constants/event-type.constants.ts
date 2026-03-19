export const EVENT_TYPE = {
  FUNNECTION: "FUNNECTION",
  BOARDGAME: "BOARDGAME",
} as const;

export type EventType = (typeof EVENT_TYPE)[keyof typeof EVENT_TYPE];

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  FUNNECTION: "퍼넥션",
  BOARDGAME: "보드게임",
};
