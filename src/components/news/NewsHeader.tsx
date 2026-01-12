import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsHeader = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Politik", href: "#" },
    { label: "Wirtschaft", href: "#" },
    { label: "Krypto", href: "#", active: true },
    { label: "Technologie", href: "#" },
    { label: "Sport", href: "#" },
    { label: "Unterhaltung", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar with branding */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm">12. Januar 2026</span>
            <span className="text-sm hidden md:inline">| Hamburg, 4°C</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Anmelden</span>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              H+ Premium
            </Button>
          </div>
        </div>
      </div>

      {/* Main header with logo */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-accent text-accent-foreground font-black text-3xl px-3 py-1">
              H+
            </div>
            <span className="text-2xl font-bold hidden sm:inline">NEWS</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-sm font-semibold transition-colors hover:bg-muted ${
                    item.active
                      ? "text-accent border-b-2 border-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NewsHeader;
