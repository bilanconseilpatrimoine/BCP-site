import { Button } from "./ui/button";
import { Award, Heart, Target, Users } from "lucide-react";

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-24 bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full">
                <Award className="h-5 w-5 text-gold mr-2" />
                <span className="text-gold font-semibold">15+ années d'expertise</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy leading-tight">
                Qui sommes-nous ?
              </h2>
              
              <p className="text-lg text-navy/80 leading-relaxed">
                <span className="text-gold font-semibold">Conseillers Experts certifiés depuis plus de 15 ans</span>
              </p>
              
              <p className="text-lg text-navy/70 leading-relaxed">
                Grâce à notre équipe d'experts patrimoniaux certifiés, nous offrons à nos clients 
                particuliers et professionnels un service de gestion privée haut de gamme et sur mesure 
                avec des solutions adaptées à vos besoins.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 bg-beige/30 rounded-xl border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-navy mb-3 flex items-center">
                <Target className="h-6 w-6 text-gold mr-2" />
                Notre Objectif
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Accompagner nos clients et leurs familles dans la protection, la croissance et 
                la transmission de leur patrimoine, en veillant à leur sécurité financière et 
                à la réalisation de leurs objectifs à long terme.
              </p>
            </div>

            <Button variant="outline-gold" size="lg">
              En savoir plus sur notre équipe
            </Button>
          </div>

          {/* Stats & Values */}
          <div className="space-y-8">
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-hero rounded-xl shadow-subtle">
                <div className="text-3xl font-bold text-gold mb-2">15+</div>
                <div className="text-navy/70">Années d'expérience</div>
              </div>
              <div className="text-center p-6 bg-gradient-hero rounded-xl shadow-subtle">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-navy/70">Clients accompagnés</div>
              </div>
              <div className="text-center p-6 bg-gradient-hero rounded-xl shadow-subtle">
                <div className="text-3xl font-bold text-gold mb-2">€2M+</div>
                <div className="text-navy/70">Patrimoine moyen géré</div>
              </div>
              <div className="text-center p-6 bg-gradient-hero rounded-xl shadow-subtle">
                <div className="text-3xl font-bold text-gold mb-2">98%</div>
                <div className="text-navy/70">Satisfaction client</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-navy">Nos Valeurs</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-subtle">
                  <div className="p-2 bg-gold/10 rounded">
                    <Users className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Excellence & Expertise</h4>
                    <p className="text-sm text-navy/70">Un service d'exception basé sur une expertise reconnue</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-subtle">
                  <div className="p-2 bg-gold/10 rounded">
                    <Heart className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Proximité & Confiance</h4>
                    <p className="text-sm text-navy/70">Une relation durable basée sur l'écoute et la transparence</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-subtle">
                  <div className="p-2 bg-gold/10 rounded">
                    <Target className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Sur-mesure & Performance</h4>
                    <p className="text-sm text-navy/70">Des solutions personnalisées pour optimiser votre patrimoine</p>
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

export default PresentationSection;