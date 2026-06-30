import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Nations from "@/components/landing/Nations";
import Curriculum from "@/components/landing/Curriculum";
import Immersions from "@/components/landing/Immersions";
import Outclass from "@/components/landing/Outclass";
import CXO from "@/components/landing/CXO";
import Outcomes from "@/components/landing/Outcomes";
import WhatsIncluded from "@/components/landing/WhatsIncluded";
import FAQ from "@/components/landing/FAQ";
import Admissions from "@/components/landing/Admissions";

import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import MobileBottomBar from "@/components/landing/MobileBottomBar";


const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <Marquee />
    <section id="program">
      <Nations />
    </section>
    
    <Immersions />
    <Outclass />
    <CXO />
    <Outcomes />
    <Admissions />
    <FAQ />
    <Contact />
    <Footer />
    <MobileBottomBar />
  </main>
);

export default Index;
