interface PhoneNumberInputProps {
  value: string;
  onChange: (v: string) => void;
}

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;

  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
    7,
    11
  )}`;
};

export const PhoneNumberInput = ({
  value,
  onChange,
}: PhoneNumberInputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(formatPhone(e.target.value))}
      inputMode="numeric"
      placeholder="010-1234-5678"
      className="w-full rounded-2xl bg-white/5 px-4 py-4 text-white transition outline-none focus:bg-white/10"
    />
  );
};
