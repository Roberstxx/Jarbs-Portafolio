import logo from "@/assets/yarp-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Jarbs Solutions" className="w-8 h-8 rounded-full" />
            <span className="font-heading text-lg font-bold">YARP Solutions</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#precios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Precios
            </a>
            <a
              href="#demos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Demos
            </a>
            <a
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} YARP Solutions. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

