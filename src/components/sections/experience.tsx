"use client";

import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    number: "01",
    title: "Atendimento Personalizado",
    text: "Cada paciente é único. Escutamos, avaliamos e desenhamos um plano exclusivo para você.",
  },
  {
    number: "02",
    title: "Tecnologia",
    text: "Equipamentos de última geração e protocolos atualizados para resultados seguros e eficazes.",
  },
  {
    number: "03",
    title: "Resultados Naturais",
    text: "Beleza que não chama atenção para o procedimento, apenas para você.",
  },
];

export function Experience() {
  return (
    <section className="relative section-pad bg-charcoal text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-ivory/50 mb-6">
            <span className="gold-line mr-3" />
            Experiência
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] max-w-3xl">
            Mais do que estética.
            <br />
            Uma experiência.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-ivory/70 leading-relaxed">
            Cada detalhe foi pensado para proporcionar conforto, privacidade e uma
            experiência personalizada em todas as etapas do seu cuidado.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory/10">
          {pillars.map((p, i) => (
            <Reveal key={p.number} delay={0.2 + i * 0.12}>
              <div className="bg-charcoal p-10 md:p-12 h-full">
                <span className="font-serif text-5xl text-gold/80">
                  {p.number}
                </span>
                <h3 className="mt-8 text-xs tracking-[0.22em] uppercase text-ivory">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-ivory/60 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
