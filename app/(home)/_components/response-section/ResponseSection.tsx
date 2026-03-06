import { SectionHeader } from "../SectionHeader";
import { ResponseList } from "./ResponseList";

export const ResponseSection = () => {
  return (
    <section className="bg-gray-1/80 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          id="responses"
          titleBadge="Other Answers"
          title="다른 사람들은 이렇게 답했어요"
          description="6개의 솔직한 이야기"
        />
        <ResponseList />

        <p className="text-gray-5 mt-10 text-center text-xs">
          답변을 입력하여 이 공간에 쌓아볼까요?
        </p>
      </div>
    </section>
  );
};
