"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MachinesDropdown from "./machines-dropdown";
import Dropdown from "./machines-dropdown";
import SalesDropdown from "./sales-dropdown";

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Sobre Nós",
    link: "/sobre-nos",
  },
  {
    label: "Máquinas",
    link: "/#",
  },
  {
    label: "Reforma",
    link: "/reforma",
  },
  {
    label: "Ferramentas",
    link: "/ferramentas",
  },
  {
    label: "Venda de Peças",
    link: "/#",
  },
  {
    label: "Assistência",
    link: "/assistencia",
  },
  {
    label: "Contato",
    link: "/contato",
  },
];

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
        {links.map((l, idx) => {
          if(idx+1 === 3) return <MachinesDropdown key={"machines"}/>
          if(idx+1 === 6) return <SalesDropdown key={"sales"}/>
          return (
            <Link
              key={l.link}
              href={l.link}
              className="text-white cursor-pointer hover:underline"
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
