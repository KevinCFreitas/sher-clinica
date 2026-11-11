export function Footer() {
  return (
    <footer id="contato" className="bg-charcoal text-ivory">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl">SHER</p>
          <p className="mt-4 text-sm text-ivory/60 max-w-md leading-relaxed">
            Clínica de estética premium dedicada a realçar sua beleza com
            naturalidade, segurança e sofisticação.
          </p>
          <div className="mt-6 flex gap-4 text-xs tracking-[0.22em] uppercase">
            <a href="https://instagram.com/[INSTAGRAM]" className="hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/[WHATSAPP]" className="hover:text-gold transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-ivory/50 mb-5">
            Navegação
          </p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><a href="#inicio" className="hover:text-gold transition-colors">Início</a></li>
            <li><a href="#clinica" className="hover:text-gold transition-colors">A Clínica</a></li>
            <li><a href="#tratamentos" className="hover:text-gold transition-colors">Tratamentos</a></li>
            <li><a href="#resultados" className="hover:text-gold transition-colors">Resultados</a></li>
            <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
            <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-ivory/50 mb-5">
            Contato
          </p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li>[ENDEREÇO]</li>
            <li>Porto Velho</li>
            <li>Seg–Sex · 9h–19h</li>
            <li>Sáb · 9h–14h</li>
          </ul>
        </div>
      </div>

      <div className="container-x border-t border-ivory/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
        <p>© 2026 SHER. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ivory transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-ivory transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
