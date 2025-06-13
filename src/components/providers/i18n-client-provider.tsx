"use client";

import { useEffect, useState } from "react";
import "../../i18n";
import { ReactNode } from "react";

export default function I18NClietProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}