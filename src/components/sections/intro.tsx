"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/images";

export function Intro() {
  return (
    <section id="clinica" className="section-pad bg-paper">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="gold-line mr-3" />
              Nossa filosofia
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ink">
              Beleza que respeita
              <br />
              quem você é.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-base md:text-lg text-muted leading-relaxed">
              Acreditamos que a estética deve ser uma extensão do seu estilo de
              vida. Por isso, cada tratamento é desenhado de forma individual,
              respeitando seus traços, sua rotina e seus objetivos.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-base text-muted leading-relaxed">
              Resultados naturais, segurança e um atendimento que coloca você no
              centro de cada decisão. Aqui, cuidar de si é um ritual.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15} y={48}>
            <div className="relative aspect-[3/4] w-full max-w-md ml-auto overflow-hidden">
              <Image
                src={images.clinicIntro}
                alt="Interior sofisticado da clínica"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
