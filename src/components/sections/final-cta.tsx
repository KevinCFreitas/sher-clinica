import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/images";

export function FinalCta() {
  return (
    <section id="agendar" className="relative min-h-[70vh] flex items-center overflow-hidden">
      <Image
        src={images.finalCta}
        alt="Atendimento personalizado na clínica"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 container-x py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-ivory text-[clamp(2.8rem,7vw,6rem)] leading-[1.02]">
            Pronta para começar
            <br />
            sua transformação?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-ivory/80 max-w-xl mx-auto">
            Agende sua avaliação e descubra o tratamento ideal para você.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="https://wa.me/[WHATSAPP]"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 bg-ivory text-ink text-xs tracking-[0.22em] uppercase px-10 py-5 hover:bg-champagne transition-colors"
          >
            Agendar Avaliação
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
