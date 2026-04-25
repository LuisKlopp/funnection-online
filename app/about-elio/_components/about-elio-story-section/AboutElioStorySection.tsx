import { SectionHeading } from "../common/SectionHeading";
import { StoryParagraphBlock } from "./StoryParagraphBlock";

const STORY_BLOCKS = [
  [
    "저는 오랫동안 사람들과 잘 어울리지 못했어요.",
    "모임에 가도 표면적인 대화만 하다 집에 오는 날이 많았고,",
    '"이 사람이 어떤 사람인지" 알기도 전에 헤어지는 게 아쉬웠습니다.',
  ],
  [
    "그러다 어느 날, 한 모임에서 누군가 던진 질문 하나가 분위기를 완전히 바꿔놓는 걸 경험했어요.",
    "처음 만난 사람들이 갑자기 진짜 이야기를 꺼내기 시작했고,",
    "저도 모르게 제 이야기를 하고 있었습니다.",
  ],
] as const;

export const AboutElioStorySection = () => {
  return (
    <section className="bg-lightNavy smd:px-8 smd:py-18 px-4 py-8">
      <div className="mx-auto max-w-175">
        <div className="mdl:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] mdl:gap-14 grid gap-10">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Why I Started"
              title={
                <>
                  왜 사람을 연결하는 일에
                  <br />
                  관심을 갖게 됐는지
                </>
              }
            />
          </div>

          <div className="min-w-0">
            <div className="space-y-8">
              {STORY_BLOCKS.map((paragraphs, index) => (
                <StoryParagraphBlock
                  key={index}
                  paragraphs={paragraphs}
                  withDivider={index > 0}
                />
              ))}
            </div>

            <div className="border-primaryNavy/14 smd:pl-6 mt-10 border-l-4 pl-5">
              <p className="text-gray-8 smd:text-[20px] smd:leading-[1.45] text-[18px] leading-normal font-semibold break-keep">
                "좋은 질문을 설계하면,
                <br />
                누구든 연결될 수 있겠다."
              </p>
              <p className="text-gray-6 smd:text-[16px] smd:leading-6.5 mt-4 text-[15px] leading-6 break-keep">
                퍼넥션은 그 생각에서 시작됐습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
