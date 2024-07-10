import HeaderComponent from "./components/Header";
import SidenavComponent from "./components/Sidenav";
import { VendaContextProdiver } from "./context/VendaContext";
import ResumoPage from "./pages/Resumo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendaPage from "./pages/Venda";
import VendasPage from "./pages/Vendas";
import DefaultPage from "./pages/Default";

export default function App() {
  return (
    <BrowserRouter>
      <VendaContextProdiver>
        <div className="grid grid-cols-[300px_auto] max-w-full min-h-screen max-h-fit font-montserrat text-color_2 bg-color_4">
          <SidenavComponent />
          <main>
            <HeaderComponent />
            <Routes>
              <Route path="/" element={<ResumoPage />} />
              <Route path="/vendas" element={<VendasPage />} />
              <Route path="/venda/:id" element={<VendaPage />} />
              <Route path="*" element={<DefaultPage />} />
            </Routes>
          </main>
        </div>
      </VendaContextProdiver>
    </BrowserRouter>
  );
}
