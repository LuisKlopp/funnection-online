import { TitleBadge } from "./TitleBadge";

interface SectionHeaderProps {
  titleBadge: string;
  title: string;
  description: string;
  secondDescription?: string;
  id?: string;
}

export const SectionHeader = ({
  titleBadge,
  title,
  description,
  secondDescription,
  id,
}: SectionHeaderProps) => {
  return (
    <div className="mb-12 text-center" id={id}>
      <TitleBadge title={titleBadge} />

      <h2 className="text-gray-9 text-2xl font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-1 text-sm text-gray-400">{description}</p>
      <p className="text-primaryNavy mt-2 text-[13px] italic">
        {secondDescription}
      </p>
    </div>
  );
};
