"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = ["About", "Menu", "Contact"];

export default function Navbar({ isDark, onToggleDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled ? "text-stone-950 after:bg-stone-950" : "text-white after:bg-white";
  const menuButtonColor = scrolled ? "border-stone-300 text-stone-950" : "border-white/40 text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg shadow-black/10" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" aria-label="Luxe Dining home">
            <Image
              src="/hero-banner.webp"
              width={50}
              height={50}
              alt="Luxe Dining"
              className="rounded-full"
              priority
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-[var(--font-main)] text-sm font-semibold uppercase transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:-translate-y-0.5 hover:after:w-full ${linkColor}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={onToggleDark}
              className={`grid size-11 place-items-center rounded-full transition hover:scale-105 ${
                scrolled ? "bg-stone-950 text-white hover:bg-[#fc791a]" : "bg-white text-stone-800 hover:bg-neutral-950 hover:text-white"
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className={`grid size-11 place-items-center rounded-full border lg:hidden ${menuButtonColor}`}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-6 bg-black/95 text-white"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-6 top-6 grid size-12 place-items-center rounded-full border border-white/20"
            >
              <X />
            </button>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-[var(--font-main)] text-xl font-bold uppercase tracking-wide transition hover:scale-110 hover:text-[#fc791a]"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
