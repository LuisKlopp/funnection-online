interface Props {
  date: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export const CalendarDay = ({ date, selectedDate, onSelectDate }: Props) => {
  const day = date.getDate();

  const isSelected =
    selectedDate && selectedDate.toDateString() === date.toDateString();

  return (
    <button
      onClick={() => onSelectDate(date)}
      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
        isSelected
          ? "bg-indigo-400 text-white"
          : "text-gray-400 hover:bg-indigo-50"
      }`}
    >
      {day}
    </button>
  );
};
