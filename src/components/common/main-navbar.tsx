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
      className={`w-full bg-[#0E0458] relative ${
        sticky ? "lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-60" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto h-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 px-4 py-4">
        {links.map((l, idx) => {
          if (idx + 1 === 3) return <MachinesDropdown key={"machines"} />;
          if (idx + 1 === 6) return <SalesDropdown key={"sales"} />;
          return (
            <Link
              key={l.link}
              href={l.link}
              className="text-white cursor-pointer hover:underline whitespace-nowrap"
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
