"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const animate = mounted && !reduce;
  const t = testimonials[i];

  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  return (
    <section className="section-pad bg-paper">
      <div className="container-x max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="gold-line mr-3" />
            Depoimentos
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] text-ink">
            O cuidado está
            <br />
            nos detalhes.
          </h2>
        </Reveal>

        <div className="mt-16 min-h-[200px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={animate ? { opacity: 0, y: 16 } : false}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              exit={animate ? { opacity: 0, y: -16 } : undefined}
              transition={animate ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] } : undefined}
              className="font-serif text-2xl md:text-4xl leading-snug text-ink max-w-3xl"
            >
              “{t.quote}”
            </motion.blockquote>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`n-${i}`}
              initial={animate ? { opacity: 0 } : false}
              animate={animate ? { opacity: 1 } : undefined}
              exit={animate ? { opacity: 0 } : undefined}
              transition={animate ? { duration: 0.4 } : undefined}
              className="mt-8 text-xs tracking-[0.22em] uppercase text-muted"
            >
              — {t.name}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            aria-label="Anterior"
            onClick={prev}
            className="w-10 h-10 border border-line flex items-center justify-center hover:border-ink transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            aria-label="Próximo"
            onClick={next}
            className="w-10 h-10 border border-line flex items-center justify-center hover:border-ink transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
