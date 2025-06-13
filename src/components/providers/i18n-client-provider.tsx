"use client";

import { useEffect, useState } from "react";
import "../../i18n";
import { ReactNode } from "react";
import i18n from "../../i18n";

export default function I18NClietProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if(lang) {
      i18n.changeLanguage(lang);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}