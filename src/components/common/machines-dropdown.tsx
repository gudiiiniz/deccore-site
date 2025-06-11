import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MachinesDropdown() {
  return (
    <div className="relative group inline-block">
      <button className="px-4 py-2 text-white rounded cursor-pointer flex flex-row items-center hover:underline">
        Máquinas
        <ChevronDown size={20} />
      </button>

      <div className="absolute left-0 mt-2 w-52 bg-[#0e0458f0] border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-60">
        <DropdownItem
          label="Manuais"
          submenu={[{ label: "Flamador Manual", link: "/flamador-manual" }]}
        />
        <DropdownItem
          label="Semiautomáticas"
          submenu={[
            { label: "Serigrafia Universal", link: "/serigrafia-universal" },
            { label: "Estufa de Secagem UV", link: "/estufa-secagem" },
            { label: "Serigrafia para Galões", link: "/serigrafia-galoes" },
          ]}
        />
        <DropdownItem
          label="Automáticas"
          submenu={[
            { label: "UV / 1 Cor", link: "/uv" },
            { label: "Cilíndrica UV / 2 Cores", link: "cilindrica-uv" },
          ]}
        />
      </div>
    </div>
  );
}

type DropdownItemProps = {
  label: string;
  submenu?: { label: string; link: string }[];
};

function DropdownItem({ label, submenu }: DropdownItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group/item relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex justify-between items-center px-4 py-2 hover:bg-black cursor-pointer">
        <p className="text-white">{label}</p>
        {submenu && <ChevronRight className="h-4 w-4 ml-2 text-white" />}
      </div>

      {submenu && open && (
        <div className="absolute top-0 left-full mt-0 w-52 bg-[#0E0458] border rounded shadow-lg z-60">
          {submenu.map((sub, i) => (
            <Link href={sub.link} key={i}>
              <div className="px-4 py-2 hover:bg-black cursor-pointer">
                <p className="text-white">{sub.label}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
