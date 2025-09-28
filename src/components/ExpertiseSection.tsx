import { Button } from "./ui/button";
import { 
  TrendingUp, 
  Home, 
  Shield, 
  CreditCard, 
  Briefcase, 
  PiggyBank,
  Calculator,
  FileText,
  ArrowRight
} from "lucide-react";

const ExpertiseSection = () => {
  const expertises = [
    {
      icon: Calculator,
      title: "Ingénierie Financière",
      description: "Structurations complexes, optimisation fiscale et montages patrimoniaux sur-mesure.",
      features: ["Holdings patrimoniales", "Démembrements", "Trusts et fiducies", "Optimisation ISF/IFI"]
    },
    {
      icon: TrendingUp,
      title: "Placements Financiers",
      description: "Gestion diversifiée et performance optimisée selon votre profil de risque.",
      features: ["Gestion pilotée", "Fonds d'investissement", "Private equity", "Marchés actions"]
    },
    {
      icon: Home,
      title: "Placements Immobiliers",
      description: "Investissements immobiliers rentables et défiscalisants.",
      features: ["SCPI de rendement", "Immobilier locatif", "Lois Pinel, Malraux", "OPCI & SCI"]
    },
    {
      icon: Shield,
      title: "Prévoyance & Protection",
      description: "Solutions de protection pour vous et votre famille.",
      features: ["Assurance-vie", "Prévoyance décès", "Invalidité/Incapacité", "Dépendance"]
    },
    {
      icon: CreditCard,
      title: "Assurance Emprunteur",
      description: "Optimisation et renégociation de vos assurances de prêts.",
      features: ["Délégation d'assurance", "Renégociation contrats", "Garanties adaptées", "Économies substantielles"]
    },
    {
      icon: FileText,
      title: "Transmission Patrimoniale",
      description: "Anticipation et optimisation de la transmission de votre patrimoine.",
      features: ["Donations optimisées", "Pactes familiaux", "Assurance-vie", "Successions"]
    }
  ];

  return (
    <section id="expertises" className="py-24 bg-white">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Briefcase className="h-5 w-5 text-gold mr-2" />
            <span className="text-gold font-semibold">Nos Domaines d'Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Des Solutions Complètes
            <br />
            <span className="text-gold">Pour Votre Patrimoine</span>
          </h2>
          
          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Notre expertise couvre l'ensemble des problématiques patrimoniales pour vous offrir 
            des solutions intégrées et parfaitement adaptées à vos besoins.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-hero p-8 rounded-xl shadow-subtle hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-xl mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-navy mb-4">
                  {expertise.title}
                </h3>
                
                <p className="text-navy/70 mb-6 leading-relaxed">
                  {expertise.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {expertise.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-navy/80">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline-gold" size="sm" className="group-hover:bg-gold group-hover:text-white">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-beige/20 p-12 rounded-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-navy mb-6">
              Besoin d'Un Conseil Personnalisé ?
            </h3>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">
              Nos experts sont à votre disposition pour analyser votre situation et vous proposer 
              les meilleures stratégies d'optimisation patrimoniale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                <PiggyBank className="mr-2 h-5 w-5" />
                Bilan patrimonial gratuit
              </Button>
              <Button variant="outline-navy" size="lg">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;