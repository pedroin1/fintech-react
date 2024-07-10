import { ComponentProps } from "react";
import { IVenda } from "../type/types";
import ItemVenda from "./ItemVenda";

export default function ListVendas({ vendas, ...props }: ListProps) {
  return (
    <ul {...props}>
      {vendas?.map((venda, index) => (
        <ItemVenda key={index} venda={venda} />
      ))}
    </ul>
  );
}

interface ListProps extends ComponentProps<"ul"> {
  vendas: IVenda[] | null;
}
