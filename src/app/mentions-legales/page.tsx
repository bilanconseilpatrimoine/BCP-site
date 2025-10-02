export default function MentionsLegalesPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 royal-gradient opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
            Mentions légales & Confidentialité
          </h1>
          <p className="mt-3 max-w-3xl text-white/90">
            Transparence, conformité et protection de vos données personnelles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <article className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Éditeur du site</h2>
          <p>
            Patrimoine & Conseils — 123 Avenue de la République, 75000 Paris — Tél. 01 23 45 67 89 —
            Email: contact@patrimoine-conseils.fr.
          </p>
          <p>Directeur de la publication: M. Dupont.</p>
        </article>

        <article className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Statuts & enregistrements</h2>
          <ul className="list-disc pl-6">
            <li>ORIAS n° 12345678</li>
            <li>CIF — Membre d’une association agréée</li>
            <li>Courtier en assurance</li>
          </ul>
        </article>

        <article className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Protection des données (RGPD)</h2>
          <p>
            Les informations collectées via nos formulaires sont nécessaires au traitement de vos demandes et
            sont destinées exclusivement à Patrimoine & Conseils. Conformément au RGPD, vous disposez d’un droit
            d’accès, de rectification, d’opposition, d’effacement, de limitation et de portabilité de vos données.
          </p>
          <p>
            Pour exercer ces droits: contact@patrimoine-conseils.fr. Vos données sont conservées pour la durée
            strictement nécessaire aux finalités poursuivies.
          </p>
        </article>

        <article className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Cookies</h2>
          <p>
            Nous utilisons des cookies strictement nécessaires au fonctionnement du site et des cookies de mesure
            d’audience anonymisés. Vous pouvez configurer vos préférences via les réglages de votre navigateur.
          </p>
        </article>

        <article className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        </article>
      </section>
    </main>
  );
}