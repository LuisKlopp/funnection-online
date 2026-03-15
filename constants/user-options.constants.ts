import { AgeGroupType, GenderType } from "@/types/home.type";

export const AGE_LABEL: Record<AgeGroupType, string> = {
  "10s": "10대",
  "20s": "20대",
  "30s": "30대",
  "40s": "40대",
  "50s+": "50대+",
};

export const AGE_OPTIONS: AgeGroupType[] = ["10s", "20s", "30s", "40s", "50s+"];

export const GENDER_OPTIONS: GenderType[] = ["male", "female"];

export const GENDER_LABEL: Record<GenderType, string> = {
  male: "남",
  female: "여",
};
