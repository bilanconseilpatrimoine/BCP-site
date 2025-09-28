import { Button } from "./ui/button";
import { CheckCircle, FileText, LineChart, Target, Users, Zap } from "lucide-react";

const MethodSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Audit Personnalisé",
      description: "Analyse complète de votre situation patrimoniale actuelle et de vos objectifs futurs."
    },
    {
      icon: Target,
      title: "Stratégie Sur-mesure",
      description: "Élaboration d'une stratégie personnalisée adaptée à votre profil et vos ambitions."
    },
    {
      icon: FileText,
      title: "Plan d'Action",
      description: "Mise en place d'un plan d'action concret avec un calendrier de réalisation précis."
    },
    {
      icon: LineChart,
      title: "Suivi & Optimisation",
      description: "Accompagnement continu et ajustements réguliers pour maximiser votre performance."
    }
  ];

  const bilanFeatures = [
    "Analyse de votre situation fiscale",
    "Évaluation de vos placements actuels",
    "Identification des opportunités d'optimisation",
    "Conseil en transmission patrimoniale",
    "Stratégies de défiscalisation",
    "Recommandations personnalisées"
  ];

  return (
    <section id="methode" className="py-24 bg-beige/20">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Zap className="h-5 w-5 text-gold mr-2" />
            <span className="text-gold font-semibold">Notre Méthode</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Bilan Patrimonial Complet
          </h2>
          
          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Une approche méthodique et personnalisée pour analyser, optimiser et faire fructifier 
            votre patrimoine dans le respect de vos objectifs de vie.
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-subtle hover:shadow-gold transition-all duration-300 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-xl mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-display font-semibold text-navy text-lg">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-navy/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold/30 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bilan Patrimonial Details */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-display font-bold text-navy mb-6">
                Votre Bilan Patrimonial
                <span className="text-gold"> Gratuit</span>
              </h3>
              <p className="text-lg text-navy/70 leading-relaxed mb-8">
                Un diagnostic complet de votre patrimoine pour identifier les opportunités 
                d'optimisation et définir la stratégie la plus adaptée à votre profil.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {bilanFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-navy/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg">
                Demander mon bilan gratuit
              </Button>
              <Button variant="outline-navy" size="lg">
                Télécharger notre brochure
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-premium">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Rapport Personnalisé</h4>
                    <p className="text-sm text-navy/70">Analyse détaillée de 25-30 pages</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-beige/30 rounded-lg">
                    <span className="text-navy/80">Situation actuelle</span>
                    <span className="text-gold font-semibold">Analysée</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-beige/30 rounded-lg">
                    <span className="text-navy/80">Optimisations fiscales</span>
                    <span className="text-gold font-semibold">Identifiées</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-beige/30 rounded-lg">
                    <span className="text-navy/80">Plan d'action</span>
                    <span className="text-gold font-semibold">Personnalisé</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-beige">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-gold">100%</span>
                    <span className="text-navy/70">Gratuit & Sans engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;