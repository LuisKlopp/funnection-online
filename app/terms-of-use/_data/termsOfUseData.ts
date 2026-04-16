export type TermsTone = "blue" | "red" | "gray";

export interface TermsSummaryItem {
  title: string;
  description: string;
  chip: string;
  tone: Exclude<TermsTone, "gray">;
}

export type TermsArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "number-list";
      tone: TermsTone;
      items: string[];
    }
  | {
      type: "callout";
      title: string;
      tone: TermsTone;
      text: string;
    };

export interface TermsArticle {
  id: string;
  title: string;
  blocks: TermsArticleBlock[];
}

export const termsSummaryItems: TermsSummaryItem[] = [
  {
    title: "질문과 답변 중심의 참여",
    description:
      "이용자는 질문 기반 콘텐츠에 참여하고 답변을 작성하며, 다른 이용자의 답변을 열람하고 반응할 수 있습니다.",
    chip: "콘텐츠 이용",
    tone: "blue",
  },
  {
    title: "건강한 커뮤니티 이용",
    description:
      "비방, 혐오 표현, 개인정보 무단 공유 등 다른 이용자에게 불쾌감이나 피해를 주는 행위는 제한됩니다.",
    chip: "이용자 의무",
    tone: "red",
  },
  {
    title: "모임 참여와 환불 기준",
    description:
      "오프라인 모임은 계좌이체로 결제되며, 환불 세부 기준은 별도의 환불 정책에 따라 운영됩니다.",
    chip: "모임/결제",
    tone: "blue",
  },
];

export const termsArticles: TermsArticle[] = [
  {
    id: "article-purpose",
    title: "제1조 (목적)",
    blocks: [
      {
        type: "paragraph",
        text: "본 약관은 퍼넥션 온라인(이하 “서비스”)이 제공하는 온라인 콘텐츠 및 오프라인 모임 관련 서비스의 이용 조건과 절차, 이용자와 서비스 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.",
      },
    ],
  },
  {
    id: "article-service",
    title: "제2조 (서비스의 내용)",
    blocks: [
      {
        type: "paragraph",
        text: "퍼넥션 온라인은 다음과 같은 서비스를 제공합니다.",
      },
      {
        type: "number-list",
        tone: "blue",
        items: [
          "질문 기반 콘텐츠 참여 및 답변 작성",
          "다른 이용자의 답변 열람 및 상호 반응 기능",
          "오프라인 모임 정보 제공 및 참여 신청",
          "기타 서비스 운영자가 제공하는 부가 서비스",
        ],
      },
      {
        type: "callout",
        tone: "gray",
        title: "서비스 변경 안내",
        text: "서비스의 내용은 운영 상황에 따라 변경될 수 있습니다.",
      },
    ],
  },
  {
    id: "article-duty",
    title: "제3조 (이용자의 의무)",
    blocks: [
      {
        type: "paragraph",
        text: "이용자는 서비스 이용 시 다음 행위를 해서는 안 됩니다.",
      },
      {
        type: "number-list",
        tone: "red",
        items: [
          "타인을 비방하거나 불쾌감을 주는 내용 작성",
          "욕설, 혐오 표현, 성적·부적절한 콘텐츠 작성",
          "타인의 개인정보를 무단으로 게시하거나 공유하는 행위",
          "허위 정보 입력 또는 서비스 운영을 방해하는 행위",
          "기타 사회 통념상 부적절하다고 판단되는 행위",
        ],
      },
    ],
  },
  {
    id: "article-content",
    title: "제4조 (콘텐츠의 책임 및 이용)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "이용자가 작성한 모든 답변 및 콘텐츠에 대한 책임은 해당 이용자 본인에게 있습니다.",
          "서비스는 이용자가 작성한 콘텐츠를 익명 형태로 서비스 내에 공개할 수 있습니다.",
          "서비스 운영자는 부적절한 콘텐츠에 대해 사전 통보 없이 수정 또는 삭제할 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: "article-gathering",
    title: "제5조 (모임 참여 및 책임)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "서비스는 이용자 간의 자연스러운 소통을 기반으로 한 모임을 제공합니다.",
          "모임 내에서 발생하는 개인 간의 문제에 대해 서비스는 직접적인 책임을 지지 않습니다.",
          "이용자는 타인에게 불쾌감이나 피해를 주는 행위를 해서는 안 됩니다.",
        ],
      },
    ],
  },
  {
    id: "article-payment",
    title: "제6조 (결제 및 환불)",
    blocks: [
      {
        type: "number-list",
        tone: "blue",
        items: [
          "서비스 내 모임 참여는 계좌이체 방식으로 결제가 이루어집니다.",
          "환불에 관한 사항은 별도의 “환불 정책”을 따릅니다.",
        ],
      },
    ],
  },
  {
    id: "article-change",
    title: "제7조 (서비스 제공의 변경 및 중단)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "서비스는 운영상의 필요에 따라 일부 또는 전체 서비스를 변경하거나 중단할 수 있습니다.",
          "이 경우 사전에 공지하는 것을 원칙으로 합니다.",
        ],
      },
    ],
  },
  {
    id: "article-disclaimer",
    title: "제8조 (면책조항)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "서비스는 천재지변, 불가항력적인 사유 또는 이용자의 귀책 사유로 발생한 문제에 대해 책임을 지지 않습니다.",
          "이용자 간의 분쟁에 대해서는 개입하지 않으며, 이에 대한 책임을 지지 않습니다.",
        ],
      },
    ],
  },
  {
    id: "article-amendment",
    title: "제9조 (약관의 변경)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "본 약관은 서비스 운영 상황에 따라 변경될 수 있습니다.",
          "변경 시 서비스 내 공지를 통해 안내하며, 변경된 약관은 공지 시점부터 효력이 발생합니다.",
        ],
      },
    ],
  },
];

export const termsNavigationItems = termsArticles.map((article) => ({
  id: article.id,
  title: article.title,
}));
