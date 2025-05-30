
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Calendar, Phone, Info, GalleryHorizontal, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Header = ({ activeSection, onSectionClick }: HeaderProps) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'services', label: 'خدمات', icon: Info },
    { id: 'gallery', label: 'گالری', icon: GalleryHorizontal },
    { id: 'birthday', label: 'جشن تولدها', icon: Calendar },
    { id: 'reservation', label: 'رزرو', icon: Calendar },
    { id: 'contact', label: 'تماس با ما', icon: Phone },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/989917037267', '_blank');
  };

  const handleCafeMenuClick = () => {
    navigate('/cafe-menu');
  };

  return (
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
                onClick={() => onSectionClick(item.id)}
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
            <Button 
              onClick={handleCafeMenuClick}
              size="sm"
              className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white rounded-full flex items-center gap-1 px-3 py-2"
            >
              <Coffee size={16} />
              <span className="text-xs">منو کافه</span>
              <Badge className="bg-white/20 text-xs px-1 py-0">به زودی</Badge>
            </Button>
            
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
              onClick={() => onSectionClick('reservation')}
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful animate-sparkle"
            >
              رزرو کنید
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
