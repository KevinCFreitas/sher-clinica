"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/data/images";

export function Hero() {
  const reduce = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const animate = mounted && !reduce;

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink"
    >
      <Image
        src={images.hero}
        alt="Profissional realizando tratamento estético em clínica premium"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,#c9a96e_0%,transparent_50%)]" />

      <div className="relative z-10 container-x h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.p
          initial={animate ? { opacity: 0, y: 16 } : false}
          animate={animate ? { opacity: 1, y: 0 } : undefined}
          transition={animate ? { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] } : undefined}
          className="eyebrow text-ivory/70 mb-8"
        >
          Estética • Beleza • Cuidado
        </motion.p>

        <motion.h1
          initial={animate ? { opacity: 0, y: 40 } : false}
          animate={animate ? { opacity: 1, y: 0 } : undefined}
          transition={animate ? { duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] } : undefined}
          className="font-serif text-ivory text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] max-w-4xl"
        >
          Sua beleza.
          <br />
          Sua melhor versão.
        </motion.h1>

        <motion.p
          initial={animate ? { opacity: 0, y: 24 } : false}
          animate={animate ? { opacity: 1, y: 0 } : undefined}
          transition={animate ? { duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
          className="mt-8 max-w-xl text-base md:text-lg text-ivory/80 leading-relaxed"
        >
          Tratamentos estéticos personalizados para realçar sua beleza com
          naturalidade, segurança e sofisticação.
        </motion.p>

        <motion.div
          initial={animate ? { opacity: 0, y: 24 } : false}
          animate={animate ? { opacity: 1, y: 0 } : undefined}
          transition={animate ? { duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] } : undefined}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#agendar"
            className="group inline-flex items-center gap-3 bg-ivory text-ink text-xs tracking-[0.22em] uppercase px-8 py-4 hover:bg-champagne transition-colors"
          >
            Agendar Avaliação
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
          <a
            href="#clinica"
            className="inline-flex items-center gap-3 border border-ivory/40 text-ivory text-xs tracking-[0.22em] uppercase px-8 py-4 hover:border-ivory hover:bg-ivory/10 transition-colors"
          >
            Conhecer a Clínica
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={animate ? { opacity: 0 } : false}
        animate={animate ? { opacity: 1 } : undefined}
        transition={animate ? { delay: 1.2, duration: 1 } : undefined}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/60"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">
          Scroll to explore
        </span>
        <motion.span
          animate={animate ? { y: [0, 8, 0] } : undefined}
          transition={animate ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : undefined}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
