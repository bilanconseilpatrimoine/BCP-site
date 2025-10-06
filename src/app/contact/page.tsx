"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
  const [consent, setConsent] = useState(false);
  const [subject, setSubject] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const initialVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }),
    []
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!consent) {
      setError("Veuillez accepter la politique de confidentialité.");
      return;
    }

    const form = new FormData(e.currentTarget);
    const nom = String(form.get("nom") || "");
    const email = String(form.get("email") || "");
    const telephone = String(form.get("telephone") || "");
    const message = String(form.get("message") || "");
    const objet = subject || String(form.get("objet") || "");

    if (!nom || !email || !message) {
      setError("Merci de renseigner au minimum votre nom, email et message.");
      return;
    }

    try {
      setLoading(true);
      let token = "";
      if (typeof window !== "undefined" && (window as any).grecaptcha && siteKey) {
        await new Promise<void>((resolve) => (window as any).grecaptcha.ready(() => resolve()));
        token = await (window as any).grecaptcha.execute(siteKey, { action: "submit" });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, email, telephone, message, objet, token }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Envoi impossible");

      setSuccess("Votre demande a bien été envoyée. Nous vous recontactons très vite.");
      if (e.currentTarget) {
        (e.currentTarget as HTMLFormElement).reset();
      }
      setSubject("");
      setConsent(false);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue pendant l'envoi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {/* reCAPTCHA v3 script (chargé en différé) */}
      {siteKey ? (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} strategy="lazyOnload" />
      ) : null}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2000&auto=format&fit=crop)",
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
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6 } }}
            viewport={{ once: true, margin: "-10%" }}
            className="mt-4 max-w-2xl text-white/90"
          >
            Démarrons un premier échange confidentiel et sans engagement.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div className="grid gap-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Label htmlFor="nom">Nom complet</Label>
              <Input id="nom" name="nom" placeholder="Votre nom" required />
            </motion.div>
            <motion.div className="grid gap-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }} viewport={{ once: true }}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="vous@exemple.com" required />
            </motion.div>
            <motion.div className="grid gap-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }} viewport={{ once: true }}>
              <Label htmlFor="telephone">Téléphone</Label>
              <Input id="telephone" name="telephone" type="tel" placeholder="06 12 34 56 78" />
            </motion.div>
            <motion.div className="grid gap-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15 } }} viewport={{ once: true }}>
              <Label>Objet</Label>
              <Select onValueChange={setSubject}>
                <SelectTrigger aria-label="Objet">
                  <SelectValue placeholder="Choisissez un objet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bilan-patrimonial">Bilan patrimonial</SelectItem>
                  <SelectItem value="investissement">Investissement</SelectItem>
                  <SelectItem value="fiscalite">Optimisation fiscale</SelectItem>
                  <SelectItem value="retraite">Préparer la retraite</SelectItem>
                  <SelectItem value="transmission">Transmission</SelectItem>
                  <SelectItem value="autre">Autre demande</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>
          <motion.div className="grid gap-2" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} viewport={{ once: true }}>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Votre besoin, vos objectifs…" rows={6} />
          </motion.div>
          <motion.div className="flex items-start gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.25 } }} viewport={{ once: true }}>
            <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))} />
            <Label htmlFor="consent" className="text-sm text-muted-foreground">
              J'accepte d'être contacté(e) et la politique de confidentialité.
            </Label>
          </motion.div>

          {error ? (
            <div className="text-sm text-red-600" role="alert">{error}</div>
          ) : null}
          {success ? (
            <div className="text-sm text-green-700" role="status">{success}</div>
          ) : null}

          <div className="flex justify-end">
            <Button className="gold-gradient shimmer-gold text-black font-semibold shadow-none disabled:opacity-70" type="submit" disabled={loading}>
              {loading ? "Envoi en cours…" : "Envoyer la demande"}
            </Button>
          </div>
        </motion.form>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 text-sm text-muted-foreground">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="font-semibold text-foreground">Téléphone</div>
            <div>07 65 29 96 60</div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            <div className="font-semibold text-foreground">Email</div>
            <div>contact@bilanconseilpatrimoine.com</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="font-semibold text-foreground">Adresse</div>
            <div>229 rue saint honoré, 75001 Paris</div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}