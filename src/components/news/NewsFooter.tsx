import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const NewsFooter = () => {
  const footerLinks = [
    {
      title: "Rubriken",
      links: ["Politik", "Wirtschaft", "Krypto", "Technologie", "Sport", "Unterhaltung"],
    },
    {
      title: "Service",
      links: ["Newsletter", "RSS-Feeds", "App", "Archiv", "Abo-Service"],
    },
    {
      title: "Unternehmen",
      links: ["Über uns", "Karriere", "Presse", "Werbung", "Mediadaten"],
    },
    {
      title: "Rechtliches",
      links: ["Impressum", "Datenschutz", "AGB", "Cookie-Einstellungen"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-16">

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-accent text-accent-foreground font-black text-2xl px-3 py-1 inline-block mb-4">
              H+
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Deutschlands führendes Nachrichtenportal für Wirtschaft und Technologie.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2026 H+ News GmbH. Alle Rechte vorbehalten.</p>
          <p>
            Ein Produkt der <span className="text-accent">H+ Media Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;
