
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Home, Calendar, ShoppingCart, Phone, Info, GalleryHorizontal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

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

  const navItems = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'services', label: 'خدمات', icon: Info },
    { id: 'gallery', label: 'گالری', icon: GalleryHorizontal },
    { id: 'birthday', label: 'جشن تولدها', icon: Calendar },
    { id: 'reservation', label: 'رزرو', icon: Calendar },
    { id: 'shop', label: 'فروشگاه', icon: ShoppingCart },
    { id: 'contact', label: 'تماس با ما', icon: Phone },
  ];

  const services = [
    {
      title: 'جشن تولد',
      description: 'برگزاری جشن تولد با تم‌های متنوع و جذاب برای کودکان',
      icon: '🎂',
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'شهر مشاغل',
      description: 'محیطی برای آشنایی کودکان با مشاغل مختلف به صورت عملی و سرگرم‌کننده',
      icon: '🏗️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'کافه کودک',
      description: 'محیطی دوستانه برای صرف نوشیدنی و خوراکی‌های سالم و خوشمزه',
      icon: '☕',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'گیم‌نت',
      description: 'بازی‌های رایانه‌ای مناسب سن کودکان با نظارت مربیان',
      icon: '🎮',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'کلاس‌های آموزشی',
      description: 'کلاس‌های آموزشی متنوع از جمله زبان انگلیسی برای کودکان',
      icon: '📚',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'فضای بازی',
      description: 'محیطی امن و شاد برای بازی و تفریح کودکان',
      icon: '🎪',
      color: 'from-red-400 to-rose-500'
    }
  ];

  const galleryImages = [
    { id: 1, title: 'فضای بازی کودکان', src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500' },
    { id: 2, title: 'کلاس آموزشی کودکان', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500' },
    { id: 3, title: 'فعالیت های آموزشی', src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500' },
    { id: 4, title: 'فروشگاه پیتزا در شهر مشاغل', src: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=500' },
    { id: 5, title: 'کودک در استخر توپ', src: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=500' },
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
            
            <Button 
              onClick={() => scrollToSection('reservation')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-playful animate-sparkle"
            >
              رزرو کنید
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sparkle-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-6 animate-float">🧚‍♀️✨🎪</div>
            <h1 className="text-5xl md:text-7xl font-playful font-bold rainbow-text mb-6 animate-fade-in">
              شهربازی فرشته
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
              مکانی آرام برای کودکان شما
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🏰</div>
                <p className="font-playful text-purple-700">محیطی شاد و امن برای بازی</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🎂</div>
                <p className="font-playful text-pink-700">برگزاری جشن تولد</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">📚</div>
                <p className="font-playful text-blue-700">کلاس‌های آموزشی و تفریحی</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">☕</div>
                <p className="font-playful text-green-700">کافه کودک</p>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('reservation')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-playful text-lg px-8 py-4 rounded-full animate-bounce-gentle"
            >
              رزرو تولد 🎉
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
            <div className="text-6xl mb-4 animate-float">📸</div>
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
                      تزئینات مخصوص تولد
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
                <div className="text-8xl mb-4">🎉</div>
                <h3 className="text-2xl font-playful font-bold text-purple-700 mb-4">
                  بهترین جشن تولد برای فرشته کوچولویتان
                </h3>
                <Button 
                  onClick={() => scrollToSection('reservation')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-playful"
                >
                  رزرو جشن تولد
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 animate-sparkle">💝</div>
            <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">نظر بابا و مامان‌ها</h2>
            <p className="text-xl text-gray-600">نظرات والدین عزیز که تجربه خوشی با شهربازی فرشته داشته‌اند</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <CardTitle className="font-playful text-purple-700">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 animate-float">🏰</div>
            <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">درباره ما</h2>
            <h3 className="text-2xl font-playful text-purple-700 mb-6">چرا شهربازی فرشته؟</h3>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              شهربازی فرشته با محیطی کاملاً امن و شاد، کادری حرفه‌ای و دلسوز و برنامه‌های متنوع آموزشی و تفریحی، 
              بهترین انتخاب برای رشد، آموزش و شادی کودکان شماست. ما فضایی فراهم کرده‌ایم که کودکان علاوه بر بازی، 
              مهارت‌های جدید یاد بگیرند و لحظاتی به‌یادماندنی را تجربه کنند.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-purple-50 to-pink-50 border-0 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="font-playful text-purple-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-2xl font-playful font-bold text-green-700 mb-4">ایمنی و بهداشت؛ اولویت ما</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              تمامی تجهیزات بازی و فضای شهربازی فرشته به طور مرتب ضدعفونی شده و تحت نظارت دقیق بهداشتی قرار دارد 
              تا شما و کودکان عزیزتان در محیطی کاملاً ایمن و سالم، با خیال راحت لحظات شادی را تجربه کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 animate-bounce-gentle">📅</div>
            <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">رزرو جشن تولد</h2>
            <p className="text-xl text-gray-600">همین امروز به ما سر بزنید!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-playful">فرم رزرو</CardTitle>
                <CardDescription className="text-pink-100">
                  اطلاعات زیر را تکمیل کنید تا با شما تماس بگیریم
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نام والدین</label>
                    <Input placeholder="نام و نام خانوادگی" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نام کودک</label>
                    <Input placeholder="نام فرشته کوچولو" className="border-purple-200 focus:border-purple-500" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                    <Input placeholder="09xxxxxxxxx" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">سن کودک</label>
                    <Input placeholder="مثال: 5 سال" className="border-purple-200 focus:border-purple-500" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ مورد نظر</label>
                    <Input type="date" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">تعداد مهمان</label>
                    <Input placeholder="مثال: 15 نفر" className="border-purple-200 focus:border-purple-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات اضافی</label>
                  <Textarea 
                    placeholder="تم مورد علاقه، درخواست خاص و..." 
                    className="border-purple-200 focus:border-purple-500" 
                    rows={3}
                  />
                </div>
                
                <Button 
                  onClick={handleReservation}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-playful text-lg py-3"
                >
                  ثبت درخواست رزرو 🎉
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 animate-sparkle">🛍️</div>
            <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">فروشگاه</h2>
            <p className="text-xl text-gray-600">محصولات و هدایای ویژه برای کودکان</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'اسباب بازی', icon: '🧸', color: 'from-pink-400 to-rose-500' },
              { name: 'کتاب کودک', icon: '📚', color: 'from-blue-400 to-cyan-500' },
              { name: 'لباس کودک', icon: '👕', color: 'from-purple-400 to-violet-500' },
              { name: 'هدایا', icon: '🎁', color: 'from-green-400 to-emerald-500' }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="font-playful text-purple-700">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                    مشاهده محصولات
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-t-lg">
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
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-playful"
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
                    <Button variant="outline" className="mt-2 text-blue-600 border-blue-300 hover:bg-blue-50">
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
              
              <Card className="bg-gradient-to-br from-green-100 to-blue-100 border-0">
                <CardHeader>
                  <CardTitle className="font-playful text-green-700 flex items-center gap-2">
                    <span className="text-2xl">🕐</span>
                    ساعات کار
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-700 mb-2">17:00 - 24:00</p>
                    <Badge variant="secondary" className="bg-green-200 text-green-800">همه روزه</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
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
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-playful rounded-full w-14 h-14 shadow-2xl animate-bounce-gentle"
        >
          📅
        </Button>
      </div>
    </div>
  );
};

export default Index;
