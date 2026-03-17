export const QuoteCard = () => {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 px-6 py-8">
      <div className="text-primaryAmber/70 mb-4 text-4xl">“</div>
      <p className="text-base leading-relaxed whitespace-pre-line text-white/80">
        퍼넥션은 정답이 없는 공간이에요.
        {"\n\n"}
        나와 다른 생각, 다른 경험을 가진 사람들과 열린 마음으로 대화를
        나눠보세요.
        {"\n\n"}그 다름이 모임을 더 풍성하게 만들어줍니다.
      </p>
      <div className="text-primaryAmber mt-6 text-right text-sm">
        — 퍼넥션 호스트, 엘리오
      </div>
    </div>
  );
};
