import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Nations from "@/components/landing/Nations";
import Curriculum from "@/components/landing/Curriculum";
import ApplyBento from "@/components/landing/ApplyBento";
import Immersions from "@/components/landing/Immersions";
import CXO from "@/components/landing/CXO";
import Outcomes from "@/components/landing/Outcomes";
import FAQ from "@/components/landing/FAQ";
import Apply from "@/components/landing/Apply";
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
    <Curriculum />
    <ApplyBento />
    <Immersions />
    <CXO />
    <Outcomes />
    <FAQ />
    <Apply />
    <Footer />
    <MobileBottomBar />
  </main>
);

export default Index;
