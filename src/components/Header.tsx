
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Calendar, Phone, Info, GalleryHorizontal } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Header = ({ activeSection, onSectionClick }: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'services', label: 'خدمات', icon: Info },
    { id: 'gallery', label: 'گالری', icon: GalleryHorizontal },
    { id: 'birthday', label: 'جشن تولدها', icon: Calendar },
    { id: 'reservation', label: 'رزرو', icon: Calendar },
    { id: 'contact', label: 'تماس با ما', icon: Phone },
  ];

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
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <div className="grid grid-cols-3 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-3 rounded-lg transition-all duration-300 hover:bg-purple-100 ${
                  activeSection === item.id ? 'bg-purple-200 text-purple-700' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <item.icon size={16} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
