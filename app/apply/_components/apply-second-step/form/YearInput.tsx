interface YearInputProps {
  value: string;
  onChange: (v: string) => void;
}

export const YearInput = ({ value, onChange }: YearInputProps) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="numeric"
        placeholder="1995"
        className="w-full rounded-2xl bg-white/5 px-4 py-4 text-white transition outline-none focus:bg-white/10"
      />

      <span className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-gray-400">
        년생
      </span>
    </div>
  );
};
