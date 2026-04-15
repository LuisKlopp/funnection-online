import { AgeGroupType, GenderType } from "./home.type";

export interface AnswerType {
  id: number;
  questionId: number;
  content: string;
  gender: GenderType;
  ageGroup: AgeGroupType;
  nickname: string;
  likeCount: number;
  isHidden: boolean;
  createdAt: string;
  updatedAt: string;
  isMine: boolean;
  likedByMe: boolean;
}

export interface CreateAnswerRequest {
  questionId: number;
  content: string;
  gender: GenderType;
  ageGroup: AgeGroupType;
  nickname: string;
  anonId?: string;
}

export interface CreateAnswerResponse {
  success: boolean;
  hasAnswered: boolean;
  answer: AnswerType;
}

export interface EditAnswerRequest {
  questionId: number;
  content: string;
  anonId?: string;
}

export interface EditAnswerResponse {
  success: boolean;
  answer: AnswerType;
}

export interface ListAnswerType {
  answers: AnswerType[];
  hasAnswered: boolean;
}

export interface LikeAnswerResponse {
  success: boolean;
  likedByMe: boolean;
  likeCount: number;
}
