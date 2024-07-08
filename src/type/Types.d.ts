export interface Ivenda {
  id: string;
  nome: string;
  preco: number;
  status: Status;
  pagamento: Pagamento;
  parcelas: number | null;
  data: Date;
}
type PagamentoType = "boleto" | "cartao" | "pix";
type StatusType = "falha" | "pago" | "processando";
