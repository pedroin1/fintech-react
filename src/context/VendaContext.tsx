import { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import useFetch from "../hooks/UseFetch";
import { Ivenda } from "../type/Types";

type IContext = {
  data: Ivenda[] | null;
  loading: boolean;
  error: any;
  dataInicio: string;
  setDataInicio: React.Dispatch<React.SetStateAction<string>>;
  dataFinal: string;
  setDataFinal: React.Dispatch<React.SetStateAction<string>>;
};

export const VendaContext = createContext<IContext | null>(null);

function getDate(minusDayys: number) {
  const date = new Date();
  date.setDate(date.getDate() - minusDayys);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}

export const VendaContextProdiver = ({ children }: PropsWithChildren) => {
  const [dataInicio, setDataInicio] = useState<string>(getDate(30)); //30 dias atras
  const [dataFinal, setDataFinal] = useState<string>(getDate(0)); //data atual

  const { data, loading, error } = useFetch<Ivenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${dataInicio}&final=${dataFinal}`
  );

  return (
    <VendaContext.Provider
      value={{
        data,
        loading,
        error,
        dataInicio,
        setDataInicio,
        dataFinal,
        setDataFinal,
      }}
    >
      {children}
    </VendaContext.Provider>
  );
};
