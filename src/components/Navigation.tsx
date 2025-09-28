import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#presentation", label: "Qui sommes-nous" },
    { href: "#methode", label: "Notre méthode" },
    { href: "#expertises", label: "Nos expertises" },
    { href: "#partenaires", label: "Partenaires" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-subtle">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-gradient-gold">
              Patrimoine Expert
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-navy hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="gold" size="sm">
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-beige">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-navy hover:text-gold transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="gold" size="sm" className="w-full">
                  Prendre RDV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;