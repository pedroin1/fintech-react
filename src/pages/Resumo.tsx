import { FolderClock } from "lucide-react";
import ChartVenda from "../components/ChartVenda";
import ListVendas from "../components/ListVendas";
import { useVendas } from "../hooks/UseVendas";
import { formatNumberToBrCurrency } from "../util/NumberUtils";

export default function ResumoPage() {
  const { data } = useVendas();

  return (
    <section className="max-h-fit min-h-screen mx-default">
      <div className="flex gap-default flex-wrap">
        <div className="bg-white p-default rounded-2xl flex-1">
          <h2 className="text-3xl font-semibold text-color_2 mb-2">Vendas: </h2>
          <span className="font-bold text-3xl">
            {formatNumberToBrCurrency(
              data
                ?.filter((item) => item.status !== "falha")
                .reduce((acc, { preco }) => acc + preco, 0) || 0
            )}
          </span>
        </div>
        <div className="bg-white p-default rounded-2xl flex-1">
          <h2 className="text-3xl font-semibold text-color_2 mb-2">
            Recebidos:{" "}
          </h2>
          <span className="font-bold text-3xl">
            {formatNumberToBrCurrency(
              data
                ?.filter((item) => item.status === "pago")
                .reduce((acc, { preco }) => acc + preco, 0) || 0
            )}
          </span>
        </div>
        <div className="bg-white p-default rounded-2xl flex-1">
          <h2 className="text-3xl font-semibold text-color_2 mb-2">
            Processando:{" "}
          </h2>
          <span className="font-bold text-3xl">
            {formatNumberToBrCurrency(
              data
                ?.filter((item) => item.status === "processando")
                .reduce((acc, { preco }) => acc + preco, 0) || 0
            )}
          </span>
        </div>
      </div>
      <div className="mt-4 mb-4 p-default rounded-2xl bg-white">
        {data && <ChartVenda dataVendas={data} />}
      </div>
      <div className="flex items-center gap-2 mt-4 mb-4 p-default rounded-2xl bg-color_3 text-color-2">
        <h1 className="text-2xl font-bold">Histórico de vendas</h1>
        <FolderClock />
      </div>
      <ListVendas vendas={data} />
    </section>
  );
}
