import { FeatureItem } from "./FeatureItem";

const FEATURES = ["가치관", "연애 스타일", "경험", "현재 고민"];

export const FeatureList = () => {
  return (
    <div className="mt-4 w-full">
      <div className="smd:text-3xl w-full text-center text-2xl font-semibold">
        <span className="text-primaryNavy">퍼넥션</span>에서는
        <span>
          <br className="smd:hidden" />
          어떤 대화를 나눌까요?
        </span>
      </div>
      <div className="px-4">
        <ul className="smd:grid-cols-2 smd:gap-x-10 smd:gap-y-10 mx-auto mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
          {FEATURES.map((item) => (
            <FeatureItem key={item} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
