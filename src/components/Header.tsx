"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
          <div className="leading-tight">
            <span className="block text-[11px] text-muted-foreground tracking-[0.2em]">CABINET</span>
            <span className="block text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Bilan Conseil Patrimoine</span>
          </div>
        </Link>

        {/* Responsive nav - Desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
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
          {/* Première ligne - 3 premiers liens */}
          <div className="flex items-center gap-2">
            {nav.slice(0, 3).map((n) => {
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
            {nav.slice(3).map((n) => {
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-2 py-1 text-xs font-semibold text-black shadow-none gold-gradient shimmer-gold hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 active:scale-95 transition-all duration-200 min-h-8 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              RDV
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background/80"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          {open ? (
            <div className="fixed inset-0 z-[60]">
              <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-background shadow-xl border-l p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full gold-gradient" />
                    <span className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Bilan Conseil Patrimoine</span>
                  </div>
                  <button aria-label="Fermer le menu" onClick={() => setOpen(false)} className="h-8 w-8 inline-flex items-center justify-center rounded-md border">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <nav className="mt-8 grid gap-4">
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-base transition-colors backdrop-blur-md",
                        (n.href === "/" ? pathname === "/" : pathname.startsWith(n.href))
                          ? "bg-white/25 text-[#D4AF37] shadow-[0_0_12px_#D4AF37]/30"
                          : "text-[#1A2B6D] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] hover:shadow-[0_0_12px_#D4AF37]/20",
                      ].join(" ")}
                    >
                      <span style={{ fontFamily: "var(--font-heading)" }}>{n.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;