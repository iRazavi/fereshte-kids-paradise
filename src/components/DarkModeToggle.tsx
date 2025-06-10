
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { moon, zap } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is already enabled
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Button
      onClick={toggleDarkMode}
      variant="outline"
      size="sm"
      className="w-10 h-10 p-0 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 border-purple-200 dark:border-purple-600"
    >
      {isDark ? (
        <moon className="h-4 w-4 text-yellow-500" />
      ) : (
        <zap className="h-4 w-4 text-purple-600" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
