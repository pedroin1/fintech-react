import ButtonMes from "./ButtonMes";

export default function MonthPicker() {
  const monthArray: number[] = [-3, -2, -1, 0, +1, +2, +3];

  return (
    <div className="flex mx-default gap-default justify-center medium:flex-col medium:gap-1 medium:my-1">
      {monthArray.map((month, index) => (
        <ButtonMes key={index} monthNumber={month} />
      ))}
    </div>
  );
}

interface Props {
  monthName: string;
}
