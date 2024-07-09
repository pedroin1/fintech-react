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
    <nav className="bg-color_3 m-default p-default rounded-2xl " {...props}>
      <FintechSVG title="Fintech Logo" />
      <ul className="mt-12 flex flex-col gap-4">
        <li className="flex items-center w-full cursor-pointer group">
          <div className="bg-white p-1 rounded-[50%] group-hover:rounded-l-full transition-all">
            <HomeIcon />
          </div>
          <a
            href=""
            className="font-semibold p-1 w-full group-hover:rounded-r-full group-hover:bg-white transition-all"
          >
            Resumo
          </a>
        </li>
        <li className="flex items-center rounded-xl gap-1">
          <div className="bg-white p-1 rounded-full">
            <StoreIcon />
          </div>
          <a href="" className="font-semibold hover:text-color_1">
            Vendas
          </a>
        </li>
        <li className="flex items-center gap-1">
          <div className="bg-white p-1 rounded-full">
            <ArrowDownUp />
          </div>
          <a href="" className="font-semibold">
            Webhooks
          </a>
        </li>
        <li className="flex items-center gap-1">
          <div className="bg-white p-1 rounded-full">
            <Bolt />
          </div>
          <a href="" className="font-semibold">
            Configurações
          </a>
        </li>
        <li className="flex items-center gap-1">
          <div className="bg-white p-1 rounded-full">
            <Mail />
          </div>
          <a href="" className="font-semibold">
            Contato
          </a>
        </li>
        <li className="flex items-center gap-1">
          <div className="bg-white p-1 rounded-full">
            <LogOut />
          </div>
          <a href="" className="font-semibold">
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
}

interface Props extends ComponentProps<"nav"> {}
