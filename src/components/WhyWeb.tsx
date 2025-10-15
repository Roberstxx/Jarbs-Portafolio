import { Clock, TrendingUp, Search, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Tu negocio 24/7",
    description:
      "Te encuentran a cualquier hora: agenda, pedidos y consultas sin depender de redes sociales.",
  },
  { icon: TrendingUp, title: "Más confianza", description: "Un sitio propio transmite profesionalismo y mejora la conversión." },
  { icon: Search, title: "Aparece en Google", description: "SEO básico incluido para que te encuentren tus clientes." },
  { icon: MessageCircle, title: "Habla por WhatsApp", description: "Botones directos y chat embebido para cerrar ventas más rápido." },
];

const WhyWeb = () => {
  return (
    <section id="por-que" className="py-24 px-6 bg-secondary">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">¿Por qué tener una web hoy?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explicado para dueños de negocio, emprendedores y marcas personales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeb;


