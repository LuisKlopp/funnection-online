import { SectionHeading } from "../common/SectionHeading";
import { StoryParagraphBlock } from "./StoryParagraphBlock";

const STORY_BLOCKS = [
  [
    "개인적으로 힘든 시기일 때 집에만 있기보다 새로운 사람들을 만나보자는 생각으로 독서모임에 참여했습니다. 그곳에서 만난 분들의 긍정적인 에너지가 제 삶을 조금씩 채워주는 느낌을 받았고 그 때 깨달았습니다.",
  ],
  [
    "나처럼, 새로운 만남을 통해 삶이 더 풍요로워지는 사람들이 분명히 있을 것이라는 걸요.",
  ],
  [
    "그래서 너무 무겁지도, 너무 가볍지도 않은 적당한 깊이의 질문들로 자연스럽게 연결되는 모임을 만들었습니다.",
  ],
  [
    "혼자서 즐길 수 있는 취미가 너무 많은 현대사회지만 결국 삶을 다채롭게 만드는 건 새로운 사람과의 한 번의 대화일지도 모릅니다. 퍼넥션은 어색함 없이, 부담 없이, 하지만 가볍지만은 않게 연결되는 경험을 만듭니다. 만약 당신도 새로운 연결이 필요한 시기라면, 퍼넥션에서 그 시작을 만들어보시길 추천드립니다.",
  ],
] as const;

export const AboutElioStorySection = () => {
  return (
    <section className="bg-lightNavy smd:px-8 smd:py-18 px-4 py-8">
      <div className="mx-auto max-w-175">
        <div className="grid gap-10">
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
            <div className="space-y-4">
              {STORY_BLOCKS.map((paragraphs, index) => (
                <StoryParagraphBlock key={index} paragraphs={paragraphs} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
