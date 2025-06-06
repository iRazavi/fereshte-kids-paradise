
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CafeMenu = () => {
  const navigate = useNavigate();

  const beverages = [
    {
      name: 'آب پرتقال طبیعی تازه',
      description: '۱۰۰٪ طبیعی، بدون شکر افزوده',
      price: '۳۵,۰۰۰',
      image: '🍊',
      color: 'from-orange-200 to-orange-300'
    },
    {
      name: 'آب سیب طبیعی',
      description: 'شیرین و سبک، مناسب کودکان',
      price: '۳۵,۰۰۰',
      image: '🍎',
      color: 'from-red-200 to-pink-300'
    },
    {
      name: 'آب هویج با سیب',
      description: 'ترکیبی ویتامینه، برای تقویت بینایی',
      price: '۳۸,۰۰۰',
      image: '🥕',
      color: 'from-orange-200 to-yellow-300'
    },
    {
      name: 'شیرکاکائو خانگی',
      description: 'شیر تازه با پودر کاکائو خالص',
      price: '۳۰,۰۰۰',
      image: '🥛',
      color: 'from-amber-200 to-orange-300'
    },
    {
      name: 'میلک‌شیک موز',
      description: 'شیر، موز طبیعی و کمی عسل',
      price: '۴۲,۰۰۰',
      image: '🍌',
      color: 'from-yellow-200 to-yellow-300'
    },
    {
      name: 'نوشیدنی رنگین‌کمان',
      description: 'نوشیدنی چند‌میوه مخصوص بچه‌ها، بسیار جذاب',
      price: '۴۵,۰۰۰',
      image: '🌈',
      color: 'from-purple-200 via-pink-200 to-blue-200',
      special: true
    }
  ];

  const foods = [
    {
      name: 'ساندویچ مرغ و پنیر',
      description: 'نان نرم با مرغ پخته‌شده، پنیر، بدون سس',
      price: '۴۸,۰۰۰',
      image: '🥪',
      color: 'from-yellow-200 to-amber-300'
    },
    {
      name: 'پیتزای کودکانه کوچک',
      description: 'پنیر موزارلا، قارچ، ذرت، بدون ادویه تند',
      price: '۵۵,۰۰۰',
      image: '🍕',
      color: 'from-red-200 to-orange-300'
    },
    {
      name: 'فینگر فود سبزیجات',
      description: 'تکه‌های هویج، خیار، سیب‌زمینی پخته',
      price: '۳۵,۰۰۰',
      image: '🥕',
      color: 'from-green-200 to-emerald-300'
    },
    {
      name: 'مینی‌برگر کودکانه',
      description: 'گوشت کاملاً پخته، نان نرم، بدون مواد نگهدارنده',
      price: '۵۸,۰۰۰',
      image: '🍔',
      color: 'from-orange-200 to-red-300'
    },
    {
      name: 'کراکر پنیر و سیب',
      description: 'لقمه‌های سالم و سبک',
      price: '۳۲,۰۰۰',
      image: '🧀',
      color: 'from-yellow-200 to-orange-200'
    }
  ];

  const desserts = [
    {
      name: 'کاپ‌کیک رنگی',
      description: 'کاپ‌کیک وانیلی با خامه رنگی مخصوص کودکان',
      price: '۳۰,۰۰۰',
      image: '🧁',
      color: 'from-pink-200 to-purple-300'
    },
    {
      name: 'کوکی شکلاتی کودکانه',
      description: 'بدون مغز، نرم و شیرین',
      price: '۲۸,۰۰۰',
      image: '🍪',
      color: 'from-amber-200 to-orange-300'
    },
    {
      name: 'ژله میوه‌ای با شکل حیوانات',
      description: 'ژله طبیعی با طرح‌های جذاب',
      price: '۲۵,۰۰۰',
      image: '🐻',
      color: 'from-green-200 to-blue-300'
    },
    {
      name: 'دسر ماستی با میوه',
      description: 'ماست یونانی، میوه تازه، عسل',
      price: '۳۸,۰۰۰',
      image: '🍓',
      color: 'from-pink-200 to-red-300'
    },
    {
      name: 'کیک شکلاتی تکه‌ای',
      description: 'برش کوچک، نرم و مخصوص بچه‌ها',
      price: '۳۲,۰۰۰',
      image: '🍰',
      color: 'from-brown-200 to-amber-300'
    },
    {
      name: 'بستنی میوه‌ای خانگی',
      description: 'بدون رنگ مصنوعی، طبیعی و خنک',
      price: '۴۰,۰۰۰',
      image: '🍦',
      color: 'from-blue-200 to-purple-300'
    }
  ];

  const parentSpecials = [
    {
      name: 'قهوه اسپرسو',
      description: 'قهوه تازه دم با کیفیت عالی',
      price: '۴۵,۰۰۰',
      image: '☕',
      color: 'from-amber-700 to-orange-600'
    },
    {
      name: 'چای ماسالا',
      description: 'ترکیبی ادویه‌ای و ملایم',
      price: '۳۸,۰۰۰',
      image: '🫖',
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'دمنوش گل‌گاوزبان و لیمو',
      description: 'آرامش‌بخش و مفید',
      price: '۳۵,۰۰۰',
      image: '🌸',
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'کوکی جو و شکلات مخصوص بزرگسالان',
      description: 'فیبردار و خوش‌طعم',
      price: '۳۲,۰۰۰',
      image: '🍫',
      color: 'from-amber-600 to-orange-700'
    }
  ];

  const MenuSection = ({ title, items, emoji, subtitle }) => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4 animate-bounce-gentle">{emoji}</div>
        <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden group">
            <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
            <CardHeader className="text-center relative">
              {item.special && (
                <Badge className="absolute top-2 right-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                  <Star size={12} className="mr-1" />
                  ویژه
                </Badge>
              )}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.image}</div>
              <CardTitle className="text-lg font-playful text-purple-700 mb-2">{item.name}</CardTitle>
              <div className="flex items-center justify-center mb-2">
                <Badge variant="outline" className="text-lg font-bold text-green-600 border-green-300 px-3 py-1">
                  {item.price} تومان
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2 hover:bg-orange-50"
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

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-6 animate-bounce-gentle">🍽️✨</div>
            <h1 className="text-5xl md:text-6xl font-playful font-bold rainbow-text mb-6">
              منوی کافه کودک فرشته
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              خوراکی‌ها و نوشیدنی‌های سالم، طبیعی و خوشمزه مخصوص کودکان عزیز
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Sparkles className="mx-auto mb-3 text-green-600" size={32} />
                  <h3 className="font-playful text-lg text-green-700 mb-2">۱۰۰٪ طبیعی و سالم</h3>
                  <p className="text-green-600 text-sm">تمامی مواد تازه و بدون افزودنی مصنوعی</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-pink-100 to-rose-100 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="mx-auto mb-3 text-pink-600" size={32} />
                  <h3 className="font-playful text-lg text-pink-700 mb-2">مخصوص کودکان</h3>
                  <p className="text-pink-600 text-sm">تهیه شده با توجه به نیازهای تغذیه‌ای کودکان</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <MenuSection 
          title="نوشیدنی‌های طبیعی و سالم"
          subtitle="مخصوص کوچولوهای پرانرژی"
          emoji="🧃"
          items={beverages}
        />

        <MenuSection 
          title="خوراکی‌های سالم و مغذی"
          subtitle="تغذیه خوشمزه، مناسب رشد و شادی"
          emoji="🥪"
          items={foods}
        />

        <MenuSection 
          title="شیرینی و دسرهای کودکانه"
          subtitle="شیرینی زندگی، رنگی و شاد برای دلبند شما"
          emoji="🍪"
          items={desserts}
        />

        <MenuSection 
          title="ویژه والدین"
          subtitle="برای وقتی که بچه‌ها بازی می‌کنن"
          emoji="🎁"
          items={parentSpecials}
        />

        {/* Important Notes */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-2xl font-playful font-bold text-purple-700 mb-4">نکات مهم</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="font-playful text-lg text-green-700 mb-2">مواد تازه و طبیعی</h4>
                <p className="text-gray-600 text-sm">
                  تمامی غذاها و نوشیدنی‌ها با مواد تازه و طبیعی تهیه می‌شوند. هیچ‌گونه مواد نگهدارنده یا افزودنی مصنوعی در تهیه خوراکی‌های کودکانه استفاده نمی‌شود.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🎈</div>
                <h4 className="font-playful text-lg text-orange-700 mb-2">آلرژی و رژیم خاص</h4>
                <p className="text-gray-600 text-sm">
                  در صورت داشتن آلرژی یا رژیم خاص، حتماً قبل از سفارش اطلاع دهید. ما با خوشحالی غذای مناسب شما را تهیه می‌کنیم.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-2xl font-playful font-bold text-purple-700 mb-4">
            برای سفارش با ما تماس بگیرید
          </h3>
          <div className="flex justify-center gap-4 mb-6">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              📞 09917037267
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              📞 07152451323
            </Badge>
          </div>
          <p className="text-gray-600">
            گراش - خیابان بازار - جنب آموزشگاه رانندگی - ساختمان فرشته
          </p>
        </section>
      </div>
    </div>
  );
};

export default CafeMenu;
