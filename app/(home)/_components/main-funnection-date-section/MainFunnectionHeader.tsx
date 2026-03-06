import { TitleBadge } from "../TitleBadge";

export const MainFunnectionHeader = () => {
  return (
    <div className="text-center">
      <TitleBadge title="FUNNECTION OFFLINE GATHERING" />

      <h2 className="text-gray-9 smd:text-4xl text-2xl font-bold">
        퍼넥션 오프라인 모임
      </h2>

      <p className="text-gray-6 mt-1 text-lg">
        질문을 통해 서로를 알아가는 오프라인 대화 모임입니다.
      </p>

      <p className="text-primaryNavy mt-2 text-lg font-medium">
        정답 없는 질문 속에서 우리는 서로를 이해하고 연결됩니다.
      </p>
    </div>
  );
};
