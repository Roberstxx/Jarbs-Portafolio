import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(170 100% 37%), hsl(170 100% 30%))",
      }}
    >
      <div className="max-w-container mx-auto text-center relative z-10">
        <div className="animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[hsl(0_0%_6%)]">
            Aumenta tus ventas con nosotros
          </h2>
          <p className="text-xl text-[hsl(0_0%_6%)]/80 mb-12 max-w-2xl mx-auto">
            Tu competencia ya está en línea. Empieza hoy con Jarbs Solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-2xl font-semibold text-base px-8 py-6 bg-[hsl(0_0%_6%)] hover:bg-[hsl(0_0%_12%)] text-white"
            >
              <a href="#contacto">Cotizar ahora</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl font-semibold text-base px-8 py-6 border-[hsl(0_0%_6%)]/20 text-[hsl(0_0%_6%)] hover:bg-[hsl(0_0%_6%)]/10"
            >
              <a href="https://wa.me/52XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
