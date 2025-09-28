import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Calendar, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 XX XX XX XX",
      action: "Appelez-nous"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@patrimoine-expert.fr",
      action: "Écrivez-nous"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "123 Avenue des Champs-Élysées\n75008 Paris",
      action: "Nous rendre visite"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 9h-18h\nSam: 9h-12h sur RDV",
      action: "Prendre RDV"
    }
  ];

  const availableSlots = [
    "Cette semaine",
    "Semaine prochaine",
    "Dans 2 semaines",
    "Flexible"
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-6">
            <MessageCircle className="h-5 w-5 text-gold mr-2" />
            <span className="text-gold font-semibold">Contactez-nous</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Prenez Rendez-vous
            <br />
            <span className="text-gold">Pour Votre Bilan Gratuit</span>
          </h2>
          
          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Nos experts vous accueillent pour un premier entretien gratuit et sans engagement. 
            Découvrez comment optimiser votre patrimoine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-navy mb-6">
                Demande de Rendez-vous
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Nom complet *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Téléphone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre téléphone"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Disponibilité souhaitée
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableSlots.map((slot, index) => (
                      <button
                        key={index}
                        type="button"
                        className="p-3 text-sm border border-beige rounded-lg hover:border-gold hover:bg-gold/5 transition-colors text-left"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Message (optionnel)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre situation ou vos objectifs..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Demander mon rendez-vous gratuit
                </Button>
                
                <div className="flex items-center space-x-2 text-sm text-navy/60">
                  <CheckCircle className="h-4 w-4 text-gold" />
                  <span>Rendez-vous gratuit et sans engagement</span>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-beige/20 p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy mb-1">{info.title}</h4>
                        <p className="text-navy/70 whitespace-pre-line mb-3">{info.content}</p>
                        <Button variant="outline-gold" size="sm">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Appointment */}
            <div className="bg-gradient-navy p-8 rounded-xl text-white">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold mb-4">
                  Rendez-vous Express
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Besoin d'une réponse rapide ? Nos experts sont disponibles 
                  pour un entretien téléphonique dans les 24h.
                </p>
                <Button variant="gold" size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Rappel immédiat
                </Button>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gold/5 p-6 rounded-xl border border-gold/20">
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-navy mb-2">Notre Engagement</h4>
                <p className="text-sm text-navy/70">
                  Premier rendez-vous gratuit • Analyse personnalisée • Conseils sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;