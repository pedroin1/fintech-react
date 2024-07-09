import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import SidenavComponent from "./components/Sidenav";
import { VendaContextProdiver } from "./context/VendaContext";
import ResumoPage from "./pages/Resumo";

export default function App() {
  return (
    <VendaContextProdiver>
      <div className="h-screen font-montserrat text-color_2 bg-color_4">
        <HeaderComponent />
        <SidenavComponent />
        <main>
          <ResumoPage />
        </main>
        <FooterComponent />
      </div>
    </VendaContextProdiver>
  );
}
