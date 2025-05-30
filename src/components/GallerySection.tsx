
const GallerySection = () => {
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

  return (
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
  );
};

export default GallerySection;
