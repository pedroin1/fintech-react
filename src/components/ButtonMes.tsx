import { ComponentProps } from "react";
import { useVendas } from "../hooks/UseVendas";

export default function ButtonMes({ monthNumber, ...props }: ButtonProps) {
  const { setDataInicio, setDataFinal } = useVendas();

  function getMonthNameBr(monthNumber: number): string {
    const date = new Date();
    date.setMonth(date.getMonth() + monthNumber);
    const name = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
      date
    );
    return name;
  }

  function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  const handleClickSetMes = (month: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + month);
    const firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDateOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    );

    const firstDateFormated = formatDate(firstDateOfMonth);
    const lastDateFormated = formatDate(lastDateOfMonth);

    setDataInicio(firstDateFormated);
    setDataFinal(lastDateFormated);
  };

  return (
    <button
      onClick={() => handleClickSetMes(monthNumber)}
      className="px-10 py-6 border-none outline-none bg-color_3 capitalize font-bold rounded-2xl
        hover:bg-color_2 hover:text-color_4 transition-colors"
      {...props}
    >
      {getMonthNameBr(monthNumber)}
    </button>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  monthNumber: number;
}
