import { Info } from "lucide-react";

export const TermsNoticeSection = () => {
  return (
    <section className="bg-lightNavy px-6 pt-4 pb-24">
      <div className="mx-auto max-w-280">
        <div className="border-gray-2 rounded-3xl border bg-white px-5 py-5 shadow-[0_12px_36px_rgba(110,129,167,0.12)] smd:px-7">
          <div className="flex items-start gap-4">
            <div className="bg-primaryNavy/8 text-primaryNavy flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-8 text-lg font-semibold">
                이용 전 확인해주세요
              </p>
              <p className="text-gray-5 mt-2 text-sm leading-7 smd:text-base smd:leading-8">
                서비스 이용 중 작성한 콘텐츠와 모임 참여 과정에서의 책임 범위는
                각 조항에 따라 적용됩니다. 결제와 환불이 포함된 모임 참여의 경우
                별도 환불 정책을 함께 확인해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
