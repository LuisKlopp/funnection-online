export type PrivacyTone = "blue" | "red" | "gray";

export interface PrivacySummaryItem {
  title: string;
  description: string;
  chip: string;
  tone: Exclude<PrivacyTone, "gray">;
}

export type PrivacyArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "number-list";
      tone: PrivacyTone;
      items: string[];
    }
  | {
      type: "callout";
      title: string;
      tone: PrivacyTone;
      text: string;
    };

export interface PrivacyArticle {
  id: string;
  title: string;
  blocks: PrivacyArticleBlock[];
}

export const privacySummaryItems: PrivacySummaryItem[] = [
  {
    title: "모임 신청 정보",
    description:
      "닉네임, 전화번호, 성별, 출생연도, 자기소개, 신청 모임 정보는 모임 신청 접수와 안내를 위해 처리됩니다.",
    chip: "신청 정보",
    tone: "blue",
  },
  {
    title: "질문 답변 참여 정보",
    description:
      "연령대, 성별, 닉네임(선택), 답변 내용, 익명 식별값은 질문 참여, 내 답변 확인, 수정 기능을 위해 사용됩니다.",
    chip: "답변 정보",
    tone: "blue",
  },
  {
    title: "브라우저 저장 정보",
    description:
      "일부 정보는 브라우저의 localStorage 및 sessionStorage에 저장되어 재입력 감소와 이용 상태 유지에 활용됩니다.",
    chip: "저장 정보",
    tone: "red",
  },
];

export const privacyArticles: PrivacyArticle[] = [
  {
    id: "article-purpose",
    title: "제1조 (개인정보 처리 목적)",
    blocks: [
      {
        type: "paragraph",
        text: "퍼넥션 온라인은 서비스 제공에 필요한 최소한의 개인정보만 처리하며, 다음 목적 범위 내에서만 개인정보를 이용합니다.",
      },
      {
        type: "number-list",
        tone: "blue",
        items: [
          "질문 기반 콘텐츠 참여, 답변 등록, 내 답변 조회 및 수정",
          "다른 이용자 답변 열람과 상호 반응 기능 제공",
          "오프라인 모임 신청 접수, 신청자 확인, 일정 안내 및 문의 응대",
          "서비스 운영, 중복 제출 방지, 이용 상태 유지 및 기본 기능 제공",
        ],
      },
    ],
  },
  {
    id: "article-items",
    title: "제2조 (처리하는 개인정보 항목)",
    blocks: [
      {
        type: "callout",
        title: "질문 답변 참여 시",
        tone: "blue",
        text: "연령대, 성별, 닉네임(선택), 답변 내용, 익명 식별값(anon_id)을 처리합니다.",
      },
      {
        type: "callout",
        title: "모임 신청 시",
        tone: "blue",
        text: "닉네임, 전화번호, 성별, 출생연도, 자기소개, 신청한 모임 정보(eventId)를 처리합니다.",
      },
      {
        type: "callout",
        title: "서비스 이용 과정에서 브라우저에 저장되는 정보",
        tone: "gray",
        text: "anon_id, userInfo, answered_map은 localStorage에 저장되며, home-visited와 applyCompleteEventType은 sessionStorage에 저장됩니다.",
      },
    ],
  },
  {
    id: "article-retention",
    title: "제3조 (개인정보의 처리 및 보유 기간)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "모임 신청 정보는 신청 접수, 모임 운영, 안내 및 사후 응대를 위한 목적 달성 시까지 보유·이용합니다.",
          "질문 답변 참여 정보는 답변 등록, 내 답변 확인 및 수정 등 서비스 운영 목적이 달성될 때까지 보유·이용합니다.",
          "브라우저 저장 정보(localStorage, sessionStorage)는 사용자의 브라우저에 저장되며, 사용자가 직접 삭제하거나 세션이 종료될 때까지 유지될 수 있습니다.",
          "관계 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 법령이 정한 기간 동안 별도 보관할 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: "article-third-party",
    title: "제4조 (개인정보의 제3자 제공)",
    blocks: [
      {
        type: "paragraph",
        text: "퍼넥션 온라인은 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.",
      },
      {
        type: "callout",
        title: "예외 사항",
        tone: "gray",
        text: "다만, 법령에 특별한 규정이 있거나 수사기관 등 관계 법령에 따른 적법한 요청이 있는 경우에는 예외적으로 제공될 수 있습니다.",
      },
    ],
  },
  {
    id: "article-consignment",
    title: "제5조 (개인정보 처리의 위탁)",
    blocks: [
      {
        type: "paragraph",
        text: "현재 퍼넥션 온라인은 개인정보 처리를 외부 업체에 위탁하고 있지 않습니다.",
      },
      {
        type: "callout",
        title: "추후 변경 시",
        tone: "gray",
        text: "개인정보 처리 업무를 위탁하게 되는 경우, 수탁자와 위탁 업무 내용을 본 개인정보처리방침을 통해 지체 없이 안내하겠습니다.",
      },
    ],
  },
  {
    id: "article-destruction",
    title: "제6조 (개인정보의 파기)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "개인정보 보유기간이 경과하거나 처리 목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.",
          "전자적 파일 형태의 정보는 복구 또는 재생이 불가능한 방법으로 삭제합니다.",
          "종이 문서에 기록된 개인정보는 분쇄하거나 소각하는 방식으로 파기합니다.",
        ],
      },
    ],
  },
  {
    id: "article-rights",
    title: "제7조 (이용자의 권리와 행사 방법)",
    blocks: [
      {
        type: "number-list",
        tone: "blue",
        items: [
          "이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.",
          "브라우저에 저장된 localStorage 및 sessionStorage 정보는 이용자가 직접 삭제할 수 있습니다.",
          "개인정보 관련 문의나 권리 행사는 아래 연락처를 통해 접수할 수 있으며, 서비스는 지체 없이 검토 후 안내합니다.",
        ],
      },
    ],
  },
  {
    id: "article-safety",
    title: "제8조 (개인정보의 안전성 확보 조치)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "개인정보 처리 범위를 서비스 제공에 필요한 최소한으로 제한합니다.",
          "개인정보 접근 권한을 필요한 범위로 제한하고 관리합니다.",
          "개인정보가 포함된 정보의 보호를 위해 기술적·관리적 보호조치를 적용하도록 노력합니다.",
        ],
      },
    ],
  },
  {
    id: "article-contact",
    title: "제9조 (개인정보 보호책임자 및 문의처)",
    blocks: [
      {
        type: "callout",
        title: "개인정보 관련 문의",
        tone: "blue",
        text: "담당자: 엘리오 / 이메일: fbgus333@naver.com / 연락처: 010-9975-5904",
      },
      {
        type: "paragraph",
        text: "개인정보 처리와 관련한 문의, 불만처리, 권리행사 요청은 위 연락처를 통해 접수하실 수 있습니다.",
      },
    ],
  },
  {
    id: "article-change",
    title: "제10조 (개인정보처리방침의 변경)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "본 개인정보처리방침은 법령, 서비스 정책 또는 운영 방식 변경에 따라 수정될 수 있습니다.",
          "중요한 변경이 있는 경우 서비스 내 공지 또는 별도 안내를 통해 변경 내용을 고지합니다.",
          "변경된 개인정보처리방침은 공지한 시행일부터 적용됩니다.",
        ],
      },
    ],
  },
];

export const privacyNavigationItems = privacyArticles.map((article) => ({
  id: article.id,
  title: article.title,
}));
