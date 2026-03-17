import { cn } from "@/lib/utils";

type BottomCTAProps = {
  disabled?: boolean;
  text: string;
  onClick: () => void;
};

export const BottomCtaButton = ({
  disabled,
  text,
  onClick,
}: BottomCTAProps) => {
  return (
    <div className="floating-box mdl:mx-auto mdl:w-1/3 fixed right-0 bottom-0 left-0 z-20 p-4">
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "w-full rounded-xl py-3 text-base font-semibold transition-all duration-300",
          disabled
            ? "bg-gray-5 text-white/40"
            : "bg-linear-to-r from-[#ffaa17] via-[#dc9f05] to-[#f1c902] text-white"
        )}
      >
        {text}
      </button>
    </div>
  );
};
