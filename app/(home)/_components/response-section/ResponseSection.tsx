import { ResponseHeader } from "./ResponseHeader";
import { ResponseList } from "./ResponseList";

export const ResponseSection = () => {
  return (
    <section className="bg-gray-1/80 px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <ResponseHeader />
        <ResponseList />

        <p className="text-gray-5 mt-10 text-center text-xs">
          답변을 입력하여 이 공간에 쌓아볼까요?
        </p>
      </div>
    </section>
  );
};
