import { Sparkles, Timer, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="webs" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(170 100% 37% / 0.12), transparent 60%)",
        }}
      />

      <div className="max-w-container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Nuestras Webs</span>
          </div>

          {/* Title */}
          <h1
            className="
    font-heading
    text-[clamp(42px,8vw,92px)]
    font-semibold
    leading-[1.16] md:leading-[1.12] lg:leading-[1.10]
    tracking-[0.04em] md:tracking-[0.045em] lg:tracking-[0.05em]
    mb-6
    heading-fix heading-balance
  "
          >
            Impulsa tu negocio con una{" "}
            <span
              className="
      gradient-text
      font-bold
      tracking-[0.055em]
    "
            >
              web profesional
            </span>
          </h1>




          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Diseñamos sitios modernos, rápidos y listos para vender desde el primer día.
            <br className="hidden md:block" />
            Sin tecnicismos, con resultados reales.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="rounded-2xl font-semibold text-base px-8 py-6">
              <a href="#precios">Ver precios</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl font-semibold text-base px-8 py-6 border-border hover:bg-card"
            >
              <a href="#demos">Ver demos</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-up animate-delay-200">
            <div className="flex items-center justify-center gap-3 p-4">
              <Timer className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm md:text-base font-medium">
                Entrega desde 3–10 días
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4">
              <Star className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm md:text-base font-medium">Soporte y garantía</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4">
              <ShieldCheck className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm md:text-base font-medium">
                Seguras y optimizadas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
