import { SquareArrowUpRight } from "lucide-react";
import { IVenda } from "../type/types";
import { formatNumberToBrCurrency } from "../util/NumberUtils";

export default function ItemVenda({ venda }: Props) {
  if (venda === null) return;
  return (
    <div className="p-small flex justify-between items-center bg-white rounded-2xl medium:flex-col medium:items-start">
      <div className="flex items-center gap-1 hover:underline text-purple-700 cursor-pointer font-semibold">
        <a href={`/venda/${venda.id}`}>{venda.id}</a>
        <SquareArrowUpRight size={18} />
      </div>
      <span>{venda.nome}</span>
      <span>{formatNumberToBrCurrency(venda.preco)}</span>
    </div>
  );
}

interface Props {
  venda: IVenda | null;
}
