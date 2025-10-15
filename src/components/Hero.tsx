import { Sparkles, Timer, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="webs" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo BN */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="max-w-container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Nuestras Webs</span>
          </div>

          {/* Title */}
          <h1
            className="
              font-heading
              text-[clamp(42px,8vw,92px)]
              font-semibold
              leading-[1.12]
              tracking-[0.05em]
              mb-6
            "
          >
            Impulsa tu negocio con una{" "}
            <span className="font-bold">web profesional</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Diseñamos sitios modernos, rápidos y listos para vender desde el primer día.
            <br className="hidden md:block" />
            Sin tecnicismos, con resultados reales.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Botón claro para contraste en fondo oscuro */}
            <Button asChild size="lg" className="rounded-2xl font-semibold text-base px-8 py-6 bg-white text-black hover:bg-white/90">
              <a href="#precios">Ver precios</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl font-semibold text-base px-8 py-6 border-border hover:bg-white/5"
            >
              <a href="#demos">Ver demos</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-up animate-delay-200">
            <div className="flex items-center justify-center gap-3 p-4">
              <Timer size={24} />
              <span className="text-sm md:text-base font-medium">Entrega desde 3–10 días</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4">
              <Star size={24} />
              <span className="text-sm md:text-base font-medium">Soporte y garantía</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4">
              <ShieldCheck size={24} />
              <span className="text-sm md:text-base font-medium">Seguras y optimizadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


