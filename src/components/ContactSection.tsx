
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = () => {
    toast({
      title: "پیام شما ارسال شد!",
      description: "از نظر شما متشکریم. به زودی پاسخ خواهیم داد.",
    });
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=گراش+خیابان+بازار+جنب+آموزشگاه+رانندگی+ساختمان+فرشته', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-float">📞</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">تماس با ما</h2>
          <p className="text-xl text-gray-600">برای ارتباط با ما، ثبت نظرات و پیشنهادات خود را از طریق فرم زیر یا اطلاعات تماس ارسال کنید</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
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
  );
};

export default ContactSection;
