
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onReservationClick: () => void;
}

const HeroSection = ({ onReservationClick }: HeroSectionProps) => {
  return (
    <section id="home" className="relative overflow-hidden py-20 sparkle-bg">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-8xl mb-6 animate-bounce-gentle">🧚‍♀️✨</div>
          <h1 className="text-5xl md:text-7xl font-playful font-bold rainbow-text mb-6 animate-fade-in">
            شهربازی فرشته
          </h1>
          <p className="text-xl m-2xl text-gray-700 mb-8 animate-fade-in">
            مکانی آرام برای کودکان شما
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">🏰</div>
              <p className="font-playful text-purple-700">محیطی شاد و امن برای بازی</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">🧁</div>
              <p className="font-playful text-pink-600">برگزاری جشن تولد</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">📚</div>
              <p className="font-playful text-blue-600">کلاس‌های آموزشی و تفریحی</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">🥤</div>
              <p className="font-playful text-green-600">کافه کودک</p>
            </div>
          </div>
          <Button 
            size="lg" 
            onClick={onReservationClick}
            className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful text-lg px-8 py-4 rounded-full animate-bounce-gentle"
          >
            رزرو تولد 🎂
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
