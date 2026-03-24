export const DescribeBox = () => {
  return (
    <div className="box-shadow-2 mt-8 rounded-2xl border border-blue-200/60 bg-white p-5 text-gray-700">
      <p className="text-base leading-relaxed break-keep">
        <span className="text-primaryNavy font-semibold">
          같은 질문에 모두 답을 하고
        </span>{" "}
        <br className="smd:hidden" />
        그 답변을 함께 확인합니다.
        <br />
        <br />
        <span className="text-primaryNavy font-semibold">
          답변들을 바탕으로
        </span>{" "}
        엘리오의 진행 하에
        <br className="smd:hidden" />
        자연스럽게 대화를 나눕니다.
      </p>
    </div>
  );
};
