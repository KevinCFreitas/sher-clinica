import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Treatments } from "@/components/sections/treatments";
import { Experience } from "@/components/sections/experience";
import { Gallery } from "@/components/sections/gallery";
import { Results } from "@/components/sections/results";
import { Professionals } from "@/components/sections/professionals";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Treatments />
        <Experience />
        <Gallery />
        <Results />
        <Professionals />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
