"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/images";
import { X } from "lucide-react";

const layout = [
  "col-span-12 md:col-span-7 row-span-2",
  "col-span-6 md:col-span-5",
  "col-span-6 md:col-span-5",
  "col-span-6 md:col-span-4",
  "col-span-6 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-6 md:col-span-6",
  "col-span-6 md:col-span-6",
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const gallery = images.gallery;

  return (
    <section className="section-pad bg-paper">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="gold-line mr-3" />
                Galeria
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ink">
                Espaços que
                <br />
                acolhem.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted leading-relaxed">
              Arquitetura contemporânea, luz natural e cada detalhe pensado
              para sua experiência.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.05} className={layout[i]}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="relative w-full h-full overflow-hidden group"
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Interior da clínica ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-ink/95 flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <button
              aria-label="Fechar"
              className="absolute top-6 right-6 text-ivory p-2"
              onClick={() => setOpen(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[open]}
                alt={`Interior da clínica ${open + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
