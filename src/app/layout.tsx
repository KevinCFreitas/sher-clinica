import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHER — Clínica de Estética Premium em Porto Velho",
  description:
    "Tratamentos estéticos personalizados em Porto Velho para realçar sua beleza com naturalidade, segurança e sofisticação.",
  openGraph: {
    title: "SHER — Clínica de Estética Premium em Porto Velho",
    description:
      "Tratamentos estéticos personalizados em Porto Velho para realçar sua beleza com naturalidade, segurança e sofisticação.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://images.pexels.com/photos/16131207/pexels-photo-16131207.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "SHER",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
