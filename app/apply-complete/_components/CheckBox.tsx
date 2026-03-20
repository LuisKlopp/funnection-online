import { SuccessCheckAnimation } from "@/components/ui/icons/SuccessCheckAnimation";

export const CheckBox = () => {
  return (
    <div>
      <SuccessCheckAnimation />
      <div className="mt-4 flex flex-col items-center gap-2">
        <h1 className="smd:text-2xl text-xl font-semibold">
          신청이 완료됐어요!
        </h1>
        <span className="text-gray-4 text-base">
          입금 확인 후 최종 참여가 확정돼요
        </span>
      </div>
    </div>
  );
};
