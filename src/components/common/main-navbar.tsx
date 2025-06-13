"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MachinesDropdown from "./machines-dropdown";
import SalesDropdown from "./sales-dropdown";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import NavLink from "./nav-link";
import { useTranslation } from "react-i18next";

export default function MainNavbar() {
  const [sticky, setSticky] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const { t } = useTranslation();

  const links = [
    {
      label: t("main-navbar.links.home"),
      link: "/",
    },
    {
      label: t("main-navbar.links.about-us"),
      link: "/sobre-nos",
    },
    {
      label: t("main-navbar.links.machines.label"),
      link: "/#",
    },
    {
      label: t("main-navbar.links.reform"),
      link: "/reforma",
    },
    {
      label: t("main-navbar.links.tools"),
      link: "/ferramentas",
    },
    {
      label: t("main-navbar.links.sales.label"),
      link: "/#",
    },
  ];

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

    const checkIsMobile = () => window.innerWidth <= 768;
    setIsMobile(checkIsMobile());

    const handleResize = () => setIsMobile(checkIsMobile());
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
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
  } else {
    return (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="fixed top-4 left-4 z-50 p-2 rounded bg-white shadow"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div
          className={cn(
            "fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-40",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="mt-14 p-4 space-y-2 z-50">
            <NavLink href="/" setOpen={setOpen}>
              {t("main-navbar.links.home")}
            </NavLink>

            <NavLink href="/sobre-nos" setOpen={setOpen}>
              {t("main-navbar.links.about-us")}
            </NavLink>

            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 rounded text-[#0E0458]"
              >
                {t("main-navbar.links.machines.label")}
                {dropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {dropdownOpen && (
                <div className="ml-4 mt-1 space-y-2">
                  <div className="flex flex-row items-center mt-3">
                    <h3 className="text-[#0E0458]">
                      {t("main-navbar.links.machines.manual.label")}
                    </h3>
                    <ChevronDown size={20} className="text-[#0E0458]" />
                  </div>
                  <NavLink href="/flamador-manual" setOpen={setOpen}>
                    {t("main-navbar.links.machines.manual.flamer")}
                  </NavLink>
                  <div className="flex flex-row items-center mt-3">
                    <h3 className="text-[#0E0458]">
                      {t("main-navbar.links.machines.semi-automatic.label")}
                    </h3>
                    <ChevronDown size={20} className="text-[#0E0458]" />
                  </div>
                  <NavLink href="/serigrafia-universal" setOpen={setOpen}>
                    {t(
                      "main-navbar.links.machines.semi-automatic.universal-screen-printer"
                    )}
                  </NavLink>
                  <NavLink href="/estufa-secagem" setOpen={setOpen}>
                    {t("main-navbar.links.machines.semi-automatic.drying-oven")}
                  </NavLink>
                  <NavLink href="/serigrafia-galoes" setOpen={setOpen}>
                    {t("main-navbar.links.machines.semi-automatic.gallons")}
                  </NavLink>
                  <div className="flex flex-row items-center mt-3">
                    <h3 className="text-[#0E0458]">{t("main-navbar.links.machines.automatic.label")}</h3>
                    <ChevronDown size={20} className="text-[#0E0458]" />
                  </div>
                  <NavLink href="/uv" setOpen={setOpen}>
                    {t("main-navbar.links.machines.automatic.uv")}
                  </NavLink>
                  <NavLink href="/cilindrica-uv" setOpen={setOpen}>
                    {t("main-navbar.links.machines.automatic.cylindric-uv")}
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink href="/reforma" setOpen={setOpen}>
              {t("main-navbar.links.reform")}
            </NavLink>
            <NavLink href="/ferramentas" setOpen={setOpen}>
              {t("main-navbar.links.tools")}
            </NavLink>

            <div>
              <button
                onClick={() => setDropdownOpen2(!dropdownOpen2)}
                className="flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 rounded text-[#0E0458]"
              >
                {t("main-navbar.links.sales.label")}
                {dropdownOpen2 ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {dropdownOpen2 && (
                <div className="ml-4 mt-1 space-y-2">
                  <NavLink href="/linha-eletrica" setOpen={setOpen}>
                  {t("main-navbar.links.sales.eletric-line")}
                  </NavLink>
                  <NavLink href="/linha-mecanica" setOpen={setOpen}>
                    {t("main-navbar.links.sales.mechanical-line")}
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      </>
    );
  }
}
