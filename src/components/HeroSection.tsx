
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onReservationClick: () => void;
}

const HeroSection = ({ onReservationClick }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/lovable-uploads/bc2f8e0e-45cf-408a-8488-e10d190ac3dd.png',
    '/lovable-uploads/36f23704-6c17-45cf-9630-eeefff350e85.png',
    '/lovable-uploads/91808c1b-b379-41a9-8dd0-4597cd82d01b.png',
    '/lovable-uploads/98bfdb2a-706a-4867-99cf-a89a284df2e9.png',
    '/lovable-uploads/2e2cd731-d732-4002-ae36-0591a855eed7.png',
    '/lovable-uploads/ddc8f56f-18b9-4398-8de7-fbd52378db9c.png',
    '/lovable-uploads/b99096fa-b9a3-42bc-8f73-6d7ebae79671.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative overflow-hidden py-20 min-h-screen flex items-center">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`شهربازی فرشته ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-purple-200/70 to-blue-200/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-8xl mb-6 animate-bounce-gentle">🧚‍♀️✨</div>
          <h1 className="text-5xl md:text-7xl font-playful font-bold rainbow-text mb-6 animate-fade-in drop-shadow-lg">
            شهربازی فرشته
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in font-medium drop-shadow-md">
            مکانی آرام برای کودکان شما
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">🏰</div>
              <p className="font-playful text-purple-700 font-medium">محیطی شاد و امن برای بازی</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">🧁</div>
              <p className="font-playful text-pink-600 font-medium">برگزاری جشن تولد</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">📚</div>
              <p className="font-playful text-blue-600 font-medium">کلاس‌های آموزشی و تفریحی</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">🥤</div>
              <p className="font-playful text-green-600 font-medium">کافه کودک</p>
            </div>
          </div>
          <Button 
            size="lg" 
            onClick={onReservationClick}
            className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful text-lg px-8 py-4 rounded-full animate-bounce-gentle shadow-xl"
          >
            رزرو تولد 🎂
          </Button>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
