"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-[calc(100vh-64px-64px)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div className="absolute inset-0" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop)", backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay", opacity: 0.35 }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-white">
          <motion.span 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white/10 ring-1 ring-white/20"
          >
            Excellence • Confiance • Sur-mesure
          </motion.span>
          <motion.h1 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Construisons, protégeons et transmettons votre patrimoine
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 max-w-2xl text-white/90"
          >
            Un accompagnement humain et indépendant pour révéler le potentiel de votre patrimoine: stratégie globale, investissements, fiscalité et transmission par des conseils experts certifiés en Gestion de Patrimoine depuis plus de 15 ans.
          </motion.p>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button className="gold-gradient shimmer-gold text-black font-semibold shadow-none hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 active:scale-95 transition-all duration-200" asChild>
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
            {/* <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/notre-methode">Découvrir notre méthode</Link>
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Indépendance & Transparence",
              desc: "Nous sélectionnons les meilleures solutions du marché, en toute objectivité.",
              img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Accompagnement humain",
              desc: "Une relation de confiance, durable, avec un interlocuteur dédié.",
              img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Stratégies sur-mesure",
              desc: "Chaque situation est unique: nous concevons un plan adapté à vos objectifs.",
              img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((v, index) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={initialVariants}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="overflow-hidden glass-card">
                <div className="h-40 w-full">
                  <Image src={v.img} alt="" width={1200} height={400} className="h-full w-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl border p-8 md:p-10 glass-card"
        >
          <div className="md:flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Un premier échange confidentiel et sans engagement</h2>
              <p className="mt-3 text-muted-foreground">Faisons connaissance et esquissons les premiers axes d'optimisation: bilan patrimonial, objectifs de vie, horizon d'investissement et tolérance au risque.</p>
            </div>
            <Button className="mt-6 md:mt-0 gold-gradient shimmer-gold text-black font-semibold shadow-none hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 active:scale-95 transition-all duration-200" asChild>
              <Link href="/contact">Je prends rendez-vous</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}