import { Award, Handshake, Shield, Star } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      category: "Assureurs Vie & Épargne",
      companies: [
        "AXA France",
        "Generali Patrimoine",
        "Crédit Agricole Assurances",
        "BNP Paribas Cardif",
        "Allianz France",
        "Swiss Life"
      ]
    },
    {
      category: "Prévoyance & Protection",
      companies: [
        "Malakoff Humanis",
        "AG2R La Mondiale",
        "Mutex",
        "MACSF Prévoyance",
        "Groupama Prévoyance",
        "CNP Assurances"
      ]
    },
    {
      category: "Gestion d'Actifs",
      companies: [
        "Amundi Asset Management",
        "BNP Paribas Asset Management",
        "Carmignac Gestion",
        "Etoile Gestion",
        "Lazard Frères Gestion",
        "Rothschild & Co Asset Management"
      ]
    },
    {
      category: "Immobilier & SCPI",
      companies: [
        "Perial Asset Management",
        "LF2L Patrimoine",
        "Sofidy",
        "Paref Gestion",
        "Corum Asset Management",
        "Altixia REIM"
      ]
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "CGPI Certifié",
      description: "Conseiller en Gestion de Patrimoine Indépendant"
    },
    {
      icon: Shield,
      title: "ORIAS",
      description: "Registre des intermédiaires en assurance"
    },
    {
      icon: Star,
      title: "IAS Niveau 1",
      description: "Intermédiaire en assurance supérieur"
    },
    {
      icon: Handshake,
      title: "Chambre des Notaires",
      description: "Partenariat privilégié"
    }
  ];

  return (
    <section id="partenaires" className="py-24 bg-beige/20">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Handshake className="h-5 w-5 text-gold mr-2" />
            <span className="text-gold font-semibold">Nos Partenaires de Confiance</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Un Réseau d'Excellence
            <br />
            <span className="text-gold">À Votre Service</span>
          </h2>
          
          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Nous collaborons avec les leaders du marché pour vous garantir l'accès aux meilleures 
            solutions et conditions du marché.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-subtle text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-xl mx-auto mb-4">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{cert.title}</h3>
                <p className="text-sm text-navy/70">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-subtle">
              <h3 className="text-xl font-display font-semibold text-navy mb-6 pb-4 border-b border-beige">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {category.companies.map((company, companyIndex) => (
                  <div 
                    key={companyIndex}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-beige/30 transition-colors"
                  >
                    <span className="text-navy/80 font-medium">{company}</span>
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-bold text-gold mb-2">25+</div>
              <div className="text-navy/70">Partenaires Premium</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <div className="text-navy/70">Transparence sur les frais</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gold mb-2">24h</div>
              <div className="text-navy/70">Délai de réponse moyen</div>
            </div>
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="mt-16 bg-gradient-hero p-8 rounded-2xl text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="h-16 w-16 text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-display font-bold text-navy mb-4">
              Garantie Qualité & Indépendance
            </h3>
            <p className="text-navy/70 leading-relaxed">
              Notre indépendance nous permet de sélectionner pour vous les meilleures solutions du marché, 
              sans conflit d'intérêt, pour votre seul bénéfice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;