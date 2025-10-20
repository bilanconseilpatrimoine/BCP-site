"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star, Shield, Eye, Users, Target, Award } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description: "Plus de 15 ans d'expérience et une veille constante des marchés",
    icon: Star,
  },
  {
    title: "Indépendance",
    description: "Des décisions libres et objectives",
    icon: Shield,
  },
  {
    title: "Transparence",
    description: "Des conseils clairs, accessibles et compréhensibles",
    icon: Eye,
  },
];

const teamProfiles = [
  { title: "Conseillers patrimoniaux", icon: Users },
  { title: "Analystes financiers", icon: Target },
  { title: "Gérants d'actifs", icon: Award },
];

const methodology = [
  "Une analyse approfondie des marchés et instruments financiers",
  "Une vision long terme, adaptée à vos objectifs et à votre profil",
  "Une stratégie personnalisée, pensée pour protéger et faire croître votre patrimoine",
];

export default function Page() {
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      {/* Hero Section */}
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
          <motion.h1 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl font-semibold" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Qui sommes-nous
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed"
          >
            Depuis plus de 15 ans, Bilan Conseil Patrimoine accompagne ses clients dans la gestion, l'optimisation et la transmission de leur patrimoine.
          </motion.p>
        </div>
      </section>

      {/* Notre approche */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl relative"
        >
          <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
          <h2 className="text-3xl font-semibold mb-6 ml-6" style={{ fontFamily: "var(--font-heading)" }}>
            Notre approche
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed ml-6">
            Nous ne nous contentons pas de conseiller : nous pensons, analysons et structurons chaque stratégie avec la rigueur de professionnels de la finance et de la gestion d'actifs.
          </p>
        </motion.div>
      </section>

      {/* Notre équipe */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-50/30 to-indigo-50/20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative max-w-4xl">
            <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <h2 className="text-3xl font-semibold mb-6 ml-6" style={{ fontFamily: "var(--font-heading)" }}>
              Notre équipe
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed ml-6">
              Notre équipe rassemble des expertises complémentaires pour vous offrir un accompagnement à 360°
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {teamProfiles.map((profile, index) => (
              <motion.div
                key={profile.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={initialVariants}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="h-full"
              >
                <Card className="glass-card h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 border-l-4 border-l-blue-600/20 hover:border-l-blue-600/40">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <profile.icon className="h-6 w-6" style={{ color: "var(--accent)" }} />
                      <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                        {profile.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Notre méthodologie */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative max-w-4xl">
            <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <h2 className="text-3xl font-semibold mb-6 ml-6" style={{ fontFamily: "var(--font-heading)" }}>
              Notre méthodologie
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed ml-6">
              Chaque décision repose sur une méthodologie rigoureuse
            </p>
          </div>
          <div className="space-y-4 max-w-3xl">
            {methodology.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={initialVariants}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#1e3a8a" }} />
                </motion.div>
                <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Indépendance et rigueur */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-50/30 to-indigo-50/20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl relative"
        >
          <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
          <h2 className="text-3xl font-semibold mb-6 ml-6" style={{ fontFamily: "var(--font-heading)" }}>
            Indépendance et rigueur
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed ml-6">
            Nous opérons en totale indépendance, guidés par la performance durable et la sécurité. 
            Chaque recommandation suit une méthodologie rigoureuse, pour offrir des solutions fiables, optimisées et compréhensibles.
          </p>
        </motion.div>
      </section>

      {/* Nos valeurs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative max-w-4xl mb-12">
            <div className="absolute left-0 top-0 w-1 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
            <h2 className="text-3xl font-semibold mb-8 ml-6" style={{ fontFamily: "var(--font-heading)" }}>
              Nos valeurs
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={initialVariants}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <Card className="glass-card h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border-l-4 border-l-blue-600/20 hover:border-l-blue-600/60 hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-indigo-50/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <value.icon className="h-8 w-8" style={{ color: "var(--accent)" }} />
                      </motion.div>
                      <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Notre objectif */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 pb-20 bg-gradient-to-br from-blue-50/30 to-indigo-50/20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-4xl mx-auto relative"
        >
          <h2 className="text-3xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Notre objectif
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Votre sérénité. Vous permettre de prendre les bonnes décisions patrimoniales en toute confiance, 
            avec la certitude que votre patrimoine est entre des mains expertes et expérimentées.
          </p>
        </motion.div>
      </section>
    </main>
  );
}