"use client";

import { motion } from "framer-motion";

export default function MentionsLegalesPage() {
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
          <motion.h1 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl md:text-4xl font-semibold" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mentions légales & Confidentialité
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={initialVariants}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-3 max-w-3xl text-white/90"
          >
            Transparence, conformité et protection de vos données personnelles.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="prose prose-neutral max-w-none"
        >
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Éditeur du site</h2>
          <p>
            Bilan Conseil Patrimoine — 123 Avenue de la République, 75000 Paris — Tél. 07 65 29 96 60 —
            Email: contact@bilanconseilpatrimoine.com
          </p>
          <p>Directeur de la publication: Mme Aknin Noémie.</p>
        </motion.article>

        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="prose prose-neutral max-w-none"
        >
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Statuts & enregistrements</h2>
          <ul className="list-disc pl-6">
            <li>ORIAS n° 24005582</li>
            <li>COA Courtier d'assurance</li>
          </ul>
        </motion.article>

        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="prose prose-neutral max-w-none"
        >
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Protection des données (RGPD)</h2>
          <p>
            Les informations collectées via nos formulaires sont nécessaires au traitement de vos demandes et
            sont destinées exclusivement à Bilan Conseil Patrimoine. Conformément au RGPD, vous disposez d'un droit
            d'accès, de rectification, d'opposition, d'effacement, de limitation et de portabilité de vos données.
          </p>
          <p>
            Pour exercer ces droits: contact@bilanconseilpatrimoine.com Vos données sont conservées pour la durée
            strictement nécessaire aux finalités poursuivies.
          </p>
        </motion.article>

        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="prose prose-neutral max-w-none"
        >
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Cookies</h2>
          <p>
            Nous utilisons des cookies strictement nécessaires au fonctionnement du site et des cookies de mesure
            d'audience anonymisés. Vous pouvez configurer vos préférences via les réglages de votre navigateur.
          </p>
        </motion.article>

        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={initialVariants}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="prose prose-neutral max-w-none"
        >
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        </motion.article>
      </section>
    </main>
  );
}