import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(0 0% 12%), hsl(0 0% 0%))" }}
    >
      <div className="max-w-container mx-auto text-center relative z-10">
        <div className="animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
            Aumenta tus ventas con nosotros
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Tu competencia ya está en línea. Empieza hoy con Jarbs Solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-2xl font-semibold text-base px-8 py-6 bg-white text-black hover:bg-white/90"
            >
              <a href="#contacto">Cotizar ahora</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl font-semibold text-base px-8 py-6 border-white/30 text-white hover:bg-white/10"
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
