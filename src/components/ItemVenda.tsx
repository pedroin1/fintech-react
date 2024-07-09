import { SquareArrowUpRight } from "lucide-react";
import { Ivenda } from "../type/Types";
import { formatNumberToBrCurrency } from "../util/NumberUtils";

export default function ItemVenda({ venda }: Props) {
  if (venda === null) return;
  return (
    <div className="flex flex-wrap justify-between items-center mt-2 bg-white rounded-2xl p-default">
      <div className="flex items-center gap-1 hover:underline text-purple-700 cursor-pointer">
        <a href="">{venda.id}</a>
        <SquareArrowUpRight size={18} />
      </div>
      <span>{venda.nome}</span>
      <span>{formatNumberToBrCurrency(venda.preco)}</span>
    </div>
  );
}

interface Props {
  venda: Ivenda | null;
}
