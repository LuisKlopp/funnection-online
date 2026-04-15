import { TitleBadge } from "./TitleBadge";

interface SectionHeaderProps {
  titleBadge: string;
  title: string;
  description: string;
  secondDescription?: string;
  id?: string;
  isBackground?: boolean;
}

export const SectionHeader = ({
  titleBadge,
  title,
  description,
  secondDescription,
  id,
  isBackground,
}: SectionHeaderProps) => {
  return (
    <div className="mb-4 text-center" id={id}>
      <TitleBadge title={titleBadge} isBackground={isBackground} />

      <h2 className="text-gray-8 smd:text-3xl text-[22px] font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-1 text-sm text-gray-400">{description}</p>
      <p className="text-primaryNavy mt-2 text-[13px] italic">
        {secondDescription}
      </p>
    </div>
  );
};
