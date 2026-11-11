"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/[WHATSAPP]"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 md:hidden w-14 h-14 rounded-full bg-ink text-ivory flex items-center justify-center shadow-lg hover:bg-brown transition-colors"
    >
      <MessageCircle size={22} />
    </a>
  );
}
