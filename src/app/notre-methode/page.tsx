"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Compass, Target, ChartLine, ShieldHalf, Handshake } from "lucide-react";

export default function Page() {
  const steps = [
    { icon: Compass, title: "Découverte & Bilan", desc: "Comprendre et analyser votre situation personnelle, professionnelle, patrimoniale et fiscale." },
    { icon: Target, title: "Objectifs & Priorités", desc: "Définir des objectifs clairs par: enrichissement, protection familiale, optimisation fiscale et successorale." },
    { icon: ChartLine, title: "Stratégie sur-mesure", desc: "Construire une architecture patrimoniale adaptée à votre horizon et votre profil de risque." },
    { icon: ShieldHalf, title: "Mise en œuvre sécurisée", desc: "sélection des solutions hauts de gamme avec des conditions d'accès préférentielles." },
    { icon: Handshake, title: "Suivi & arbitrages", desc: "Mesurer les performances et ajuster en continu face aux évolutions de vie et de marché." },
  ];

  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.35,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <motion.h1 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl font-semibold" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Notre méthode
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 max-w-2xl text-white/90"
          >
            Une démarche structurée, transparente et centrée sur vos objectifs, pour une stratégie patrimoniale pérenne.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, index) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={initialVariants}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <s.icon className="h-7 w-7" style={{ color: "var(--accent)" }} />
                    <div>
                      <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl border glass-card p-6 md:p-8"
        >
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Ce qui fait la différence</h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="independance">
              <AccordionTrigger className="text-left">Indépendance et transparence des rémunérations</AccordionTrigger>
              <AccordionContent>
                Nos conseils sont délivrés en totale objectivité, avec une transparence claire sur les frais et notre mode de rémunération.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="architecture-ouverte">
              <AccordionTrigger className="text-left">Architecture ouverte et sélection rigoureuse</AccordionTrigger>
              <AccordionContent>
                Accès à une large gamme de partenaires: sociétés de gestion, assureurs, banques privées et acteurs immobiliers de premier plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="suivi">
              <AccordionTrigger className="text-left">Suivi proactif et reporting</AccordionTrigger>
              <AccordionContent>
                Un comité de suivi périodique avec tableaux de bord, indicateurs de risque et analyse de performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="h-5 w-5" style={{ color: "var(--accent)" }} />
            Démarche documentée et conforme (ORIAS, DDA).
          </div>
        </motion.div>
      </section>
    </main>
  );
}