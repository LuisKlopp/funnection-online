import { OnlineQuestion } from "@/types/online-question.type";

export async function fetchQuestion(): Promise<OnlineQuestion> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/online-question/active`,
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}
