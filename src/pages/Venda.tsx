import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { IVenda, IVendaDetail } from "../type/types";
import { formatNumberToBrCurrency } from "../util/NumberUtils";
import Loading from "../components/Loading";

export default function VendaPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch<IVendaDetail>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <section className="m-default">
      <div className="p-default rounded-2xl flex flex-col gap-2 bg-color_3">
        <h2 className="text-2xl font-semibold">Detalhes da venda</h2>
        <span>
          <b>ID: </b>
          {data.id}
        </span>
        <span>
          <b>Nome: </b>
          {data.nome}
        </span>
        <div className="flex gap-2">
          <span>
            <b>Valor: </b>
            {formatNumberToBrCurrency(data.preco)}
          </span>
          {data.parcelas && (
            <span>
              <b>Parcelas: </b>
              {data.parcelas}
            </span>
          )}
        </div>
        <span className="capitalize">
          <b>Tipo De Pagamento: </b>
          {data.pagamento}
        </span>
        <span>
          <b>Status: </b>
          {data.status}
        </span>
      </div>
    </section>
  );
}
