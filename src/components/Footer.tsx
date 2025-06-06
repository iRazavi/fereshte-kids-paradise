
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
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
        
        <div className="text-center text-purple-200">
          <p className="text-sm mb-2">© 2025 - تمامی حقوق برای شهربازی فرشته محفوظ است</p>
          <p className="text-lg font-medium">ساخته شده توسط عرشیا</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
