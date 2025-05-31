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

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/share_bazi_fereshte/', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/989917037267', '_blank');
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
                  <h4 className="font-semibold text-gray-700 mb-2">شبکه‌های اجتماعی:</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      className="text-pink-600 border-pink-300 hover:bg-pink-50 flex items-center justify-center"
                      onClick={handleInstagramClick}
                    >
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.792 3.53 13.45 3.53 11.987c0-1.463.668-2.805 1.598-3.704.93-.899 2.081-1.389 3.378-1.389 1.297 0 2.448.49 3.378 1.389.93.899 1.598 2.241 1.598 3.704 0 1.463-.668 2.805-1.598 3.704-.93.899-2.081 1.389-3.378 1.389zm8.017-.081c-.668 0-1.297-.188-1.818-.535-.521-.346-.929-.844-1.157-1.414-.229-.57-.277-1.19-.139-1.784.139-.594.417-1.139.807-1.564.39-.425.911-.743 1.482-.904.57-.162 1.172-.168 1.746-.02.574.149 1.098.428 1.49.793.391.365.651.816.735 1.283.084.467.006.949-.221 1.368-.226.419-.568.757-.972.96-.404.203-.856.298-1.284.281-.428-.017-.849-.132-1.205-.328-.356-.196-.643-.467-.855-.797-.212-.329-.343-.704-.391-1.094-.048-.39.011-.784.173-1.154.162-.37.419-.699.751-.962.332-.263.733-.456 1.172-.563.439-.107.9-.127 1.35-.058.45.068.878.235 1.251.486.373.252.683.581.905.963.222.382.352.809.381 1.249.029.44-.034.882-.183 1.295-.149.413-.386.789-.695 1.099-.309.31-.685.548-1.098.697-.413.149-.855.212-1.295.183-.44-.029-.867-.159-1.249-.381-.382-.222-.711-.532-.963-.905-.252-.373-.419-.801-.486-1.251-.068-.45-.049-.911.058-1.35.107-.439.3-.84.563-1.172.263-.332.592-.589.962-.751.37-.162.764-.221 1.154-.173.39.048.765.179 1.094.391.329.212.6.499.797.855.196.356.311.777.328 1.205.017.428-.078.88-.281 1.284-.203.404-.541.746-.96.972-.419.226-.901.305-1.368.221-.467-.084-.918-.344-1.283-.735-.365-.392-.644-.916-.793-1.49-.148-.574-.142-1.176.02-1.746.161-.571.479-1.092.904-1.482.425-.39.97-.668 1.564-.807.594-.138 1.214-.09 1.784.139.57.228 1.068.636 1.414 1.157.347.521.535 1.15.535 1.818z"/>
                      </svg>
                      اینستاگرام
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="text-green-600 border-green-300 hover:bg-green-50 flex items-center justify-center"
                      onClick={handleWhatsAppClick}
                    >
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255.018-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                      </svg>
                      واتس‌اپ
                    </Button>
                  </div>
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
