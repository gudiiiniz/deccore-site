"use client";

import { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WppButton() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-2 bg-gray-50 rounded-lg shadow-xl p-3 w-56 h-20 grid"
          >
            <a
              href="https://wa.me/5511999400004"
              target="_blank"
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
            >
              <FaWhatsapp className="text-green-500" />
              Geral
            </a>
            <a
              href="https://wa.me/5511998934016"
              target="_blank"
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
            >
              <FaWhatsapp className="text-green-500" />
              Orçamentos
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 focus:outline-none"
        aria-label="Contatar via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}
