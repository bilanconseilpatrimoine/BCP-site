"use client";
import Link from "next/link";
import Logo from "./Logo";

const heading = { fontFamily: "var(--font-heading)" };
const city = "text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2B6D]";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Logo et description */}
          <div className="flex flex-col justify-center">
            <Link
              href="/"
              aria-label="Bilan Conseil Patrimoine — Accueil"
              className="inline-flex items-center gap-3 self-start"
            >
              <Logo size="lg" />
              <span className="text-lg font-semibold leading-tight text-[#1A2B6D]" style={heading}>
                BILAN CONSEIL<br />PATRIMOINE
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[#1A2B6D] leading-relaxed">
              Cabinet indépendant de conseil patrimonial.<br />
              Nous proposons un accompagnement sur mesure, alliant expertise, disponibilité et vision patrimoniale durable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-start justify-between">
              <Link
                href="/contact"
                className="inline-block border-b border-[#D4AF37] pb-1 text-xl text-[#1A2B6D] hover:opacity-80 transition-opacity"
                style={heading}
              >
                Nous contacter
              </Link>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Link href="https://linkedin.com/company/bilan-conseil-patrimoine" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="https://instagram.com/bilanconseilpatrimoine" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#1A2B6D]">
              <div>
                <p className={city}>Paris</p>
                <p className="leading-snug">229 rue Saint-Honoré<br />75001 Paris</p>
              </div>
              <div>
                <p className={city}>Genève</p>
                <p className="leading-snug">Cours des Bastions 13<br />1205 Genève</p>
              </div>
              <div>
                <p className={city}>Lyon</p>
                <p className="leading-snug">52 boulevard des Belges<br />69006 Lyon</p>
              </div>
              <div>
                <p className={city}>Aix-en-Provence</p>
                <p className="text-xs">Sur rendez-vous</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#1A2B6D]/20 py-3 text-xs text-muted-foreground">
          <p>SAS au capital social de 26 000 € — SIREN 930 931 456 — RCS PARIS — IAS — Conseil en Gestion de Patrimoine</p>
          <div className="mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Bilan Conseil Patrimoine</p>
            <p className="italic text-[#1A2B6D]">Membre de la CNCGP · ORIAS n° 24005582</p>
            <Link href="/mentions-legales" className="hover:text-foreground hover:underline transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
