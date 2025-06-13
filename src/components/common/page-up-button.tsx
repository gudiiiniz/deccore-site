"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";

export default function PageUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "cursor-pointer fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-40 transition-opacity duration-300",
        isVisible ? "opacity-100 bg-[#0E0458] text-white" : "opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp className="w-9 h-9" />
    </button>
  );
}
