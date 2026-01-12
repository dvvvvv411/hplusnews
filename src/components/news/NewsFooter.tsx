import { Link } from "react-router-dom";

const NewsFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Links: Logo und Tagline */}
          <div className="flex flex-col items-center lg:items-start gap-1">
            <Link 
              to="/" 
              className="flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-accent text-accent-foreground font-black text-2xl px-3 py-1">
                H+
              </div>
              <span className="text-xl font-bold text-foreground">NEWS</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              Aktuelle Nachrichten. Fundierte Analysen.
            </p>
          </div>
          
          {/* Mitte: Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              AGB
            </Link>
          </div>
          
          {/* Rechts: Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 H+ News GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;
