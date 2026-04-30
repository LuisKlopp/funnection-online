import {
  FileText,
  Image as ImageIcon,
  type LucideIcon,
  MessageCircleMoreIcon,
  MessagesSquare,
  Scale,
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
    summary: "가볍게 나를 소개하며 대화의 첫 실마리를 만들거예요.",
  },
  {
    icon: ToggleLeft,
    name: "OX",
    summary: "단순한 선택 하나로 서로의 의견 차이를 재미있게 공유해봐요!",
  },
  {
    icon: MessagesSquare,
    name: "문답",
    summary: "같은 질문에 답하며 연애스타일, 경험, 가치관을 나눌 수 있어요.",
  },
  {
    icon: Scale,
    name: "밸런스 게임",
    summary: "둘 중 하나를 고르며 취향과 가치관을 자연스럽게 나눠요.",
  },
  {
    icon: ImageIcon,
    name: "이미지 게임",
    summary: "말보다 먼저 떠오르는 감각으로 서로를 이해해볼까요?",
  },
  {
    icon: MessageCircleMoreIcon,
    name: "퍼스널 페이퍼",
    summary: "세상에서 가장 특별한 롤링페이퍼",
  },
];
