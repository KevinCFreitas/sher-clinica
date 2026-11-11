"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { treatments } from "@/data/treatments";

export function Treatments() {
  const [active, setActive] = useState(treatments[0].id);
  const activeItem = treatments.find((t) => t.id === active) ?? treatments[0];

  return (
    <section id="tratamentos" className="section-pad bg-ivory">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="gold-line mr-3" />
                Tratamentos
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ink">
                Cuidados pensados
                <br />
                para você.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted leading-relaxed">
              Protocolos personalizados, tecnologia de ponta e um olhar atento
              para resultados que respeitam sua individualidade.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <ul className="lg:col-span-7 divide-y divide-line border-y border-line">
            {treatments.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(t.id)}
                  onFocus={() => setActive(t.id)}
                  className="group w-full flex items-center gap-6 py-7 text-left transition-colors"
                >
                  <span className="text-xs tracking-[0.2em] text-muted w-8">
                    {t.number}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-serif text-2xl md:text-3xl transition-transform duration-500 ${
                        active === t.id
                          ? "translate-x-2 text-ink"
                          : "text-ink/70"
                      }`}
                    >
                      {t.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm text-muted transition-all duration-500 ${
                        active === t.id
                          ? "opacity-100 max-h-10"
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {t.description}
                    </p>
                  </div>
                  <span
                    className={`text-xl transition-all duration-500 ${
                      active === t.id
                        ? "translate-x-1 text-gold"
                        : "text-muted/40"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand sticky top-28">
              {treatments.map((t) => (
                <Image
                  key={t.id}
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={`object-cover transition-all duration-700 ${
                    active === t.id ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-ivory mix-blend-difference">
                <span className="text-xs tracking-[0.22em] uppercase">
                  {activeItem.number}
                </span>
                <span className="font-serif text-xl">{activeItem.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
