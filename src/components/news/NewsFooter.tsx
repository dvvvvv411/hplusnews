import { Link } from "react-router-dom";

const NewsFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-black text-lg text-foreground">H+</div>
          <div className="flex gap-6">
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
          <p>© 2026 H+ News GmbH</p>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;
