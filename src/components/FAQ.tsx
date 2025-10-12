import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿En cuánto tiempo entregan?",
    answer: "Entre 3 y 14 días, según el paquete que elijas.",
  },
  {
    question: "¿Incluye dominio y hosting?",
    answer:
      "Podemos incluirlo en el plan Empresarial o ayudarte a configurar el tuyo propio en cualquier plan.",
  },
  {
    question: "¿Puedo modificar mi web después?",
    answer:
      "Sí, podrás actualizar tu web más adelante. Ofrecemos servicio de mantenimiento o te enseñamos cómo hacerlo tú mismo.",
  },
  {
    question: "¿Puedo pagar en partes?",
    answer:
      "Sí, ofrecemos planes de pago en partes o personalizados según tus necesidades. Habla con nuestro asesor.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl px-6 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left font-heading text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
