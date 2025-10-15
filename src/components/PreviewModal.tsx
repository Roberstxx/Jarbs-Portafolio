import { useEffect, useRef, useState } from "react";
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
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  // Bloquea scroll y habilita cierre con ESC
  useEffect(() => {
    if (!open) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  // Timeout de carga más generoso (evita falso negativo)
  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setFailed(false);
    const t = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 8000); // antes 3500ms
    return () => clearTimeout(t);
  }, [open, url, loaded]);

  if (!open) return null;

  const handleRetry = () => {
    setFailed(false);
    setLoaded(false);
    // recarga del iframe
    try {
      frameRef.current?.contentWindow?.location.reload();
    } catch {
      // si es cross-origin, forzamos src de nuevo
      if (frameRef.current) {
        const src = frameRef.current.src;
        frameRef.current.src = "about:blank";
        // pequeño delay para reinyectar
        setTimeout(() => (frameRef.current ? (frameRef.current.src = src) : null), 30);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Contenedor */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Vista previa: ${title}`}
        className="relative z-[61] w-[min(96vw,1200px)] h-[min(90vh,900px)] rounded-2xl overflow-hidden bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 h-14 border-b border-[hsl(0_0%_90%)]">
          <div className="font-heading font-semibold truncate text-[hsl(0_0%_6%)]">
            {title}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-2 rounded-lg hover:bg-black/5 btn-anim"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido */}
        <div className="relative w-full h-[calc(100%-56px)] bg-white">
          {!loaded && !failed && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="animate-pulse text-[hsl(0_0%_35%)]">
                Cargando vista previa…
              </div>
            </div>
          )}

          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
              <p className="text-[hsl(0_0%_35%)]">
                Esta demo no permite ser embebida en un iframe.
              </p>
              <div className="flex gap-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-black/85 btn-anim white-glow"
                >
                  Abrir en Vercel
                </a>
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-black/60 text-black hover:bg-black/6 btn-anim"
                >
                  Reintentar
                </button>
              </div>
            </div>
          ) : (
            <iframe
              ref={frameRef}
              title={title}
              src={url}
              className="w-full h-full bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              // importante: no usar sandbox aquí para no bloquear sites externos
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
