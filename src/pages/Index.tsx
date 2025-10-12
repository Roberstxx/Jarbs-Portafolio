import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyWeb from "@/components/WhyWeb";
import Pricing from "@/components/Pricing";
import Demos from "@/components/Demos";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyWeb />
        <Pricing />
        <Demos />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
