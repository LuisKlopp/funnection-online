import { axiosInstance } from "./axios";

interface ApplyRequest {
  eventId: number;
  gender: "male" | "female" | null;
  birthYear: string;
  intro: string;
  phone: string;
  nickname: string;
}

export const submitApplyForm = async (data: ApplyRequest) => {
  const { eventId } = data;

  const res = await axiosInstance.post(
    `/funnection-online/events/${eventId}/apply`,
    {
      nickname: data.nickname,
      phoneNumber: data.phone,
      gender: data.gender,
      birthYear: Number(data.birthYear),
      memo: data.intro,
    }
  );

  return res.data;
};
