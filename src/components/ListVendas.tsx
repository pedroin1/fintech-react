import { ComponentProps } from "react";
import { Ivenda } from "../type/Types";
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
  vendas: Ivenda[] | null;
}
