import { Button } from "./ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "../assets/hero-wealth-management.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-32">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-navy">Votre</span>
                <br />
                <span className="text-gradient-gold">Patrimoine</span>
                <br />
                <span className="text-navy">Entre Expertes Mains</span>
              </h1>
              <p className="text-xl text-navy/80 leading-relaxed max-w-2xl">
                Cabinet de courtage en gestion de patrimoine haut de gamme. 
                Conseillers experts certifiés depuis plus de 15 ans pour un 
                accompagnement personnalisé et sur mesure.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Protection</p>
                  <p className="text-sm text-navy/70">Sécurité garantie</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Croissance</p>
                  <p className="text-sm text-navy/70">Performance optimisée</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Transmission</p>
                  <p className="text-sm text-navy/70">Héritage préservé</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="group">
                Bilan Patrimonial Gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-navy" size="lg">
                Découvrir nos services
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-8 border-t border-beige/50">
              <p className="text-sm text-navy/60 mb-2">Certifié et reconnu par :</p>
              <div className="flex items-center space-x-6">
                <span className="text-gold font-semibold">15+ ans d'expertise</span>
                <span className="text-gold font-semibold">500+ clients satisfaits</span>
                <span className="text-gold font-semibold">Certification CGPI</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img
                src={heroImage}
                alt="Bureau moderne de gestion de patrimoine"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-gold">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">+12.5%</p>
                  <p className="text-sm text-navy/70">Performance moyenne annuelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;