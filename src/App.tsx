import { Suspense } from "react";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import SidenavComponent from "./components/Sidenav";
import { VendaContextProdiver } from "./context/VendaContext";
import ResumoPage from "./pages/Resumo";

export default function App() {
  return (
    <VendaContextProdiver>
      <div className="grid grid-cols-[300px_auto] font-montserrat text-color_2 bg-color_4">
        <SidenavComponent />
        <main>
          <HeaderComponent />
          <Suspense fallback={<span>Carrengado...</span>}>
            <ResumoPage />
          </Suspense>
        </main>
      </div>
    </VendaContextProdiver>
  );
}
