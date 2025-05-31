
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'بابای امیرحسین',
      text: 'بچه‌ام عاشق این جا شده! محیط فوق‌العاده امن و مربیان بسیار مهربان. جشن تولدی که اینجا گرفتیم واقعاً فراموش‌نشدنی بود.',
      icon: '👨‍👧'
    },
    {
      id: 2,
      name: 'مامان آوا',
      text: 'کیفیت خدمات عالی و قیمت‌ها مناسب. بچه‌ها هم خیلی خوش می‌گذرونن و هم چیزهای جدید یاد می‌گیرن.',
      icon: '👩‍👧'
    },
    {
      id: 3,
      name: 'مامان پریا',
      text: 'از اولین روزی که اومدیم عاشق این مجموعه شدیم. فضای بسیار تمیز و مناسب و کادر حرفه‌ای. حتماً دوباره میایم.',
      icon: '👩‍👧‍👦'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-float">💬</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">نظرات والدین عزیز</h2>
          <p className="text-xl text-gray-600">تجربه خوش والدینی که با شهربازی فرشته داشته‌اند</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/80 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 animate-bounce-gentle">{testimonial.icon}</div>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-full font-playful font-bold">
                    {testimonial.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
