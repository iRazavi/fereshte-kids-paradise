
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BirthdaySection from '@/components/BirthdaySection';
import ReservationSection from '@/components/ReservationSection';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header activeSection={activeSection} onSectionClick={scrollToSection} />
      <HeroSection onReservationClick={() => scrollToSection('reservation')} />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <BirthdaySection onReservationClick={() => scrollToSection('reservation')} />
      <ReservationSection />
      <FAQ />
      <ContactSection />
      <Footer />

      {/* Mobile Menu Button */}
      <div className="fixed bottom-6 left-6 md:hidden z-50">
        <Button 
          onClick={() => scrollToSection('reservation')}
          className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful rounded-full w-14 h-14 shadow-2xl animate-bounce-gentle"
        >
          🎁
        </Button>
      </div>
    </div>
  );
};

export default Index;
