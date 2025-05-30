import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Home, Calendar, Phone, Info, GalleryHorizontal, MapPin, Instagram, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import jalaali from 'jalaali-js';
import FAQ from '@/components/FAQ';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [whatsappCoordination, setWhatsappCoordination] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Persian month names
  const persianMonths = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReservation = () => {
    toast({
      title: "درخواست رزرو ثبت شد!",
      description: "به زودی با شما تماس خواهیم گرفت.",
    });
  };

  const handleContactSubmit = () => {
    toast({
      title: "پیام شما ارسال شد!",
      description: "از نظر شما متشکریم. به زودی پاسخ خواهیم داد.",
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/989917037267', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=گراش+خیابان+بازار+جنب+آموزشگاه+رانندگی+ساختمان+فرشته', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/share_bazi_fereshte/', '_blank');
  };

  const handleCafeMenuClick = () => {
    navigate('/cafe-menu');
  };

  const navItems = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'services', label: 'خدمات', icon: Info },
    { id: 'gallery', label: 'گالری', icon: GalleryHorizontal },
    { id: 'birthday', label: 'جشن تولدها', icon: Calendar },
    { id: 'reservation', label: 'رزرو', icon: Calendar },
    { id: 'contact', label: 'تماس با ما', icon: Phone },
  ];

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

  const galleryImages = [
    { id: 1, title: 'جشن تولد با کیک فوتبالی', src: '/lovable-uploads/2dbdec2c-add3-4e81-88f4-6955ff5ad2b4.png' },
    { id: 2, title: 'مهمونای ویژمون با شخصیت‌های محبوب', src: '/lovable-uploads/1d308140-5afe-4f22-953b-689c42532c3f.png' },
    { id: 3, title: 'جشن تولد دخترونه با تم یونیکورن', src: '/lovable-uploads/0df77a58-a1c0-4564-adb6-e99d7bf54381.png' },
    { id: 4, title: 'جشن تولد با تم دایناسور', src: '/lovable-uploads/6da99fac-87a9-4109-9a33-71f65106ce93.png' },
    { id: 5, title: 'کلاس آموزشی کودکان', src: '/lovable-uploads/6e6ef0e0-fbd9-4a54-9553-52329236f8bc.png' },
    { id: 6, title: 'فعالیت‌های تعاملی و آموزشی', src: '/lovable-uploads/e18e811d-af42-42f7-82fd-b7a871f660b7.png' },
    { id: 7, title: 'فروشگاه پیتزا در شهر مشاغل', src: '/lovable-uploads/e2c394c1-b54e-49d6-b6d1-82d913ce357b.png' },
    { id: 8, title: 'کودک در استخر توپ رنگی', src: '/lovable-uploads/bb1d6eb1-3e47-4bd9-b0c3-62e248dba677.png' },
    { id: 9, title: 'بازی‌های آموزشی و تعاملی', src: '/lovable-uploads/9ae72c84-d79d-4308-aadf-1d0f22444861.png' },
  ];

  const testimonials = [
    {
      name: 'بابای امیرحسین',
      text: 'بچه‌ام عاشق این جا شده! محیط فوق‌العاده امن و مربیان بسیار مهربان. جشن تولدی که اینجا گرفتیم واقعاً فراموش‌نشدنی بود.',
      rating: 5
    },
    {
      name: 'مامان آوا',
      text: 'کیفیت خدمات عالی و قیمت‌ها مناسب. بچه‌ها هم خیلی خوش می‌گذرونن و هم چیزهای جدید یاد می‌گیرن.',
      rating: 5
    },
    {
      name: 'مامان پریا',
      text: 'از اولین روزی که اومدیم عاشق این مجموعه شدیم. فضای بسیار تمیز و مناسب و کادر حرفه‌ای. حتماً دوباره میایم.',
      rating: 5
    }
  ];

  const features = [
    { title: 'محیط امن', description: 'نظارت دقیق و تجهیزات استاندارد', icon: '🛡️' },
    { title: 'کادر مجرب', description: 'پرسنل حرفه‌ای و دوستدار کودک', icon: '👨‍🏫' },
    { title: 'برنامه‌های متنوع', description: 'فعالیت‌های آموزشی و تفریحی', icon: '🎨' },
    { title: 'ساعات مناسب', description: '17:00 تا 24:00 همه روزه', icon: '🕐' },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="text-3xl animate-bounce-gentle">🧚‍♀️</div>
              <div>
                <h1 className="text-2xl font-playful font-bold rainbow-text">شهربازی فرشته</h1>
                <p className="text-sm text-purple-600">مکانی آرام برای کودکان شما</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-100 ${
                    activeSection === item.id ? 'bg-purple-200 text-purple-700' : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Cafe Menu Button */}
              <Button 
                onClick={handleCafeMenuClick}
                size="sm"
                className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white rounded-full flex items-center gap-1 px-3 py-2"
              >
                <Coffee size={16} />
                <span className="text-xs">منو کافه</span>
                <Badge className="bg-white/20 text-xs px-1 py-0">به زودی</Badge>
              </Button>
              
              {/* WhatsApp Icon */}
              <Button 
                onClick={handleWhatsAppClick}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 p-0"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255.018-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                </svg>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('reservation')}
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful animate-sparkle"
              >
                رزرو کنید
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sparkle-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-6 animate-bounce-gentle">🧚‍♀️✨🎪</div>
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
              onClick={() => scrollToSection('reservation')}
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful text-lg px-8 py-4 rounded-full animate-bounce-gentle"
            >
              رزرو تولد 🎂
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 animate-float">📷</div>
            <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">گالری تصاویر</h2>
            <p className="text-xl text-gray-600">گوشه‌ای از لحظات شاد و خاطره‌انگیز کودکان در شهربازی فرشته</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-playful font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Section */}
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
                  onClick={() => scrollToSection('reservation')}
                  className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful"
                >
                  رزرو جشن تولد
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 animate-float">📞</div>
            <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">تماس با ما</h2>
            <p className="text-xl text-gray-600">برای ارتباط با ما، ثبت نظرات و پیشنهادات خود را از طریق فرم زیر یا اطلاعات تماس ارسال کنید</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="text-xl font-playful">ثبت نظرات و پیشنهادات</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <Input placeholder="نام خود را وارد کنید" className="border-purple-200 focus:border-purple-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                  <Input placeholder="شماره تماس خود را وارد کنید" className="border-purple-200 focus:border-purple-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">موضوع نظر</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="suggestion">پیشنهاد</SelectItem>
                      <SelectItem value="complaint">شکایت</SelectItem>
                      <SelectItem value="compliment">تشکر</SelectItem>
                      <SelectItem value="question">سوال</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نظر یا پیشنهاد شما</label>
                  <Textarea 
                    placeholder="نظر یا پیشنهاد خود را وارد کنید" 
                    className="border-purple-200 focus:border-purple-500" 
                    rows={4}
                  />
                </div>
                
                <Button 
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white font-playful"
                >
                  ثبت نظر
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="font-playful text-purple-700 flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    اطلاعات تماس
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">آدرس:</h4>
                    <p className="text-gray-600">گراش - خیابان بازار - جنب آموزشگاه رانندگی - ساختمان فرشته</p>
                    <Button 
                      variant="outline" 
                      className="mt-2 text-blue-600 border-blue-300 hover:bg-blue-50"
                      onClick={handleMapClick}
                    >
                      <MapPin className="w-4 h-4 ml-2" />
                      مشاهده در نقشه
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">شماره تماس:</h4>
                    <div className="space-y-1">
                      <p className="text-lg font-mono text-purple-600">09917037267</p>
                      <p className="text-lg font-mono text-purple-600">07152451323</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">صفحه اینستاگرام:</h4>
                    <p className="text-pink-600 font-mono">@share_bazi_fereshte</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧚‍♀️✨</div>
            <h3 className="text-2xl font-playful font-bold mb-2">شهربازی فرشته</h3>
            <p className="text-purple-200 mb-4">مکانی آرام برای کودکان شما</p>
            <p className="text-sm text-purple-300 mb-2">گراش - خیابان بازار - جنب آموزشگاه رانندگی - ساختمان فرشته</p>
            <p className="text-sm text-purple-300">تماس: 09917037267 | 07152451323</p>
          </div>
          
          <Separator className="bg-purple-600 mb-8" />
          
          <div className="text-center text-sm text-purple-200">
            <p className="mb-2">© 2025 - تمامی حقوق برای شهربازی فرشته محفوظ است</p>
            <p>ساخته شده توسط عرشیا</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Button */}
      <div className="fixed bottom-6 left-6 md:hidden z-50">
        <Button 
          onClick={() => scrollToSection('reservation')}
          className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful rounded-full w-14 h-14 shadow-2xl animate-bounce-gentle"
        >
          📅
        </Button>
      </div>
    </div>
  );
};

export default Index;
