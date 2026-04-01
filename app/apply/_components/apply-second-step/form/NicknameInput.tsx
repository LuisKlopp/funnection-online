interface NicknameInputProps {
  value: string;
  onChange: (v: string) => void;
}

export const NicknameInput = ({ value, onChange }: NicknameInputProps) => {
  const handleChange = (v: string) => {
    const filtered = v.replace(/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
    const limited = filtered.slice(0, 10);
    onChange(limited);
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={8}
        placeholder="닉네임 입력"
        className="smd:text-base w-full rounded-2xl bg-white/5 px-4 py-4 text-[15px] text-white transition outline-none focus:bg-white/10"
      />
    </div>
  );
};
