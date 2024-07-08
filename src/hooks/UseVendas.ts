import { useContext } from "react";
import { VendaContext } from "../context/VendaContext";

export const useVendas = () => {
  const context = useContext(VendaContext);
  if (!context) {
    throw new Error("O useVendas  precisa de um provider.");
  }
  return context;
};
