import { useState } from "react";
import DateRange from "./DateRange";
import MonthPicker from "./MonthPicker";
import { useLocation } from "react-router-dom";

export default function HeaderComponent() {
  const location = useLocation();
  const [title, setTitle] = useState(location.pathname);

  function handleSetTitlePage() {
    switch (title) {
      case "/vendas":
        document.title = "Fintech | Vendas";
        return "Vendas";
      case "/webhooks":
        document.title = "Fintech | Webhook";
        return "Webhook";
      case "/config":
        document.title = "Fintech | Configuraçoes";
        return "Configuraçoes";
      case "/contato":
        document.title = "Fintech | Contato";
        return "Contato";
      case "/logout":
        document.title = "Fintech | Logout";
        return "Logout";
      default:
        document.title = "Fintech | Resumo";
        return "Resumo";
    }
  }

  return (
    <header>
      <div className="grid grid-cols-[1fr_1fr] large:grid-cols-1">
        <DateRange />
        <h1 className="text-3xl my-default p-default bg-color_3 font-bold rounded-2xl large:last:row-start-1 medium:my-1">
          {handleSetTitlePage()}
        </h1>
      </div>
      <MonthPicker />
    </header>
  );
}
