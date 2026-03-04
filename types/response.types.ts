import { Heart, Leaf, MessageCircle, Music, Sun } from "lucide-react";

export const iconMap = {
  message: MessageCircle,
  sun: Sun,
  leaf: Leaf,
  heart: Heart,
  music: Music,
};

export type IconType = keyof typeof iconMap;

export interface ResponseItem {
  id: number;
  icon: IconType;
  iconBg: string;
  content: string;
  likes: number;
}
