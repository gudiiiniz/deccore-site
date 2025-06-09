"use client";

import Link from "next/link";
import MachineOptions from "./machine-options";

export default function MainNavbar() {
  return(
    <div className="min-w-screen bg-[#0E0458]">
      <div className="w-8/12 h-12 mx-auto flex flex-row justify-between items-center relative">
        <Link href={"/"} className="text-white cursor-pointer">Home</Link>
        <Link href={"/sobre-nos"} className="text-white cursor-pointer">Sobre Nós</Link>
        <MachineOptions />
        <Link href={""} className="text-white cursor-pointer">Reforma</Link>
        <Link href={""} className="text-white cursor-pointer">Ferramentas</Link>
        <Link href={""} className="text-white cursor-pointer">Venda de Peças</Link>
        <Link href={""} className="text-white cursor-pointer">Assistência</Link>
        <Link href={""} className="text-white cursor-pointer">Contato</Link>
      </div>
    </div>
  );
}