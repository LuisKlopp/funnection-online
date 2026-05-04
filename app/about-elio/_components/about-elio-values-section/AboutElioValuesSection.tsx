import { SectionHeading } from "../common/SectionHeading";
import { ValueStatement } from "./ValueStatement";

const VALUE_ITEMS = [
  {
    description:
      '형식적인 대화는 사람을 연결하지 못합니다. 퍼넥션의 모든 질문은 "진짜 이야기"가 나올 수 있도록 설계됩니다.',
    number: "01",
    title: "진정성 있는 대화",
  },
  {
    description:
      "말하기 편한 공간이 먼저입니다. 판단받지 않는다는 느낌이 있어야 사람들이 솔직해질 수 있습니다.",
    number: "02",
    title: "안전한 분위기",
  },
  {
    description:
      "모임이 끝나도 기억에 남는 대화, 마음에 남는 사람. 그게 퍼넥션이 만들고 싶은 경험입니다.",
    number: "03",
    title: "연결 이후까지 남는 경험",
  },
] as const;

export const AboutElioValuesSection = () => {
  return (
    <section className="smd:px-8 smd:py-18 bg-white px-4 py-8">
      <div className="mx-auto max-w-175">
        <SectionHeading
          eyebrow="What I Value"
          title="제가 중요하게 생각하는 것들"
          description="보여주기식 모습보다 먼저 신경 쓰는 기준들입니다. 퍼넥션의 질문과 분위기, 운영 방식은 모두 이 세 가지에서 출발합니다."
        />

        <div className="border-primaryNavy/10 bg-lightNavy/55 smd:mt-12 mt-10 overflow-hidden rounded-4xl border">
          {VALUE_ITEMS.map((item, index) => (
            <ValueStatement
              key={item.number}
              {...item}
              isLast={index === VALUE_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
