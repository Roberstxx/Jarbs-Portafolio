import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PreviewModal from "@/components/PreviewModal";
import demoRestaurant from "@/assets/demo-restaurant.png";
import demoCafe from "@/assets/demo-cafe.png";
import demoBoutique from "@/assets/demo-boutique.png";

type Demo = {
  title: string;
  image: string;
  url: string;
};

const demos: Demo[] = [
  {
    title: "Restaurante — Jada Burger",
    image: demoRestaurant,
    url: "https://jadaburger.com/",

  },
  {
    title: "Cafetería — Aroma Café",
    image: demoCafe,
    url: "https://cafeteria-aroma.vercel.app/",
  },
  {
    title: "Tienda — Boutique Luna",
    image: demoBoutique,
    url: "https://country-quiz-pink.vercel.app/quiz",
  },
];

const Demos = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Demo | null>(null);

  const openPreview = (demo: Demo) => {
    setActive(demo);
    setOpen(true);
  };

  return (
    <section
      id="demos"
      className="py-24 px-6 bg-[hsl(var(--surface-light))] text-[hsl(0_0%_6%)]"
    >
      <div className="max-w-container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[hsl(0_0%_6%)]">
            Previsualiza nuestras webs
          </h2>
          <p className="text-xl text-[hsl(220_9%_35%)] max-w-3xl mx-auto">
            Ejemplos reales de sitios creados por YARP Solutions.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-lg font-semibold text-[hsl(0_0%_6%)]">
                    {demo.title}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* === BOTÓN PRINCIPAL: NEGRO, LETRAS BLANCAS, CON BRILLO === */}
                  <Button
                    onClick={() => openPreview(demo)}
                    className="rounded-2xl font-semibold px-4 btn-dark btn-anim white-glow"
                  >
                    <Eye size={18} className="mr-2" />
                    Vista previa
                  </Button>

                  {/* === BOTÓN SECUNDARIO: OUTLINE NEGRO CON ANIMACIÓN === */}
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl font-semibold px-4 btn-outline-dark btn-anim"
                  >
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Ver pagina completa
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de preview */}
        {active && (
          <PreviewModal
            open={open}
            onClose={() => setOpen(false)}
            title={active.title}
            url={active.url}
          />
        )}
      </div>
    </section>
  );
};

export default Demos;




