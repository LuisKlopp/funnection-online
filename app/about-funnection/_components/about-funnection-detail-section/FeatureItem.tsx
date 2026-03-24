interface FeatureItemProps {
  text: string;
}

export const FeatureItem = ({ text }: FeatureItemProps) => {
  return (
    <li className="flex items-center gap-4">
      <span className="bg-primaryNavy/10 flex h-8 w-8 items-center justify-center rounded-full">
        <span className="bg-primaryNavy h-4 w-4 rounded-full" />
      </span>
      <span className="smd:text-xl text-base font-semibold text-gray-700">
        {text}
      </span>
    </li>
  );
};
