"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/85 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between h-32">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo.png"
              alt="SHER"
              width={260}
              height={90}
              priority
              className="h-24 w-auto object-contain"
            />
          </a>
          <ul className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-xs tracking-[0.22em] uppercase text-ink/80 hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="#agendar"
              className="hidden md:inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase bg-ink text-ivory px-6 py-3 hover:bg-brown transition-colors"
            >
              Agendar Avaliação <span>→</span>
            </a>
            <button
              aria-label="Abrir menu"
              className="lg:hidden text-ink p-2"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink text-ivory flex flex-col"
          >
            <div className="flex items-center justify-between h-20 container-x">
              <Image
                src="/logo.png"
                alt="SHER"
                width={120}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <button
                aria-label="Fechar menu"
                className="p-2"
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center container-x gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl border-b border-ivory/10 pb-4"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#agendar"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 inline-flex w-fit items-center gap-3 text-xs tracking-[0.22em] uppercase bg-ivory text-ink px-6 py-4"
              >
                Agendar Avaliação →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
