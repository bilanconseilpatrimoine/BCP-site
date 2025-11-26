"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const partners = [
  {
    name: "Abeille Assurance",
    logo: "/logos/abeille_assurance.png",
    alt: "Logo Abeille Assurance"
  },
  {
    name: "April",
    logo: "/logos/april.png",
    alt: "Logo April"
  },
  {
    name: "Baloise",
    logo: "/logos/baloise.png",
    alt: "Logo Baloise"
  },
  {
    name: "Eiffel",
    logo: "/logos/swisslife.png",
    alt: "Logo swisslife"
  },
  {
    name: "Generali",
    logo: "/logos/generali.png",
    alt: "Logo Generali"
  },
  {
    name: "Intencial",
    logo: "/logos/intencial.png",
    alt: "Logo Intencial"
  },
  {
    name: "MetLife",
    logo: "/logos/metlife.png",
    alt: "Logo MetLife"
  },
  {
    name: "Nortia",
    logo: "/logos/J_sarazin.png",
    alt: "Logo sarazin"
  },
  {
    name: "Odobhf",
    logo: "/logos/oddobhf.png",
    alt: "Logo Odobhf"
  },
  {
    name: "Offi Invest",
    logo: "/logos/swissquote.png",
    alt: "Logo swiss quote invest"
  },
  {
    name: "Rothschild",
    logo: "/logos/rothschild.png",
    alt: "Logo Rothschild"
  },
  {
    name: "Suravenir",
    logo: "/logos/suravenir.png",
    alt: "Logo Suravenir"
  },
  {
    name: "UAF Life",
    logo: "/logos/UBS.png",
    alt: "Logo UBS"
  },
];

export default function Page() {
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/image/nos_partenaires.jpg)",
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
            Nos partenaires
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 max-w-2xl text-white/90"
          >
            Une sélection exigeante d'acteurs reconnus: assureurs, sociétés de gestion, établissements bancaires et spécialistes immobiliers.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((p, index) => (
            <motion.div
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={initialVariants}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="glass-card transition-transform hover:scale-105 hover:shadow-xl overflow-hidden">
                <CardContent className="p-0 flex items-center justify-center h-32 bg-gradient-to-br from-background to-muted/20">
                  <Image
                    src={p.logo}
                    alt={p.alt}
                    width={200}
                    height={128}
                    className="object-contain w-full h-full p-4"
                    style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 rounded-2xl border glass-card p-6 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Architecture ouverte</h2>
          <p className="mt-3 text-muted-foreground">
            Nous travaillons en architecture ouverte pour retenir les meilleures solutions du marché, au service de vos objectifs et de votre niveau de risque.
          </p>
        </motion.div>
      </section>
    </main>
  );
}