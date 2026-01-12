import { Link } from "react-router-dom";

const NewsFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Obere Zeile: Logo und Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-accent text-accent-foreground font-black text-2xl px-3 py-1">
                H+
              </div>
              <span className="text-xl font-bold text-foreground">NEWS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Aktuelle Nachrichten. Fundierte Analysen.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              AGB
            </Link>
          </div>
        </div>
        
        {/* Untere Zeile: Copyright */}
        <div className="pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 H+ News GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;
