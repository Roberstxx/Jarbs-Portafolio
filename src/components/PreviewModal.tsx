import { useEffect, useState } from "react";
import { X } from "lucide-react";

type PreviewModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  url: string;
};

const PreviewModal = ({ open, onClose, title, url }: PreviewModalProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Bloquea scroll del fondo mientras el modal está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  // Fallback si el iframe no logra cargar (p.ej. bloqueado por X-Frame-Options)
  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setFailed(false);
    const t = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 3500);
    return () => clearTimeout(t);
  }, [open, url, loaded]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* contenedor */}
      <div className="relative z-[61] w-[min(96vw,1200px)] h-[min(90vh,900px)] rounded-2xl overflow-hidden bg-white shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between px-4 md:px-6 h-14 border-b border-[hsl(0_0%_90%)]">
          <div className="font-heading font-semibold truncate text-[hsl(0_0%_6%)]">
            {title}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-2 rounded-lg hover:bg-black/5"
          >
            <X size={20} />
          </button>
        </div>

        {/* frame */}
        <div className="relative w-full h-[calc(100%-56px)] bg-white">
          {!loaded && !failed && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="animate-pulse text-[hsl(0_0%_35%)]">Cargando vista previa…</div>
            </div>
          )}

          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <p className="text-[hsl(0_0%_35%)]">
                Esta demo no permite ser embebida en un iframe.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center px-5 py-3 rounded-2xl
                  bg-[hsl(170_100%_37%)] text-white font-semibold hover:bg-[hsl(170_100%_30%)]
                "
              >
                Abrir en Vercel
              </a>
            </div>
          ) : (
            <iframe
              title={title}
              src={url}
              className="w-full h-full bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoaded(true)}
              // Nota: si alguna demo falla dentro del modal, prueba a quitar "sandbox" o a ajustarlo
              // sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
