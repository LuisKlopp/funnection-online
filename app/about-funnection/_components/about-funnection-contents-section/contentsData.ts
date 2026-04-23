import {
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  type LucideIcon,
  MessagesSquare,
  ToggleLeft,
} from "lucide-react";

export interface ContentStep {
  icon: LucideIcon;
  name: string;
  summary: string;
}

export const CONTENT_STEPS: ContentStep[] = [
  {
    icon: FileText,
    name: "프로필 제출",
    summary: "가볍게 나를 소개하며 대화의 첫 실마리를 만들어요.",
  },
  {
    icon: ToggleLeft,
    name: "OX",
    summary: "단순한 선택 하나로 서로의 생각 차이를 재밌게 발견해요.",
  },
  {
    icon: MessagesSquare,
    name: "문답",
    summary: "같은 질문에 답하며 처음 만난 사람과도 깊이 있게 이어져요.",
  },
  {
    icon: ImageIcon,
    name: "이미지 게임",
    summary: "말보다 먼저 떠오르는 감각으로 서로를 이해해봐요.",
  },
  {
    icon: CheckCircle2,
    name: "퍼스널 페이퍼",
    summary: "마지막에는 오늘의 대화와 감정을 천천히 정리해요.",
  },
];
