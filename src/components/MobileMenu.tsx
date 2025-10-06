"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Accueil" },
    { href: "/notre-methode", label: "Notre méthode" },
    { href: "/nos-expertises", label: "Nos expertises" },
    { href: "/nos-clients", label: "Nos clients" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/nos-partenaires", label: "Nos partenaires" },
    { href: "/contact", label: "Contact" },
    { href: "/mentions-legales", label: "Mentions légales" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay sombre qui couvre tout l'écran */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu panel */}
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-[350px] bg-white shadow-2xl border-l border-gray-200">
        {/* Header fixe */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full gold-gradient" />
              <span className="font-semibold text-sm text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                Bilan Conseil Patrimoine
              </span>
            </div>
            <button 
              aria-label="Fermer le menu" 
              onClick={onClose} 
              className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="p-4 space-y-2">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={onClose}
                className={[
                  "block w-full rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                  "border-2 border-solid",
                  active
                    ? "bg-[#D4AF37] text-white border-[#D4AF37] shadow-md"
                    : "bg-white text-[#1A2B6D] border-gray-200 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:text-[#D4AF37]",
                ].join(" ")}
              >
                <span style={{ fontFamily: "var(--font-heading)" }}>{n.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
