import { ShieldAlert } from "lucide-react";

export const PrivacyNoticeSection = () => {
  return (
    <section className="bg-lightNavy px-6 pt-4 pb-24">
      <div className="mx-auto max-w-280">
        <div className="border-gray-2 smd:px-7 rounded-3xl border bg-white px-5 py-5 shadow-[0_12px_36px_rgba(110,129,167,0.12)]">
          <div className="flex items-start gap-4">
            <div className="bg-primaryNavy/8 text-primaryNavy flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-8 text-lg font-semibold">
                문의 및 권리행사 안내
              </p>
              <p className="text-gray-5 smd:text-base mt-2 text-sm leading-6">
                개인정보 열람, 정정, 삭제, 처리정지 요청 또는 처리방침 관련
                문의는 본 방침에 기재된 연락처를 통해 접수하실 수 있습니다.
                브라우저 저장 정보는 이용자가 직접 삭제할 수 있으며, 서비스 관련
                문의는 운영자에게 연락해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
