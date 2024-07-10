import ButtonMes from "./ButtonMes";

export default function MonthPicker() {
  const monthArray: number[] = [-3, -2, -1, 0, +1, +2, +3];

  return (
    <div className="flex m-default gap-default justify-center">
      {monthArray.map((month, index) => (
        <ButtonMes key={index} monthNumber={month} />
      ))}
    </div>
  );
}

interface Props {
  monthName: string;
}
