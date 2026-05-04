import {
  CircleHelp,
  CodeXml,
  FileCheck2,
  RefreshCcw,
  UsersRound,
} from "lucide-react";

import { SectionHeading } from "../common/SectionHeading";
import { RoleItem } from "./RoleItem";

const ROLE_ITEMS = [
  {
    description: "매 회차마다 모임장이 직접 떠올리는 질문들이 추가됩니다.",
    icon: CircleHelp,
    title: "질문 기획",
  },
  {
    description:
      "모든 분들이 어색하지 않게, 자연스럽게 연결될 수 있도록 직접 모임을 이끕니다.",
    icon: UsersRound,
    title: "모임 진행",
  },
  {
    description: "신청서 검토부터 안내 메시지까지 직접 처리합니다.",
    icon: FileCheck2,
    title: "신청 관리",
  },
  {
    description: "지금 보고 계신 이 사이트도 직접 만들었습니다.",
    icon: CodeXml,
    title: "웹사이트 제작",
  },
  {
    description: "매 회차 피드백을 반영해 계속 다듬고 있습니다.",
    icon: RefreshCcw,
    title: "운영 개선",
  },
] as const;

export const AboutElioRolesSection = () => {
  return (
    <section className="bg-lightNavy smd:px-8 smd:py-18 px-4 py-8">
      <div className="mx-auto max-w-175">
        <div className="mdl:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] mdl:gap-14 grid gap-8">
          <SectionHeading
            eyebrow="What I Actually Do"
            title={<>혼자서 합니다</>}
            description="팀이 없습니다. 외주도 없습니다. 기획부터 운영까지 전부 혼자입니다. 그래서 더 세심하게 볼 수 있고, 유연합니다."
          />

          <div className="overflow-hidden rounded-4xl bg-white shadow-[0_24px_60px_rgba(53,112,233,0.1)]">
            {ROLE_ITEMS.map((item, index) => (
              <RoleItem
                key={item.title}
                {...item}
                isLast={index === ROLE_ITEMS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
