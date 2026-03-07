interface Props {
  total: number;
  active: number;
  color: string;
}

export const ValueProgress = ({ total, active, color }: Props) => {
  return (
    <div className="mt-8 flex gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-1 flex-1 rounded"
          style={{
            background: i === active ? color : "#D1D5DB",
          }}
        />
      ))}
    </div>
  );
};
