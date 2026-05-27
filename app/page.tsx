import { Header } from "@/components/sections/header";
import { HeroVideo } from "@/components/sections/hero-video";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Region } from "@/components/sections/region";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/shared/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <HeroVideo />
        <Hero />
        <Intro />
        <Services />
        <Process />
        <About />
        <Gallery />
        <Region />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
