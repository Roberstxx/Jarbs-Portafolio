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

  // Bloquea scroll del fondo y cierre con ESC
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

  // Timeout de carga (12s)
  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setFailed(false);
    const t = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 12000);
    return () => clearTimeout(t);
  }, [open, url, loaded]);

  // Intenta hacer scroll al inicio del iframe cuando carga
  const handleIframeLoad = () => {
    setLoaded(true);
    try {
      // Intenta hacer scroll al inicio si el iframe lo permite
      frameRef.current?.contentWindow?.scrollTo(0, 0);
    } catch (e) {
      // Cross-origin, no se puede controlar
      console.log('No se puede controlar scroll del iframe (cross-origin)');
    }
  };

  if (!open) return null;

  const handleRetry = () => {
    setFailed(false);
    setLoaded(false);

    try {
      frameRef.current?.contentWindow?.location.reload();
    } catch {
      if (frameRef.current) {
        const src = frameRef.current.src;
        frameRef.current.src = "about:blank";
        setTimeout(() => {
          if (frameRef.current) frameRef.current.src = src;
        }, 40);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Contenedor Modal - AJUSTADO PARA MAXIMIZAR ALTURA */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Vista previa: ${title}`}
        className="relative z-[61] w-full max-w-7xl h-[95vh] rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col"
      >
        {/* Header - MÁS COMPACTO */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200 flex-shrink-0">
          <div className="font-heading font-semibold truncate text-gray-900 text-sm md:text-base">
            {title}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-2 rounded-lg hover:bg-black/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido - USA FLEX-1 PARA OCUPAR TODO EL ESPACIO */}
        <div className="relative flex-1 bg-white overflow-hidden">
          {!loaded && !failed && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="animate-pulse text-gray-600">
                Cargando vista previa…
              </div>
            </div>
          )}

          {failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
              <p className="text-gray-600">
                Esta demo no permite ser embebida en un iframe.
              </p>
              <div className="flex gap-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-black/85 transition-all"
                >
                  Abrir en nueva pestaña
                </a>
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-black/60 text-black hover:bg-black/6 transition-all"
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
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleIframeLoad}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
