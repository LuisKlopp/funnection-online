import { TitleBadge } from "../TitleBadge";

export const ResponseHeader = () => {
  return (
    <div className="mb-12 text-center">
      <TitleBadge title="Other Answers" />

      <h2 className="text-gray-9 mt-2 text-2xl font-semibold tracking-tight">
        다른 사람들은 이렇게 답했어요
      </h2>

      <p className="mt-1 text-sm text-gray-400">6개의 솔직한 이야기</p>
    </div>
  );
};
