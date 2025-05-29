
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CafeMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowRight size={16} />
              بازگشت به صفحه اصلی
            </Button>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="text-3xl animate-bounce-gentle">🧚‍♀️</div>
              <div>
                <h1 className="text-2xl font-playful font-bold rainbow-text">کافه کودک فرشته</h1>
                <p className="text-sm text-orange-600">منوی خوراکی‌ها و نوشیدنی‌ها</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-8 animate-bounce-gentle">🚧</div>
            <h1 className="text-5xl md:text-7xl font-playful font-bold rainbow-text mb-6 animate-fade-in">
              به زودی
            </h1>
            <h2 className="text-3xl md:text-4xl font-playful text-orange-600 mb-8">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              منوی کامل کافه کودک فرشته با انواع نوشیدنی‌ها، خوراکی‌های سالم و خوشمزه 
              مخصوص کودکان به زودی در دسترس خواهد بود.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">🧃</div>
                  <CardTitle className="font-playful text-orange-700">نوشیدنی‌های طبیعی</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    آب میوه‌های تازه، شیرکاکائو، و نوشیدنی‌های سالم مخصوص کودکان
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">🥪</div>
                  <CardTitle className="font-playful text-orange-700">خوراکی‌های سالم</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    ساندویچ، پیتزا کوچک، و میان‌وعده‌های مغذی و خوشمزه
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">🍪</div>
                  <CardTitle className="font-playful text-orange-700">شیرینی و دسر</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    کیک‌های کوچک، کوکی، و دسرهای خوشمزه مناسب کودکان
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-8 mb-8">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="text-2xl font-playful font-bold text-orange-700 mb-4">
                تا عرضه منو، از خدمات دیگر ما لذت ببرید!
              </h3>
              <p className="text-gray-700 mb-6">
                در حال حاضر می‌توانید از فضای بازی، شهر مشاغل، گیم‌نت و برگزاری جشن تولد استفاده کنید.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-playful text-lg px-8 py-3"
              >
                مشاهده خدمات موجود
              </Button>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                برای اطلاع از زمان دقیق عرضه منو کافه، با ما در تماس باشید:
              </p>
              <div className="flex justify-center gap-4">
                <Badge className="bg-green-500 text-white px-4 py-2">
                  📞 09917037267
                </Badge>
                <Badge className="bg-blue-500 text-white px-4 py-2">
                  📞 07152451323
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CafeMenu;
