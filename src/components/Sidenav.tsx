import { ComponentProps } from "react";
import FintechSVG from "../assets/FintechSVG";
import {
  ArrowDownUp,
  Bolt,
  HomeIcon,
  LogOut,
  Mail,
  StoreIcon,
} from "lucide-react";

export default function SidenavComponent({ ...props }: Props) {
  return (
    <nav
      className="bg-color_3 m-default p-default rounded-2xl flex-1 "
      {...props}
    >
      <FintechSVG title="Fintech Logo" />
      <ul className="mt-12 flex flex-col gap-4 medium:grid medium:grid-cols-[1fr_1fr_1fr] medium:mt-4">
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-l-full">
            <HomeIcon />
          </div>
          <a
            href="/"
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Resumo
          </a>
        </li>
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-l-full">
            <StoreIcon />
          </div>
          <a
            href="/vendas"
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Vendas
          </a>
        </li>
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-l-full">
            <ArrowDownUp />
          </div>
          <a
            href="/webhooks"
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Webhooks
          </a>
        </li>
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-l-full">
            <Bolt />
          </div>
          <a
            href="/config"
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Configurações
          </a>
        </li>
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-l-full">
            <Mail />
          </div>
          <a
            href="/contato"
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Contato
          </a>
        </li>
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-l-full">
            <LogOut />
          </div>
          <a
            href="/logout"
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
}

interface Props extends ComponentProps<"nav"> {}
