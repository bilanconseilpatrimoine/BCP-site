"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Landmark, PiggyBank, Briefcase, LineChart, Shield } from "lucide-react";
import { useState } from "react";

const blocks = {
  investissement: [
    { icon: PiggyBank, title: "Épargne & capitalisation", desc: "Assurance vie de droit français et luxembourgeois, contrat de capitalisation." },
    { icon: Briefcase, title: "Private equity & immobilier", desc: "FCPR, SCPI/SCI, club deals, démembrement et immobilier géré." },
    { icon: LineChart, title: "Allocations financières", desc: "OPCVM, ETF, mandats de gestion et solutions structurées selon votre profil." },
  ],
  fiscalite: [
    { icon: Landmark, title: "Optimisation fiscale", desc: "Pacte Dutreil, PER, Malraux, Monuments historiques et Déficit Foncier,dispositifs LMNP/LMP et ingénierie juridique." },
    { icon: PieChart, title: "Structuration patrimoniale", desc: "Holding, démembrement, donations, usufruit temporaire, société civile." },
  ],
  retraite: [
    { icon: PiggyBank, title: "Préparer la retraite", desc: "PER individuel/Epargne salariale : PEE, PERCOL, rachats de trimestres, simulation de droits." },
  ],
  transmission: [
    { icon: Landmark, title: "Transmission & succession", desc: "Dons, donations-partage, clauses bénéficiaires, stratégies intergénérationnelles." },
    { icon: Shield, title: "Protection du conjoint", desc: "Optimisation matrimoniale, clauses spécifiques, assurance-décès." },
  ],
  "prévoyance et protection": [
    { icon: Landmark, title: "PRÉVOYANCE", desc: "Protection financière du TNS, du dirigeant d'entreprise ou du cadre d'entreprise en cas d’aléas de la vie (décès, invalidité, incapacité, dépendance) Sélection rigoureuse du partenaire assureur en fonction de la typologie du métier." },
    { icon: Landmark, title: "assurance emprunteur", desc: "Amélioration des garanties en assurance emprunteur, optimisation du coût global jusqu'à 60% d'économie réalisée." },
  ],
};

export default function Page() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleCardClick = (cardTitle: string) => {
    if (selectedCard === cardTitle) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardTitle);
    }
  };

  const renderCards = (items: { icon: any; title: string; desc: string }[]) => (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b, index) => {
        const isSelected = selectedCard === b.title;
        return (
          <motion.div
            key={b.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={!isSelected ? { y: -8, scale: 1.02, transition: { duration: 0.3 } } : { y: -12, scale: 1.08, transition: { duration: 0.3 } }}
            animate={isSelected ? { y: -12, scale: 1.08, transition: { duration: 0.3 } } : { y: 0, scale: 1, transition: { duration: 0.3 } }}
            onClick={() => handleCardClick(b.title)}
            className="h-full cursor-pointer"
          >
          <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border-l-4 border-l-blue-600/20 hover:border-l-blue-600/60 hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-indigo-50/20 glass-card">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <b.icon className="h-6 w-6 flex-shrink-0" style={{ color: "var(--accent)" }} />
                <CardTitle className="text-lg leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{b.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-start">
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
        );
      })}
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
        <div className="relative mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-white">
          <motion.h1 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-semibold" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nos expertises
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 max-w-2xl text-white/90"
          >
            Une vision à 360° pour orchestrer investissement, fiscalité, retraite et transmission avec exigence.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Tabs defaultValue="investissement" className="w-full">
          <TabsList className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:w-auto h-auto w-full sm:w-auto">
            <TabsTrigger value="investissement" className="text-xs sm:text-sm w-full sm:w-auto">Investissement</TabsTrigger>
            <TabsTrigger value="fiscalite" className="text-xs sm:text-sm w-full sm:w-auto">Fiscalité</TabsTrigger>
            <TabsTrigger value="retraite" className="text-xs sm:text-sm w-full sm:w-auto">Retraite</TabsTrigger>
            <TabsTrigger value="transmission" className="text-xs sm:text-sm w-full sm:w-auto">Transmission</TabsTrigger>
            <TabsTrigger value="prévoyance et protection" className="text-xs sm:text-sm col-span-1 xs:col-span-2 sm:col-span-1 w-full sm:w-auto">Prévoyance et Protection Familiale</TabsTrigger>
          </TabsList>
          <div className="mt-8 space-y-8">
            <TabsContent value="investissement">{renderCards(blocks.investissement)}</TabsContent>
            <TabsContent value="fiscalite">{renderCards(blocks.fiscalite)}</TabsContent>
            <TabsContent value="retraite">{renderCards(blocks.retraite)}</TabsContent>
            <TabsContent value="transmission">{renderCards(blocks.transmission)}</TabsContent>
            <TabsContent value="prévoyance et protection">{renderCards(blocks["prévoyance et protection"])}</TabsContent>
          </div>
        </Tabs>
      </section>
    </main>
  );
}