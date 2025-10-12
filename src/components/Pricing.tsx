import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Esencial",
    price: "Desde $2,499 MXN",
    features: [
      "1 página (landing)",
      "Diseño adaptable (móvil/pc)",
      "Botón de WhatsApp y redes",
      "Sección de contacto",
      "Entrega: 3 días",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "Desde $4,999 MXN",
    badge: "Más elegido",
    features: [
      "Hasta 3 secciones",
      "Diseño personalizado",
      "Formulario de contacto + mapa",
      "SEO básico",
      "Entrega: 5 días",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Desde $7,999 MXN",
    features: [
      "Hasta 6 secciones + animaciones suaves",
      "Integración Chat / WhatsApp",
      "Optimización Lighthouse",
      "SEO + Analytics",
      "Entrega: 7 días",
    ],
    highlighted: false,
  },
  {
    name: "Empresarial",
    price: "Desde $11,999 MXN",
    features: [
      "Web + Dashboard",
      "Hosting y dominio (1 año)",
      "Mantenimiento mensual",
      "Integraciones avanzadas",
      "Entrega: 10–14 días",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Paquetes y precios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparencia total. Elige el plan que mejor se adapte a ti.
            <br />
            (Contenido editable por el equipo)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border transition-all duration-300 animate-scale-in ${
                plan.highlighted
                  ? "bg-card border-primary shadow-[0_0_40px_hsl(170_100%_37%/0.2)] scale-105"
                  : "bg-card border-border hover-lift"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
                className="w-full rounded-2xl font-semibold"
              >
                <a href="#contacto">
                  {plan.highlighted ? "Elegir este plan" : "Solicitar plan"}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
