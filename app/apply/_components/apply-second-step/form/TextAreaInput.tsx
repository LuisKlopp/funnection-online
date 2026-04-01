interface TextAreaInputProps {
  value: string;
  onChange: (v: string) => void;
  maxLength?: number;
}

export const TextAreaInput = ({
  value,
  onChange,
  maxLength = 100,
}: TextAreaInputProps) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        className="smd:text-base h-40 w-full resize-none rounded-2xl bg-white/5 px-4 py-4 text-[15px] text-white transition outline-none focus:bg-white/10"
        placeholder="자유롭게 작성해주세요"
      />

      <span className="absolute right-4 bottom-3 text-xs text-gray-400">
        {value.length}/{maxLength}
      </span>
    </div>
  );
};
