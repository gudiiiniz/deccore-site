import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function SalesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 text-white rounded cursor-pointer flex flex-row items-center hover:underline select-none"
        aria-expanded={open}
      >
        Venda de Peças
        <ChevronDown size={20} className="ml-1" />
      </button>

      <div
        className={`absolute left-0 mt-2 w-52 bg-[#0e0458f0] border rounded shadow-lg z-60
          transition-all duration-200
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          lg:group-hover:opacity-100 lg:group-hover:visible lg:invisible-override
        `}
      >
        <DropdownItem label="Linha Elétrica" link="/linha-eletrica" />
        <DropdownItem label="Linha Mecânica" link="/linha-mecanica" />
      </div>
    </div>
  );
}

type DropdownItemProps = {
  label: string;
  link: string;
};

function DropdownItem({ label, link }: DropdownItemProps) {
  return (
    <Link href={link}>
      <div className="group/item relative">
        <div className="flex justify-between items-center px-4 py-2 hover:bg-black cursor-pointer select-none">
          <p className="text-white">{label}</p>
        </div>
      </div>
    </Link>
  );
}
