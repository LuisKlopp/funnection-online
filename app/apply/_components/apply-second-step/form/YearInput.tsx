interface YearInputProps {
  value: string;
  onChange: (v: string) => void;
}

export const YearInput = ({ value, onChange }: YearInputProps) => {
  const handleChange = (v: string) => {
    const onlyNumbers = v.replace(/[^0-9]/g, "");
    const limited = onlyNumbers.slice(0, 4);
    onChange(limited);
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        inputMode="numeric"
        maxLength={4}
        placeholder="1996"
        className="smd:text-base w-full rounded-2xl bg-white/5 px-4 py-4 text-[15px] text-white transition outline-none focus:bg-white/10"
      />

      <span className="absolute top-1/2 right-4 -translate-y-1/2 text-sm text-gray-400">
        년생
      </span>
    </div>
  );
};
