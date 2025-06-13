import { ChevronDown} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SalesDropdown() {
  const { t } = useTranslation();

  return (
    <div className="relative group inline-block">
      <button className="px-4 py-2 text-white rounded cursor-pointer flex flex-row items-center hover:underline">
        {t("main-navbar.links.sales.label")}
        <ChevronDown size={20} />
      </button>

      <div className="absolute left-0 mt-2 w-52 bg-[#0e0458f0] border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-60">
        <DropdownItem label={t("main-navbar.links.sales.eletric-line")} link="/linha-eletrica" />
        <DropdownItem label={t("main-navbar.links.sales.mechanical-line")} link="/linha-mecanica" />
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
        <div className="flex justify-between items-center px-4 py-2 hover:bg-black cursor-pointer">
          <p className="text-white">{label}</p>
        </div>
      </div>
    </Link>
  );
}