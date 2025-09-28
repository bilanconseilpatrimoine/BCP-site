import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import PresentationSection from "../components/PresentationSection";
import MethodSection from "../components/MethodSection";
import ExpertiseSection from "../components/ExpertiseSection";
import PartnersSection from "../components/PartnersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PresentationSection />
        <MethodSection />
        <ExpertiseSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
