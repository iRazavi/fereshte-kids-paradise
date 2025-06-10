
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Clock, Star, Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConfettiAnimation from '@/components/ConfettiAnimation';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handlePlanSelection = (value: string) => {
    setSelectedPlan(value);
    setShowConfetti(true);
  };

  const handleReservation = () => {
    // Navigate to home and scroll to reservation section
    navigate('/#reservation');
    setTimeout(() => {
      const element = document.getElementById('reservation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20">
      <ConfettiAnimation 
        show={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />
      
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          بازگشت به صفحه اصلی
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎮✨</div>
          <h1 className="text-4xl md:text-5xl font-playful font-bold rainbow-text mb-4">
            تعرفه بازی شهربازی فرشته
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            زمان بازی کودک خود را انتخاب کنید و لحظات شادی را تجربه کنید
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto">
          <RadioGroup value={selectedPlan} onValueChange={handlePlanSelection}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 30 Minutes Plan */}
              <Card className={`relative hover:scale-105 transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm border-2 hover:border-pink-300 hover:shadow-xl ${selectedPlan === '30min' ? 'ring-4 ring-pink-300 border-pink-400' : ''}`}>
                <div className="absolute top-4 right-4">
                  <RadioGroupItem value="30min" id="30min" />
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-2">⏰</div>
                  <CardTitle className="text-2xl font-playful text-purple-700">
                    نیم ساعت بازی
                  </CardTitle>
                  <CardDescription className="text-lg">
                    مناسب برای آشنایی اولیه
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-bold text-pink-600">
                    ۵۵,۰۰۰
                    <span className="text-lg font-normal text-gray-600"> تومان</span>
                  </div>
                  
                  <div className="space-y-2 text-right">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>دسترسی به تمام وسایل بازی</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>نظارت کامل و ایمنی</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>۳۰ دقیقه شادی خالص</span>
                    </div>
                  </div>

                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    مناسب کودکان ۲-۸ سال
                  </Badge>
                </CardContent>
              </Card>

              {/* 60 Minutes Plan */}
              <Card className={`relative hover:scale-105 transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm border-2 hover:border-purple-300 hover:shadow-xl ${selectedPlan === '60min' ? 'ring-4 ring-purple-300 border-purple-400' : ''}`}>
                <div className="absolute top-4 right-4">
                  <RadioGroupItem value="60min" id="60min" />
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    پیشنهاد ویژه
                  </Badge>
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-2">🚀</div>
                  <CardTitle className="text-2xl font-playful text-purple-700">
                    یک ساعت بازی
                  </CardTitle>
                  <CardDescription className="text-lg">
                    تجربه کامل و لذت‌بخش
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-bold text-purple-600">
                    ۱۰۰,۰۰۰
                    <span className="text-lg font-normal text-gray-600"> تومان</span>
                  </div>
                  
                  <div className="space-y-2 text-right">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>دسترسی به تمام وسایل بازی</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>نظارت کامل و ایمنی</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>۶۰ دقیقه شادی و سرگرمی</span>
                    </div>
                  </div>

                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    مناسب کودکان ۲-۱۲ سال
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </RadioGroup>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={handleReservation}
              disabled={!selectedPlan}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-playful text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {selectedPlan ? 'پرداخت' : 'ابتدا یک گزینه انتخاب کنید'} 💳
            </Button>
            
            {selectedPlan && (
              <p className="mt-4 text-gray-600">
                گزینه انتخابی: {selectedPlan === '30min' ? 'نیم ساعت بازی' : 'یک ساعت بازی'}
              </p>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-playful font-bold text-purple-700 mb-4">
              ✨ چرا شهربازی فرشته؟
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-medium mb-1">ایمنی کامل</h4>
                <p className="text-sm">محیطی امن و بهداشتی برای فرزندان شما</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h4 className="font-medium mb-1">نظارت حرفه‌ای</h4>
                <p className="text-sm">کادر مجرب و دوستدار کودکان</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎪</div>
                <h4 className="font-medium mb-1">تنوع بازی</h4>
                <p className="text-sm">وسایل بازی متنوع و سرگرم‌کننده</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
