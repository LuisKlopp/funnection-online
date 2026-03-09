export const AnswerSubmitModal = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/20 backdrop-blur-sm">
      <div className="text-gray-7 flex flex-col items-center gap-4">
        <span className="text-primary-color/60 flex gap-2 text-2xl font-bold">
          <span className="dot dot1">●</span>
          <span className="dot dot2">●</span>
          <span className="dot dot3">●</span>
        </span>
        <span className="text-gray-7 text-[22px] font-semibold">
          조금만 기다려주세요!
        </span>
      </div>
    </div>
  );
};
