
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BirthdaySectionProps {
  onReservationClick: () => void;
}

const BirthdaySection = ({ onReservationClick }: BirthdaySectionProps) => {
  const birthdayPackages = [
    {
      name: 'پکیج ساده',
      price: '۸۰۰٬۰۰۰ تومان',
      additionalGuest: '۱۰۰٬۰۰۰ تومان به ازای هر نفر',
      features: [
        'طراحی ساده صحنه تولد',
        'برنامه‌ریزی طبق نظر والدین',
        'یک ساعت بازی رایگان برای کودکان'
      ],
      icon: '🎈',
      color: 'from-pink-200 to-rose-300'
    },
    {
      name: 'پکیج طلایی',
      price: '۱٬۰۰۰٬۰۰۰ تومان',
      additionalGuest: '۱۲۰٬۰۰۰ تومان به ازای هر نفر',
      features: [
        'تزیینات کامل صحنه',
        'تهیه ژله برای کودکان',
        'یک ساعت بازی رایگان',
        'همراهی پرسنل در اجرای جشن'
      ],
      icon: '✨',
      color: 'from-yellow-200 to-amber-300'
    },
    {
      name: 'پکیج VIP',
      price: '۱٬۲۰۰٬۰۰۰ تومان',
      additionalGuest: '۱۵۰٬۰۰۰ تومان به ازای هر نفر',
      features: [
        'تزیینات ویژه صحنه',
        'طراحی کیک تولد',
        'تهیه ژله برای کودکان',
        'لباس عروسکی برای عکس‌برداری',
        'همراهی کامل پرسنل',
        'یک ساعت بازی رایگان برای کودکان'
      ],
      icon: '👑',
      color: 'from-purple-200 to-violet-300'
    }
  ];

  return (
    <section id="birthday" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-bounce-gentle">🎂</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">جشن تولد در شهربازی فرشته</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            جشن تولد فراموش‌نشدنی برای کودک عزیزتان با امکانات کامل و تم‌های جذاب
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-playful font-bold text-pink-600 mb-2">🎁 پکیج‌های تولد</h3>
            <p className="text-gray-700">پکیج مناسب برای جشن تولد کودکتان را انتخاب کنید:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {birthdayPackages.map((pkg, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <CardTitle className="text-xl font-playful text-purple-700">{pkg.name}</CardTitle>
                  <CardDescription>
                    <p className="text-lg font-bold text-green-700 mt-2">{pkg.price}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                    <p className="text-sm text-purple-600">
                      <span className="font-bold">👥 مهمان اضافه:</span> {pkg.additionalGuest}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-pink-100 to-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playful">
                  <span className="text-3xl">🎪</span>
                  برنامه کامل جشن
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    تزیینات مخصوص تولد
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    کیک و شیرینی
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    بازی‌های گروهی
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    عکاسی از مراسم
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 animate-float">
              <div className="text-8xl mb-4">🎊</div>
              <h3 className="text-2xl font-playful font-bold text-purple-700 mb-4">
                بهترین جشن تولد برای فرشته کوچولویتان
              </h3>
              <Button 
                onClick={onReservationClick}
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful"
              >
                رزرو جشن تولد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdaySection;
