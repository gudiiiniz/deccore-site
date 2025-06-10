"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MainNavbar() {
  const [sticky, setSticky] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let initialOffsetTop = 0;
    if (navbarRef.current) {
      initialOffsetTop = navbarRef.current.offsetTop;
    }
    
    const handleScroll = () => {
      if (!navbarRef.current) return;
      
      if (window.scrollY >= initialOffsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`min-w-screen bg-[#0E0458] ${
        sticky ? "fixed top-0 left-0 right-0 z-60" : "relative"
      }`}
    >
      <div className="w-8/12 h-12 mx-auto flex flex-row justify-between items-center relative">
        <Link href={"/"} className="text-white cursor-pointer">
          Home
        </Link>
        <Link href={"/sobre-nos"} className="text-white cursor-pointer">
          Sobre Nós
        </Link>
        <Link href={"/maquinas"} className="text-white cursor-pointer">
          Máquinas
        </Link>
        <Link href={""} className="text-white cursor-pointer">
          Reforma
        </Link>
        <Link href={""} className="text-white cursor-pointer">
          Ferramentas
        </Link>
        <Link href={""} className="text-white cursor-pointer">
          Venda de Peças
        </Link>
        <Link href={""} className="text-white cursor-pointer">
          Assistência
        </Link>
        <Link href={""} className="text-white cursor-pointer">
          Contato
        </Link>
      </div>
    </nav>
  );
}
