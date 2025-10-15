import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Facebook, Instagram, Linkedin, Mail, ChevronDown } from "lucide-react";

/* === Config editable === */
const WHATSAPP_NUMBER = "525512345678";
const CONTACT_EMAIL = "hola@yarp.solutions";
const SOCIALS = [
  { href: "https://facebook.com/tu_pagina", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com/tu_perfil", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/in/tu_url", label: "LinkedIn", Icon: Linkedin },
];

const WEB_TYPES = [
  { value: "landing", label: "Landing Page" },
  { value: "institucional", label: "Sitio Institucional" },
  { value: "portafolio", label: "Portafolio" },
  { value: "tienda", label: "Tienda Online" },
  { value: "blog", label: "Blog" },
  { value: "aplicacion", label: "Aplicación Web" },
];
/* ======================= */

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedWebType, setSelectedWebType] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola YARP Solutions, me gustaría cotizar una web 🙂"
  )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    (data as any).tipo = selectedWebType;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedWebType('');
  };

  const handleSelectOption = (value: string) => {
    setSelectedWebType(value);
    setIsDropdownOpen(false);
  };

  const currentLabel = WEB_TYPES.find(t => t.value === selectedWebType)?.label || "Selecciona una opción";

  return (
    <section id="contacto" className="scroll-mt-28 py-24 px-6 bg-[hsl(var(--surface-light))] text-[hsl(0_0%_6%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-[hsl(0_0%_6%)]">Hablemos de tu proyecto</h2>
          <p className="text-[hsl(0_0%_35%)]">Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-white shadow-xl animate-scale-in">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">Nombre *</label>
              <Input id="nombre" name="nombre" type="text" required className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]" placeholder="Tu nombre completo" />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">Correo *</label>
              <Input id="correo" name="correo" type="email" required className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]" placeholder="tu@correo.com" />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">Teléfono o WhatsApp</label>
              <Input id="telefono" name="telefono" type="tel" className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]" placeholder="+52 123 456 7890" />
            </div>

            {/* Dropdown manual */}
            <div className="relative">
              <label htmlFor="tipo" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">Tipo de web</label>
              <button
                type="button"
                id="tipo-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-between items-center w-full h-11 px-3 py-2 rounded-xl border border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)] text-left transition-colors hover:bg-[hsl(0_0%_98%)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                aria-expanded={isDropdownOpen}
                aria-controls="tipo-content"
              >
                <span className={selectedWebType ? 'text-[hsl(0_0%_6%)]' : 'text-[hsl(0_0%_40%)]'}>{currentLabel}</span>
                <ChevronDown size={16} className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {isDropdownOpen && (
                <div id="tipo-content" className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto rounded-xl border border-[hsl(0_0%_85%)] bg-white shadow-xl animate-scale-in" style={{ animationDuration: '0.2s' }}>
                  {WEB_TYPES.map((item) => (
                    <div key={item.value} onClick={() => handleSelectOption(item.value)} className="px-3 py-2 cursor-pointer transition-colors hover:bg-black/5 text-[hsl(0_0%_6%)]">
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">Cuéntanos sobre tu idea</label>
              <Textarea id="mensaje" name="mensaje" rows={4} className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)] resize-none" placeholder="Describe brevemente tu proyecto..." />
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-2xl font-semibold text-base py-6 bg-black text-white hover:bg-black/90 transition-colors">
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>

          {/* Información */}
          <aside className="p-8 rounded-3xl bg-white shadow-xl animate-scale-in animate-delay-100">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-[hsl(0_0%_6%)]">Información de contacto</h3>

            <div className="space-y-5">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group p-3 rounded-xl hover:bg-black/5 transition-colors" aria-label="Abrir WhatsApp">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-black/10 text-black group-hover:bg-black/15 transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-sm text-[hsl(0_0%_40%)]">WhatsApp</div>
                  <div className="font-medium text-black group-hover:underline">+{WHATSAPP_NUMBER}</div>
                </div>
              </a>

              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 group p-3 rounded-xl hover:bg-black/5 transition-colors" aria-label="Enviar correo">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-black/6 text-black/70 group-hover:bg-black/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-[hsl(0_0%_40%)]">Email</div>
                  <div className="font-medium text-[hsl(0_0%_6%)] group-hover:underline break-all">{CONTACT_EMAIL}</div>
                </div>
              </a>
            </div>

            <div className="my-6 h-px bg-[hsl(0_0%_90%)]" />

            <div>
              <div className="mb-3 font-medium text-[hsl(0_0%_6%)]">Síguenos</div>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                     className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(0_0%_88%)] bg-white text-[hsl(0_0%_6%)] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-[hsl(0_0%_80%)]">
                    <Icon size={18} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
