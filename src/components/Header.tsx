"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuProvider";

export const Header = () => {
  const pathname = usePathname();
  const { openMenu } = useMobileMenu();

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:glass-card">
      <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-4 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full gold-gradient shadow-sm" />
          <div className="flex flex-col items-center">
            <span className="text-[11px] text-muted-foreground tracking-[0.2em] mb-1">CABINET</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#1A2B6D]" style={{ fontFamily: "var(--font-heading)" }}>BILAN</span>
              <span className="text-lg font-semibold text-[#1A2B6D]" style={{ fontFamily: "var(--font-heading)" }}>CONSEIL</span>
            </div>
            <span className="text-lg font-semibold text-[#1A2B6D]" style={{ fontFamily: "var(--font-heading)" }}>PATRIMOINE</span>
          </div>
        </Link>

        {/* Responsive nav - Desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-10">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors min-h-12 min-w-24",
                  "backdrop-blur-md",
                  active
                    ? "bg-white/25 text-[#D4AF37] shadow-[0_0_12px_#D4AF37]/30"
                    : "text-[#1A2B6D] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] hover:shadow-[0_0_12px_#D4AF37]/20",
                ].join(" ")}
               >
                <span style={{ fontFamily: "var(--font-heading)" }}>{n.label}</span>
               </Link>
            );
          })}
        </nav>

        {/* Responsive nav - Tablet */}
        <nav className="hidden md:flex lg:hidden flex-col gap-1">
          {/* Première ligne - 4 premiers liens */}
          <div className="flex items-center gap-2">
            {nav.slice(0, 4).map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "inline-flex items-center justify-center rounded-lg px-2 py-1 text-xs font-medium transition-colors min-h-8 min-w-16",
                    "backdrop-blur-md",
                    active
                      ? "bg-white/25 text-[#D4AF37] shadow-[0_0_12px_#D4AF37]/30"
                      : "text-[#1A2B6D] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] hover:shadow-[0_0_12px_#D4AF37]/20",
                  ].join(" ")}
                 >
                  <span style={{ fontFamily: "var(--font-heading)" }}>{n.label}</span>
                 </Link>
              );
            })}
          </div>
          
          {/* Deuxième ligne - reste des liens + bouton RDV */}
          <div className="flex items-center gap-2">
            {nav.slice(4).map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "inline-flex items-center justify-center rounded-lg px-2 py-1 text-xs font-medium transition-colors min-h-8 min-w-16",
                    "backdrop-blur-md",
                    active
                      ? "bg-white/25 text-[#D4AF37] shadow-[0_0_12px_#D4AF37]/30"
                      : "text-[#1A2B6D] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] hover:shadow-[0_0_12px_#D4AF37]/20",
                  ].join(" ")}
                 >
                  <span style={{ fontFamily: "var(--font-heading)" }}>{n.label}</span>
                 </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            aria-label="Ouvrir le menu"
            onClick={openMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background/80"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;