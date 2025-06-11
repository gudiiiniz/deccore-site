import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SalesDropdown() {
  return (
    <div className="relative group inline-block">
      <button className="px-4 py-2 text-white rounded cursor-pointer flex flex-row items-center hover:underline">
        Venda de Peças
        <ChevronDown size={20}/>
      </button>

      <div className="absolute left-0 mt-2 w-52 bg-[#0e0458f0] border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-60">
        <DropdownItem
          label="Manuais"
          link="/linha-eletrica"
        />
        <DropdownItem
          label="Semiautomáticas"
          link="/linha-mecanica"
        />
      </div>
    </div>
  );
}

type DropdownItemProps = {
  label: string;
  link: string;
};

function DropdownItem({ label, link }: DropdownItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group/item relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex justify-between items-center px-4 py-2 hover:bg-black cursor-pointer">
        <Link href={link} className="text-white">{label}</Link>
      </div>
    </div>
  );
}
