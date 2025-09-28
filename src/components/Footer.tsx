import { Button } from "./ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter,
  Shield,
  Award,
  Clock
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      "Bilan patrimonial",
      "Gestion de patrimoine",
      "Optimisation fiscale",
      "Placements financiers",
      "Assurance vie",
      "Immobilier"
    ],
    company: [
      "À propos",
      "Notre équipe",
      "Nos certifications",
      "Partenaires",
      "Actualités",
      "Carrières"
    ],
    legal: [
      "Mentions légales",
      "Politique de confidentialité",
      "CGV",
      "RGPD",
      "Médiation",
      "Réclamations"
    ]
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-gold mb-4">
                Patrimoine Expert
              </h3>
              <p className="text-white/70 leading-relaxed">
                Votre cabinet de conseil en gestion de patrimoine. 
                15 ans d'expertise au service de votre réussite financière.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-white/80">+33 1 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-white/80">contact@patrimoine-expert.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <span className="text-white/80">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-gold hover:border-gold">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-gold hover:border-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-gold hover:border-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-6">Informations Légales</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-gold transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-navy-light p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Newsletter Patrimoine</h4>
              <p className="text-white/70 text-sm mb-4">
                Recevez nos conseils et actualités patrimoniales
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm placeholder:text-white/50"
                />
                <Button variant="gold" size="sm">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gold" />
                <span className="text-sm text-white/70">ORIAS Certifié</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-gold" />
                <span className="text-sm text-white/70">CGPI Agréé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-sm text-white/70">15+ ans d'expérience</span>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline-gold" size="sm">
                Consulter nos agréments
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Patrimoine Expert. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-xs text-white/50">
              <span>ORIAS N° XXXXXX</span>
              <span>•</span>
              <span>Garantie Financière AXA</span>
              <span>•</span>
              <span>RCP Generali</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;