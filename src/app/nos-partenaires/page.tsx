"use client";

import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "Assureur A" },
  { name: "Assureur B" },
  { name: "Société de Gestion C" },
  { name: "Banque Privée D" },
  { name: "Immobilier E" },
  { name: "Asset Manager F" },
  { name: "Maison G" },
  { name: "Maison H" },
];

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.35,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Nos partenaires</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Une sélection exigeante d'acteurs reconnus: assureurs, sociétés de gestion, établissements bancaires et spécialistes immobiliers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <Card key={p.name} className="glass-card">
              <CardContent className="p-6 flex items-center justify-center h-28">
                <span className="text-center text-base font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{p.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border glass-card p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Architecture ouverte</h2>
          <p className="mt-3 text-muted-foreground">
            Nous travaillons en architecture ouverte pour retenir les meilleures solutions du marché, au service de vos objectifs et de votre niveau de risque.
          </p>
        </div>
      </section>
    </main>
  );
}