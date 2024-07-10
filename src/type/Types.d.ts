export interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: Status;
  pagamento: Pagamento;
  parcelas: number | null;
  data: string;
}

export type IVendaDetail = Omit<IVenda, "data">;

export interface IChartData {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

type PagamentoType = "boleto" | "cartao" | "pix";
type StatusType = "falha" | "pago" | "processando";
