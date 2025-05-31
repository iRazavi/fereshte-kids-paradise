
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  
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
    { id: 10, title: 'منطقه بازی برای کودکان کوچک', src: '/lovable-uploads/e255ffd8-e8d7-4205-a52e-eaa21b7a2fd2.png' },
    { id: 11, title: 'کافه کودک با فضای دنج', src: '/lovable-uploads/63a24320-467f-4878-97fc-75163fd754d0.png' },
    { id: 12, title: 'بازی‌های ویدئویی و سرگرمی', src: '/lovable-uploads/10d7845a-6352-4002-912e-8fcd6e53e350.png' },
    { id: 13, title: 'مجموعه شهر بازی فرشته', src: '/lovable-uploads/1ab6a200-1c73-422d-b4a5-75282c65cd49.png' },
    { id: 14, title: 'فضای بازی قلعه‌ای', src: '/lovable-uploads/e8459392-aa4c-4c3d-bd1f-a07b966c4ca4.png' },
    { id: 15, title: 'منطقه بازی ساحلی', src: '/lovable-uploads/a1904294-ce86-4476-8b87-5b49c69a5f20.png' },
    { id: 16, title: 'شهر مشاغل کودکان', src: '/lovable-uploads/40c3abda-524e-4ebe-b533-b000dbd10dee.png' },
  ];

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-float">📷</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">گالری تصاویر</h2>
          <p className="text-xl text-gray-600">گوشه‌ای از لحظات شاد و خاطره‌انگیز کودکان در شهربازی فرشته</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedImages.map((image) => (
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

        {!showAll && galleryImages.length > 9 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-playful px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-xl ml-2">📸</span>
              مشاهده عکس‌های بیشتر
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
