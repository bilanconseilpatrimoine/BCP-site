"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alexandre Martin",
    role: "Associé fondateur – Conseil patrimonial",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Claire Dubois",
    role: "Ingénierie patrimoniale – Fiscalité",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Julien Bernard",
    role: "Investissements – Allocation d'actifs",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
  },
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
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.35,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Qui sommes-nous</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Un cabinet indépendant, fondé sur l'exigence, la proximité et l'éthique. Notre mission: créer de la valeur durable pour nos clients.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex items-start gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Notre philosophie</h2>
            <p className="mt-4 text-muted-foreground">
              Nous prônons une approche globale et pédagogique, alliant rigueur financière et compréhension humaine.
              Chaque recommandation est expliquée, chiffrée et contextualisée.
            </p>
          </div>
          <div className="md:w-1/2 grid gap-6 sm:grid-cols-2 mt-8 md:mt-0">
            {["Indépendance", "Exigence", "Transparence", "Proximité"].map((v) => (
              <Card key={v} className="glass-card">
                <CardContent className="p-5">
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>{v}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Des choix éclairés et alignés sur vos intérêts de long terme.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>L'équipe</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name} className="overflow-hidden glass-card">
              <div className="h-56 w-full">
                <Image src={m.img} alt={m.name} width={900} height={600} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}