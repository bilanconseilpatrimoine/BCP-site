"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Stethoscope, 
  Briefcase, 
  Trophy, 
  Globe, 
  ArrowRight,
  Users,
  Target,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const clientProfiles = [
    {
      icon: Building2,
      title: "Chefs d'entreprises",
      description: "Optimisation fiscale, transmission d'entreprise, sécurisation du patrimoine professionnel et personnel avec des solutions sur-mesure.",
      highlights: ["Pacte Dutreil", "Holding patrimoniale", "Transmission d'entreprise", "Protection du dirigeant"]
    },
    {
      icon: Stethoscope,
      title: "Professions libérales",
      description: "Préparation retraite, gestion de trésorerie, prévoyance et couverture des risques spécifiques aux métiers médicaux, juridiques et du chiffre.",
      highlights: ["PER professionnel", "Prévoyance TNS", "Gestion de trésorerie", "Protection des revenus"]
    },
    {
      icon: Briefcase,
      title: "Cadres d'entreprises",
      description: "Valorisation des revenus, investissement intelligent, préparation succession et retraite avec des solutions adaptées à votre profil.",
      highlights: ["Épargne salariale", "PER individuel", "Assurance vie", "Transmission patrimoniale"]
    },
    {
      icon: Trophy,
      title: "Sportifs de haut niveau",
      description: "Gestion de carrière, anticipation des revenus fluctuants, protection et diversification patrimoniale pour sécuriser l'avenir.",
      highlights: ["Gestion des revenus", "Diversification", "Protection familiale", "Préparation post-carrière"]
    },
    {
      icon: Globe,
      title: "Frontaliers / Expatriés",
      description: "Optimisation fiscale internationale, gestion du patrimoine entre deux pays, sécurisation juridique et financière.",
      highlights: ["Fiscalité internationale", "Double résidence", "Protection juridique", "Optimisation transfrontalière"]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop)",
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
            Nos clients
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 max-w-2xl text-white/90"
          >
            Nous accompagnons différents profils avec des besoins patrimoniaux spécifiques
          </motion.p>
        </div>
      </section>

      {/* Présentation générale */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Users className="h-12 w-12" style={{ color: "var(--accent)" }} />
          </div>
          <h2 className="text-3xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Des solutions adaptées à chaque profil
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Notre cabinet conseille différents types de clients avec des besoins patrimoniaux variés. 
            Chaque profil bénéficie d'une approche personnalisée et de solutions sur-mesure, 
            qu'il s'agisse d'optimisation fiscale, de transmission, de préparation retraite ou de protection patrimoniale.
          </p>
        </div>
      </section>

      {/* Profils clients */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clientProfiles.map((profile, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={initialVariants}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 border-l-4 border-l-blue-600/20 hover:border-l-blue-600/60 hover:bg-gradient-to-br hover:from-blue-50/30 hover:to-indigo-50/20 glass-card">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <profile.icon className="h-8 w-8 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <CardTitle className="text-xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {profile.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-start">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground/80 mb-3">Solutions clés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.highlights.map((highlight, idx) => (
                        <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                      >
                        {highlight}
                      </span>
                    ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-action */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Target className="h-12 w-12" style={{ color: "var(--accent)" }} />
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chaque situation est unique. Discutons de votre projet patrimonial 
            et découvrons ensemble les solutions les plus adaptées à vos objectifs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Discutons de votre projet
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
