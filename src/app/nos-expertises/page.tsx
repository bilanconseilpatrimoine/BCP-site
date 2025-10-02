"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Landmark, PiggyBank, Briefcase, LineChart, Shield } from "lucide-react";

const blocks = {
  investissement: [
    { icon: LineChart, title: "Allocations financières", desc: "OPCVM, ETF, mandats de gestion et solutions structurées selon votre profil." },
    { icon: PiggyBank, title: "Épargne & assurance-vie", desc: "Contrats haut de gamme, unités de compte, fonds euro nouvelle génération." },
    { icon: Briefcase, title: "Private equity & immobilier", desc: "FCPR, SCPI/SCI, club deals, démembrement et immobilier géré." },
  ],
  fiscalite: [
    { icon: Landmark, title: "Optimisation fiscale", desc: "Pacte Dutreil, PER, Girardin, dispositifs LMNP/LMP et ingénierie juridique." },
    { icon: PieChart, title: "Structuration patrimoniale", desc: "Holding, démembrement, donations, usufruit temporaire, société civile." },
  ],
  retraite: [
    { icon: PiggyBank, title: "Préparer la retraite", desc: "PER individuel/collectif, rachats de trimestres, simulation de droits." },
    { icon: Shield, title: "Prévoyance & protection", desc: "Contrats TNS, cadre, homme clé, garantie croisée d'associés." },
  ],
  transmission: [
    { icon: Landmark, title: "Transmission & succession", desc: "Dons, donations-partage, clauses bénéficiaires, stratégies intergénérationnelles." },
    { icon: Shield, title: "Protection du conjoint", desc: "Optimisation matrimoniale, clauses spécifiques, assurance-décès." },
  ],
};

export default function Page() {
  const renderCards = (items: { icon: any; title: string; desc: string }[]) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
        <Card key={b.title} className="transition-transform hover:-translate-y-1 hover:shadow-xl glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <b.icon className="h-6 w-6" style={{ color: "var(--accent)" }} />
              <CardTitle className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>{b.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551281044-8d8d6aa2d407?q=80&w=2000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.35,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Nos expertises</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Une vision à 360° pour orchestrer investissement, fiscalité, retraite et transmission avec exigence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="investissement" className="w-full">
          <TabsList className="grid grid-cols-2 sm:flex sm:w-auto">
            <TabsTrigger value="investissement">Investissement</TabsTrigger>
            <TabsTrigger value="fiscalite">Fiscalité</TabsTrigger>
            <TabsTrigger value="retraite">Retraite</TabsTrigger>
            <TabsTrigger value="transmission">Transmission</TabsTrigger>
          </TabsList>
          <div className="mt-8 space-y-8">
            <TabsContent value="investissement">{renderCards(blocks.investissement)}</TabsContent>
            <TabsContent value="fiscalite">{renderCards(blocks.fiscalite)}</TabsContent>
            <TabsContent value="retraite">{renderCards(blocks.retraite)}</TabsContent>
            <TabsContent value="transmission">{renderCards(blocks.transmission)}</TabsContent>
          </div>
        </Tabs>
      </section>
    </main>
  );
}