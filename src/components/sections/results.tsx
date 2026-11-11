"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Results() {
  const cases = images.results;
  const [i, setI] = useState(0);
  const current = cases[i];

  const prev = () => setI((v) => (v - 1 + cases.length) % cases.length);
  const next = () => setI((v) => (v + 1) % cases.length);

  return (
    <section id="resultados" className="section-pad bg-ivory">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="gold-line mr-3" />
                Resultados
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ink">
                Resultados que
                <br />
                falam por si.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                aria-label="Anterior"
                onClick={prev}
                className="w-12 h-12 border border-line flex items-center justify-center hover:border-ink transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Próximo"
                onClick={next}
                className="w-12 h-12 border border-line flex items-center justify-center hover:border-ink transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                key={current.before}
                src={current.before}
                alt="Antes do tratamento"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 text-xs tracking-[0.22em] uppercase bg-ink/80 text-ivory px-3 py-1.5">
                Antes
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                key={current.after}
                src={current.after}
                alt="Depois do tratamento"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 text-xs tracking-[0.22em] uppercase bg-ink/80 text-ivory px-3 py-1.5">
                Depois
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-xs text-muted">
            Resultados podem variar de acordo com cada paciente. Imagens
            demonstrativas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
