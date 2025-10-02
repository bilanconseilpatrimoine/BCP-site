"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full gold-gradient" />
            <span className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Patrimoine & Conseils</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Cabinet de courtage en gestion de patrimoine. Nous construisons des stratégies sur-mesure avec une approche humaine et pérenne.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/notre-methode" className="hover:underline">Notre méthode</Link></li>
              <li><Link href="/nos-expertises" className="hover:underline">Nos expertises</Link></li>
              <li><Link href="/qui-sommes-nous" className="hover:underline">Qui sommes-nous</Link></li>
              <li><Link href="/nos-partenaires" className="hover:underline">Nos partenaires</Link></li>
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>01 23 45 67 89</li>
              <li><a href="mailto:contact@patrimoine-conseils.fr" className="hover:underline">contact@patrimoine-conseils.fr</a></li>
              <li>123 Avenue de la République, 75000 Paris</li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>
            <Link href="/mentions-legales" className="font-semibold text-foreground hover:underline">Mentions légales</Link>
            {" "}· ORIAS n° 12345678 · MIA, CIF, Courtier en assurance
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Patrimoine & Conseils. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}