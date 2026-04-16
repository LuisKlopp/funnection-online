export type RefundTone = "blue" | "red" | "gray";

export type RefundIconName =
  | "shield"
  | "calendar"
  | "users"
  | "x-circle"
  | "coins"
  | "message"
  | "user"
  | "wallet"
  | "bank"
  | "clock"
  | "alert"
  | "file"
  | "search"
  | "card"
  | "info"
  | "arrow"
  | "check";

export interface QuickSummaryCardItem {
  icon: RefundIconName;
  title: string;
  description: string;
  chip: string;
  tone: Exclude<RefundTone, "gray">;
}

export interface ComparisonItem {
  icon: RefundIconName;
  text: string;
}

export interface TimelineStep {
  icon: RefundIconName;
  title: string;
  subtitle: string;
  caption: string;
  tone: "blue" | "amber" | "red";
}

export type PolicyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "highlight-list";
      title: string;
      tone: Exclude<RefundTone, "gray">;
      items: string[];
    }
  | {
      type: "banner";
      icon: RefundIconName;
      text: string;
    }
  | {
      type: "icon-grid";
      title: string;
      tone: "blue";
      items: Array<{
        icon: RefundIconName;
        label: string;
      }>;
    }
  | {
      type: "info-grid";
      items: Array<{
        icon: RefundIconName;
        title: string;
        description: string;
      }>;
    }
  | {
      type: "number-list";
      tone: RefundTone;
      items: string[];
    };

export interface PolicyArticle {
  id: string;
  title: string;
  blocks: PolicyBlock[];
}

export interface ApplyStep {
  icon: RefundIconName;
  title: string;
  description: string;
}

export const quickSummaryCards: QuickSummaryCardItem[] = [
  {
    icon: "calendar",
    title: "모임 시작 4일 전까지 취소",
    description:
      "모임 시작일 기준 4일 전까지 취소 요청 시 결제 금액 전액을 환불해드립니다.",
    chip: "전액 환불",
    tone: "blue",
  },
  {
    icon: "users",
    title: "운영자 사정으로 모임 취소",
    description:
      "운영자 사정 또는 최소 인원 미달로 모임이 취소될 경우 전액 환불됩니다.",
    chip: "전액 환불",
    tone: "blue",
  },
  {
    icon: "x-circle",
    title: "4일 이내 취소 및 노쇼",
    description:
      "모임 시작 4일 이내 취소 요청 또는 사전 통보 없이 불참한 경우 환불이 불가합니다.",
    chip: "환불 불가",
    tone: "red",
  },
];

export const refundableItems: ComparisonItem[] = [
  { icon: "calendar", text: "모임 시작 4일 전까지 취소" },
  { icon: "users", text: "운영자 사정으로 모임 취소" },
  { icon: "coins", text: "결제 오류 / 중복 입금" },
  { icon: "check", text: "최소 인원 미달로 모임 취소" },
];

export const nonRefundableItems: ComparisonItem[] = [
  { icon: "x-circle", text: "모임 시작 4일 이내 취소" },
  { icon: "alert", text: "사전 통보 없이 불참 (노쇼)" },
  { icon: "file", text: "허위 정보 또는 악의적 요청" },
];

export const refundTimeline: TimelineStep[] = [
  {
    icon: "check",
    title: "전액 환불 가능",
    subtitle: "모임 시작 4일 전",
    caption: "취소 요청 시",
    tone: "blue",
  },
  {
    icon: "clock",
    title: "기준일",
    subtitle: "D-4",
    caption: "모임 시작 4일 전",
    tone: "amber",
  },
  {
    icon: "x-circle",
    title: "환불 불가",
    subtitle: "4일 이내 ~ 당일",
    caption: "취소 요청 시",
    tone: "red",
  },
];

export const policyArticles: PolicyArticle[] = [
  {
    id: "article-purpose",
    title: "제1조 (목적)",
    blocks: [
      {
        type: "paragraph",
        text: "본 정책은 퍼넥션 온라인(이하 “서비스”)에서 제공하는 오프라인 모임 및 관련 서비스의 결제 및 환불 조건을 명확히 규정하여, 이용자의 권익을 보호하고 원활한 모임 운영을 위한 기준을 정하는 것을 목적으로 합니다.",
      },
    ],
  },
  {
    id: "article-principle",
    title: "제2조 (환불 원칙)",
    blocks: [
      {
        type: "paragraph",
        text: "퍼넥션 모임은 소규모 인원 기반으로 운영되는 서비스 특성상, 예약 확정 이후에는 아래 기준에 따라 환불이 진행됩니다.",
      },
      {
        type: "highlight-list",
        title: "환불 가능한 경우",
        tone: "blue",
        items: [
          "모임 시작 4일 전까지 취소 요청 시: 전액 환불",
          "운영자의 사정으로 모임이 취소된 경우: 전액 환불",
          "결제 오류, 중복 입금 등 시스템 또는 운영상의 과실이 확인된 경우",
        ],
      },
      {
        type: "highlight-list",
        title: "환불이 제한되는 경우",
        tone: "red",
        items: [
          "모임 시작 4일 이내 취소 요청 시 환불 불가",
          "사전 통보 없이 불참(노쇼)한 경우",
        ],
      },
    ],
  },
  {
    id: "article-request",
    title: "제3조 (환불 신청 절차)",
    blocks: [
      {
        type: "paragraph",
        text: "환불 요청은 아래 방법을 통해 신청할 수 있습니다.",
      },
      {
        type: "banner",
        icon: "message",
        text: "서비스 내 문의 채널 또는 안내된 연락 수단(카카오톡, 문자 등)",
      },
      {
        type: "icon-grid",
        title: "신청 시 아래 정보를 함께 전달해주세요.",
        tone: "blue",
        items: [
          { icon: "user", label: "신청자 이름" },
          { icon: "calendar", label: "신청 모임 정보" },
          { icon: "wallet", label: "입금 정보" },
        ],
      },
      {
        type: "paragraph",
        text: "회사는 요청 내용을 확인 후 환불 가능 여부를 안내합니다.",
      },
    ],
  },
  {
    id: "article-method",
    title: "제4조 (환불 방법 및 처리 기한)",
    blocks: [
      {
        type: "paragraph",
        text: "퍼넥션 서비스는 현재 계좌이체 방식으로 결제가 이루어집니다.",
      },
      {
        type: "info-grid",
        items: [
          {
            icon: "bank",
            title: "계좌 송금",
            description: "이용자가 제공한 계좌로 환불 금액이 송금됩니다.",
          },
          {
            icon: "clock",
            title: "영업일 1~3일",
            description:
              "환불 처리까지 영업일 기준 1~3일이 소요될 수 있습니다.",
          },
          {
            icon: "alert",
            title: "계좌 오류 시 지연",
            description:
              "입력한 계좌 정보가 부정확할 경우 환불이 지연될 수 있습니다.",
          },
        ],
      },
    ],
  },
  {
    id: "article-restriction",
    title: "제5조 (환불 불가 사유)",
    blocks: [
      {
        type: "paragraph",
        text: "다음 각 호에 해당하는 경우 환불이 불가합니다.",
      },
      {
        type: "number-list",
        tone: "red",
        items: [
          "모임 시작 4일 이내 취소 요청",
          "사전 통보 없이 모임에 참여하지 않은 경우",
          "허위 정보 또는 악의적인 환불 요청이 확인된 경우",
        ],
      },
    ],
  },
  {
    id: "article-etc",
    title: "제6조 (기타사항)",
    blocks: [
      {
        type: "number-list",
        tone: "gray",
        items: [
          "퍼넥션 모임은 최소 인원 미달 또는 기타 운영 사정에 따라 취소될 수 있으며, 이 경우 전액 환불됩니다.",
          "본 환불 정책은 서비스 운영 상황에 따라 변경될 수 있으며, 변경 시 사전 안내 후 적용됩니다.",
          "본 정책에 명시되지 않은 사항은 일반적인 상거래 관례 및 관련 법령을 따릅니다.",
        ],
      },
    ],
  },
];

export const applySteps: ApplyStep[] = [
  {
    icon: "message",
    title: "문의 채널로 연락",
    description:
      "카카오톡, 문자 등 안내된 연락 수단 또는 서비스 내 문의 채널을 통해 환불 요청을 보내주세요.",
  },
  {
    icon: "file",
    title: "필요 정보 전달",
    description:
      "신청자 이름, 참여 예정 모임 정보, 입금 정보를 함께 전달해주세요.",
  },
  {
    icon: "search",
    title: "운영자 확인",
    description:
      "운영자가 요청 내용을 검토하고 환불 가능 여부를 안내해드립니다.",
  },
  {
    icon: "card",
    title: "계좌 환불 처리",
    description:
      "환불 확정 후 제공하신 계좌로 영업일 기준 1~3일 이내에 송금됩니다.",
  },
];

export const tableOfContents = policyArticles.map((article) => ({
  id: article.id,
  title: article.title,
}));
