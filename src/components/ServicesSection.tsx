
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleCafeMenuClick = () => {
    navigate('/cafe-menu');
  };

  const services = [
    {
      title: 'جشن تولد',
      description: 'برگزاری جشن تولد با تم‌های متنوع و جذاب برای کودکان',
      icon: '🧁',
      color: 'from-pink-300 to-rose-400'
    },
    {
      title: 'شهر مشاغل',
      description: 'محیطی برای آشنایی کودکان با مشاغل مختلف به صورت عملی و سرگرم‌کننده',
      icon: '🏗️',
      color: 'from-blue-300 to-sky-400'
    },
    {
      title: 'کافه کودک',
      description: 'محیطی دوستانه برای صرف نوشیدنی و خوراکی‌های سالم و خوشمزه',
      icon: '🥤',
      color: 'from-yellow-300 to-amber-400',
      hasButton: true
    },
    {
      title: 'گیم‌نت',
      description: 'بازی‌های رایانه‌ای مناسب سن کودکان با نظارت مربیان',
      icon: '🎮',
      color: 'from-green-300 to-emerald-400'
    },
    {
      title: 'کلاس‌های آموزشی',
      description: 'کلاس‌های آموزشی متنوع از جمله زبان انگلیسی برای کودکان',
      icon: '📚',
      color: 'from-purple-300 to-violet-400'
    },
    {
      title: 'فضای بازی',
      description: 'محیطی امن و شاد برای بازی و تفریح کودکان',
      icon: '🎪',
      color: 'from-indigo-300 to-purple-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-bounce-gentle">🎨</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">خدمات ما</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ما در شهربازی فرشته طیف متنوعی از خدمات سرگرمی و آموزشی را برای کودکان شما فراهم کرده‌ایم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 animate-sparkle">{service.icon}</div>
                <CardTitle className="text-xl font-playful text-purple-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                {service.hasButton && (
                  <Button 
                    onClick={handleCafeMenuClick}
                    size="sm"
                    className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white rounded-full flex items-center gap-2 mx-auto"
                  >
                    <Coffee size={16} />
                    <span>منو کافه</span>
                    <Badge className="bg-white/20 text-xs px-1 py-0">به زودی</Badge>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
