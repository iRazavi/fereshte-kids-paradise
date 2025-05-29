
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Package {
  id: string;
  name: string;
  basePrice: number;
  additionalGuestPrice: number;
  icon: string;
}

const packages: Package[] = [
  {
    id: 'simple',
    name: 'پکیج ساده',
    basePrice: 800000,
    additionalGuestPrice: 100000,
    icon: '🎈'
  },
  {
    id: 'gold',
    name: 'پکیج طلایی',
    basePrice: 1000000,
    additionalGuestPrice: 120000,
    icon: '✨'
  },
  {
    id: 'vip',
    name: 'پکیج VIP',
    basePrice: 1200000,
    additionalGuestPrice: 150000,
    icon: '👑'
  }
];

interface PriceCalculatorProps {
  onPriceChange?: (totalPrice: number, selectedPackage: string, guestCount: number) => void;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onPriceChange }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(8);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const formatPrice = (price: number): string => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  useEffect(() => {
    if (!selectedPackage) {
      setTotalPrice(0);
      return;
    }

    const pkg = packages.find(p => p.id === selectedPackage);
    if (!pkg) return;

    let total = pkg.basePrice;
    
    // Add cost for additional guests (more than 8)
    if (guestCount > 8) {
      const additionalGuests = guestCount - 8;
      total += additionalGuests * pkg.additionalGuestPrice;
    }

    setTotalPrice(total);
    
    if (onPriceChange) {
      onPriceChange(total, selectedPackage, guestCount);
    }
  }, [selectedPackage, guestCount, onPriceChange]);

  const selectedPkg = packages.find(p => p.id === selectedPackage);

  return (
    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="font-playful text-green-700 flex items-center gap-2">
          <span className="text-2xl">💰</span>
          محاسبه هزینه
        </CardTitle>
        <CardDescription>
          هزینه کل جشن تولد بر اساس پکیج و تعداد مهمانان
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">انتخاب پکیج</label>
          <Select value={selectedPackage} onValueChange={setSelectedPackage}>
            <SelectTrigger className="border-green-200 focus:border-green-500">
              <SelectValue placeholder="پکیج مورد نظر را انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              {packages.map((pkg) => (
                <SelectItem key={pkg.id} value={pkg.id}>
                  {pkg.icon} {pkg.name} - {formatPrice(pkg.basePrice)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">تعداد مهمان</label>
          <Input
            type="number"
            min="1"
            max="50"
            value={guestCount}
            onChange={(e) => setGuestCount(parseInt(e.target.value) || 8)}
            className="border-green-200 focus:border-green-500"
            placeholder="تعداد مهمانان"
          />
          <p className="text-xs text-gray-500 mt-1">
            پکیج‌ها شامل ۸ مهمان هستند
          </p>
        </div>

        {selectedPkg && (
          <div className="space-y-3 p-4 bg-white rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">هزینه پایه ({selectedPkg.name}):</span>
              <Badge variant="outline" className="text-green-700">
                {formatPrice(selectedPkg.basePrice)}
              </Badge>
            </div>
            
            {guestCount > 8 && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  مهمان اضافه ({guestCount - 8} نفر):
                </span>
                <Badge variant="outline" className="text-orange-700">
                  {formatPrice((guestCount - 8) * selectedPkg.additionalGuestPrice)}
                </Badge>
              </div>
            )}

            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">مجموع هزینه:</span>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg">
                  {formatPrice(totalPrice)}
                </Badge>
              </div>
            </div>
          </div>
        )}

        {!selectedPackage && (
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-700">
              لطفاً ابتدا پکیج مورد نظر را انتخاب کنید
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
