import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-20 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)] px-6 lg:px-0">
        <div className="flex flex-col pb-5 max-w-xs mx-auto lg:mx-0">
          <Image
            src={"/logo.png"}
            alt={"logo.png"}
            width={276}
            height={98.25}
            className="mx-auto lg:mx-0"
          />
          <p className="text-sm text-[#0E0458] mt-6 text-center lg:text-left">
            <b>Atendimento ao Cliente: +55 11 3857-4582</b>
            <br />
            <br />
            Rua João Alfredo, 478 - Cidade Industrial Satélite
            <br />
            Cumbica - Guarulhos - SP - Brasil
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://www.facebook.com/deccserigrafia"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/deccserigrafia/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/deccoreserigrafia/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://www.youtube.com/@deccoreserigrafia6780"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube
                size={30}
                className="text-[#0E0458] cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=+5511999400004"
              target="_blank"
              rel="noreferrer"
            >
            </a>
          </div>
        </div>

        <div className="flex flex-col max-w-xs mx-auto lg:mx-0">
          <ul className="space-y-4 text-[#0E0458] text-sm">
            <Link href={"/assistencia"}>
              <li className="cursor-pointer">Assistência</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/reforma"}>
              <li className="cursor-pointer">Reforma</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/ferramentas"}>
              <li className="cursor-pointer">Ferramentas</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/linha-eletrica"}>
              <li className="cursor-pointer">Linha Elétrica</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/linha-mecanica"}>
              <li className="cursor-pointer">Linha Mecânica</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/contato"}>
              <li className="cursor-pointer">Contato</li>
            </Link>
            <Separator className="my-4" />
          </ul>
        </div>

        <div className="flex flex-col max-w-xs mx-auto lg:mx-0">
          <ul className="space-y-4 text-[#0E0458] text-sm">
            <Link href={"/flamador-manual"}>
              <li className="cursor-pointer">Flamador Manual</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/serigrafia-universal"}>
              <li className="cursor-pointer">Serigrafia Universal</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/estufa-secagem"}>
              <li className="cursor-pointer">Estufa de Secagem UV</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/serigrafia-galoes"}>
              <li className="cursor-pointer">Serigrafia para Galões</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/cilindrica-uv"}>
              <li className="cursor-pointer">Cilíndrica UV / 2 Cores</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/uv"}>
              <li className="cursor-pointer">UV / 1 Cor</li>
            </Link>
            <Separator className="my-4" />
          </ul>
        </div>
      </footer>
      <div className="bg-[#0E0458] py-3 text-center">
        <p className="text-white text-sm">
          Todos os direitos reservados | Deccore © 2025
        </p>
      </div>
    </>
  );
}
