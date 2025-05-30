
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
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
      color: 'from-yellow-300 to-amber-400'
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
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
