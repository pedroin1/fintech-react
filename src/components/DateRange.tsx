import InputComponent from "./Input";
import { useVendas } from "../hooks/UseVendas";

export default function DateRange() {
  const { dataInicio, setDataInicio, dataFinal, setDataFinal } = useVendas();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-default p-default m-default rounded-2xl bg-white medium:flex-col"
    >
      <InputComponent
        label="Data Inicio"
        type="date"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
      />
      <InputComponent
        label="Data Final"
        type="date"
        value={dataFinal}
        onChange={(e) => setDataFinal(e.target.value)}
      />
    </form>
  );
}
