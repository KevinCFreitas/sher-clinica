import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { professionals } from "@/data/professionals";

export function Professionals() {
  const p = professionals[0];
  return (
    <section id="sobre" className="section-pad bg-paper">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="gold-line mr-3" />
              Quem cuida de você
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ink">
              {p.name}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-xs tracking-[0.22em] uppercase text-muted">
              {p.role}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-3 text-sm text-muted border-l border-line pl-6">
              <p>
                <span className="text-ink">Credenciais:</span> {p.credentials}
              </p>
              <p>{p.bio}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#agendar"
              className="mt-10 inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-ink border-b border-ink pb-1 hover:text-brown hover:border-brown transition-colors"
            >
              Conhecer profissional <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
