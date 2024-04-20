import Hero from "@/components/Hero";
import Service from "@/components/Services";
import Offers from "@/components/Feature";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Offers />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
