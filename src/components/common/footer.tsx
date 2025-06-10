import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-20 flex flex-row items-center justify-center gap-30 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <Image src={"/logo.png"} alt={"logo.png"} width={276} height={98.25} />
          <p className="text-sm text-[#0E0458]">
            <b>Atendimento ao Cliente: +55 11 3857-4582</b>
            <br />
            <br />
            Rua João Alfredo, 478 - Cidade Industrial Satélite
            <br />
            Cumbica - Guarulhos - SP - Brasil
          </p>
        </div>
        <div className="flex flex-col">
          <ul>
            <Link href={"/assistencia"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Assistência
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/reforma"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">Reforma</li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/ferramentas"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Ferramentas
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/linha-eletrica"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Linha Elétrica
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/linha-mecanica"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Linha Mecânica
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/contato"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">Contato</li>
            </Link>
            <Separator className="my-4" />
          </ul>
        </div>

        <div className="flex flex-col">
          <ul>
            <Link href={"/flamador-manual"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Flamador Manual
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/serigrafia-universal"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Serigrafia Universal
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/estufa-secagem"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Estufa de Secagem UV
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/serigrafia-galoes"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Serigrafia para Galões
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/cilindrica"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                Cilíndrica UV / 2 Cores
              </li>
            </Link>
            <Separator className="my-4" />
            <Link href={"/uv"}>
              <li className="text-[#0E0458] text-sm cursor-pointer">
                UV / 1 Cor
              </li>
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
