interface TitleBadgeProps {
  title: string;
}

export const TitleBadge = ({ title }: TitleBadgeProps) => {
  return (
    <div className="text-primaryNavy box-shadow-1 mx-auto mb-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
      <span className="bg-primaryNavy h-1.5 w-1.5 animate-pulse rounded-full" />

      <span className="smd:text-sm text-xs font-normal">{title}</span>
    </div>
  );
};
