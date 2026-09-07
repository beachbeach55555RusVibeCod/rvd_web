"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/calculator", label: "Калькулятор" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#111111] text-white sticky top-0 z-50 border-b border-[#FFB800]/30 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#FFB800] text-black font-bold text-lg px-3 py-1 rounded">
              РВД
            </div>
            <div className="leading-tight">
              <div className="font-bold text-base text-white">ТД ПРОФ РВД</div>
              <div className="text-xs text-gray-400">Рукава высокого давления</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-[#FFB800] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex flex-col items-end text-sm gap-0.5">
            <a href="tel:+79678716444" className="hover:text-[#FFB800] transition-colors font-semibold text-white">
              +7 (967) 871-64-44 — Казань
            </a>
            <a href="tel:+79047174800" className="hover:text-[#FFB800] transition-colors font-semibold text-white">
              +7 (904) 717-48-00 — Альметьевск
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white" />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-700">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm text-gray-300 hover:text-[#FFB800] transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+79678716444" className="block py-2 text-sm font-semibold text-[#FFB800]">
              +7 (967) 871-64-44
            </a>
            <a href="tel:+79047174800" className="block py-2 text-sm font-semibold text-[#FFB800]">
              +7 (904) 717-48-00
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
