
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import jalaali from 'jalaali-js';

const ReservationSection = () => {
  const [whatsappCoordination, setWhatsappCoordination] = useState(false);
  const { toast } = useToast();

  const persianMonths = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];

  const handleReservation = () => {
    toast({
      title: "درخواست رزرو ثبت شد!",
      description: "به زودی با شما تماس خواهیم گرفت.",
    });
  };

  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-bounce-gentle">📅</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">رزرو جشن تولد</h2>
          <p className="text-xl text-gray-600">فرم زیر را تکمیل کنید تا بتوانیم بهترین جشن تولد را برای شما برگزار کنیم</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-playful text-center">فرم رزرو</CardTitle>
              <CardDescription className="text-pink-100 text-center">
                تمامی اطلاعات بطور محرمانه نگهداری می‌شود
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام والدین</label>
                  <Input placeholder="نام کامل والدین" className="border-purple-200 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام کودک</label>
                  <Input placeholder="نام کودک" className="border-purple-200 focus:border-purple-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                  <Input placeholder="شماره تماس" className="border-purple-200 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">سن کودک</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="انتخاب سن" />
                    </SelectTrigger>
                    <SelectContent>
                      {[3, 4, 5, 6, 7, 8, 9, 10].map(age => (
                        <SelectItem key={age} value={age.toString()}>{age} سال</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">روز</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="روز" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ماه</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="ماه" />
                    </SelectTrigger>
                    <SelectContent>
                      {persianMonths.map((month, index) => (
                        <SelectItem key={index + 1} value={(index + 1).toString()}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">سال</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="سال" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1403, 1404].map(year => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ساعت مورد نظر</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="ساعت" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 8 }, (_, i) => i + 17).map(hour => (
                        <SelectItem key={hour} value={hour.toString()}>
                          {hour}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تعداد مهمان</label>
                  <Select>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500">
                      <SelectValue placeholder="تعداد" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 20 }, (_, i) => i + 5).map(count => (
                        <SelectItem key={count} value={count.toString()}>{count} نفر</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">پکیج مورد نظر</label>
                <Select>
                  <SelectTrigger className="border-purple-200 focus:border-purple-500">
                    <SelectValue placeholder="انتخاب پکیج" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">پکیج ساده - ۸۰۰٬۰۰۰ تومان</SelectItem>
                    <SelectItem value="gold">پکیج طلایی - ۱٬۰۰۰٬۰۰۰ تومان</SelectItem>
                    <SelectItem value="vip">پکیج VIP - ۱٬۲۰۰٬۰۰۰ تومان</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تم مورد علاقه (اختیاری)</label>
                <Input placeholder="مثال: کارتون محبوب، رنگ مورد علاقه و..." className="border-purple-200 focus:border-purple-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات تکمیلی</label>
                <Textarea 
                  placeholder="درخواست خاص، نکات مهم یا سوالات" 
                  className="border-purple-200 focus:border-purple-500" 
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Checkbox 
                  id="whatsapp" 
                  checked={whatsappCoordination}
                  onCheckedChange={setWhatsappCoordination}
                />
                <label htmlFor="whatsapp" className="text-sm text-gray-700">
                  ترجیح می‌دهم هماهنگی‌ها از طریق واتساپ انجام شود
                </label>
              </div>

              <Button 
                onClick={handleReservation}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-playful text-lg py-3"
              >
                ثبت درخواست رزرو 🎉
              </Button>

              <div className="text-center text-sm text-gray-500 bg-purple-50 p-4 rounded-lg">
                <p className="mb-2">⏰ پس از ثبت فرم، تا ۲۴ ساعت با شما تماس می‌گیریم</p>
                <p>📞 برای پیگیری: 09917037267</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
