import {
  CheckCircle,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  Star,
  UserRound,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ContentItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CONTENT_LIST: ContentItem[] = [
  {
    icon: UserRound,
    title: "프로필 제출",
    description: "취미, MBTI, 좋아하는 음식 등을 익명으로 공유",
  },
  {
    icon: CheckCircle,
    title: "OX 질문",
    description: "가벼운 질문으로 서로를 알아가는 시간",
  },
  {
    icon: MessageCircle,
    title: "문답 질문",
    description: "가치관, 연애 스타일, 미래에 대한 깊은 이야기",
  },
  {
    icon: Star,
    title: "히든 콘텐츠",
    description: "모임을 더욱 특별하게 만드는 순간들",
  },
  {
    icon: ImageIcon,
    title: "이미지 게임",
    description: "재미있고 의미있는 활동으로 서로를 이해",
  },
  {
    icon: Mail,
    title: "퍼스널 페이퍼",
    description: "서로에게 진심을 담은 메시지를 남기는 시간",
  },
];
