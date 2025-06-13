import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode | string;
  setOpen(open: boolean): any;
}

export default function NavLink({ href, children, setOpen }: Props) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block py-2 px-3 hover:bg-gray-100 rounded text-[#0E0458]"
    >
      {children}
    </Link>
  );
}
