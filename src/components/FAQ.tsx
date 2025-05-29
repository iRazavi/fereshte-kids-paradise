
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: '🧁 برگزاری جشن تولد',
      questions: [
        {
          question: 'چطور می‌تونم برای جشن تولد کودک رزرو کنم؟',
          answer: 'از طریق فرم رزرو در سایت یا تماس با شماره‌های مجموعه می‌تونید اطلاعات جشن رو ثبت و هماهنگی‌های لازم رو انجام بدید.'
        },
        {
          question: 'آیا برای رزرو نیاز به پیش‌پرداخت هست؟',
          answer: 'در برخی موارد، برای قطعی شدن رزرو نیاز به پرداخت پیش‌پرداخت هست. هماهنگی این مورد در تماس با شما انجام می‌شه.'
        },
        {
          question: 'اگر بخوام جشن رو کنسل یا زمانش رو عوض کنم، چطور عمل می‌شه؟',
          answer: 'اگر کنسلی یا تغییر زمان حداقل ۴۸ ساعت قبل از تاریخ جشن اعلام بشه، مشکلی نیست. اما در صورت اعلام کمتر از این زمان، ممکنه هزینه‌ای بابت کنسلی از پیش‌پرداخت کسر بشه.'
        },
        {
          question: 'آیا امکان انتخاب تم خاص برای تولد هست؟',
          answer: 'بله، تم‌های متنوعی ارائه می‌دیم. همچنین می‌تونید تم خاص خودتون رو اعلام کنید تا بررسی و هماهنگی لازم انجام بشه.'
        },
        {
          question: 'می‌تونم کیک یا خوراکی از بیرون بیارم؟',
          answer: 'به دلایل بهداشتی و برنامه‌ریزی، پذیرش خوراکی بیرون فقط در موارد خاص و با هماهنگی قبلی امکان‌پذیره.'
        },
        {
          question: 'حضور والدین در جشن مجازه؟',
          answer: 'بله، حضور یکی از والدین یا سرپرست کودک در طول جشن الزامی هست.'
        }
      ]
    },
    {
      category: '🎮 فضای بازی و فعالیت‌ها',
      questions: [
        {
          question: 'بچه‌ها در چه سنی می‌تونن از شهربازی استفاده کنن؟',
          answer: 'مجموعه مناسب کودکان ۳ تا ۱۰ سال هست. برای سنین کمتر یا بیشتر، قبل از مراجعه با ما هماهنگ کنید.'
        },
        {
          question: 'آیا بازی‌ها ایمن هستند؟',
          answer: 'بله، تمام وسایل و فضاهای بازی تحت نظارت مربیان و با رعایت استانداردهای ایمنی طراحی شده‌اند و به‌طور مرتب ضدعفونی می‌شن.'
        },
        {
          question: 'آیا بچه‌ها در بازی‌ها تنها می‌مونن؟',
          answer: 'خیر. مربیان مجموعه در کنار کودکان حضور دارن و آن‌ها را راهنمایی و همراهی می‌کنن.'
        },
        {
          question: 'اگر وسیله‌ای گم بشه، مجموعه مسئول هست؟',
          answer: 'خیر، مسئولیت نگهداری وسایل شخصی با والدینه. بهتره وسایل ارزشمند به همراه نداشته باشید.'
        }
      ]
    },
    {
      category: '🏗️ شهر مشاغل و کلاس‌ها',
      questions: [
        {
          question: 'شهر مشاغل چیه؟',
          answer: 'شهر مشاغل فضایی شبیه‌سازی‌شده‌ست که بچه‌ها می‌تونن مشاغل مختلف مثل فروشندگی، آتش‌نشانی یا آشپزی رو تجربه کنن.'
        },
        {
          question: 'کلاس‌های آموزشی چه روزهایی برگزار می‌شن؟',
          answer: 'برنامه کلاس‌ها متغیر و قابل هماهنگی هست. برای دریافت جدول کامل، لطفاً با ما تماس بگیرید یا از طریق واتساپ پیام بدید.'
        }
      ]
    },
    {
      category: '💬 هماهنگی و پشتیبانی',
      questions: [
        {
          question: 'چطور می‌تونم سوال بیشتری بپرسم؟',
          answer: 'می‌تونید از طریق واتساپ یا تماس تلفنی مستقیم با ما در ارتباط باشید:\n📞 09917037267 | 07152451323'
        },
        {
          question: 'آیا با ما تماس گرفته می‌شه بعد از ثبت فرم؟',
          answer: 'بله، پس از ارسال فرم رزرو، همکاران ما حداکثر تا ۲۴ ساعت با شما تماس می‌گیرن. در صورتی که پاسخگو نباشید، رزرو لغو خواهد شد.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 animate-bounce-gentle">❓</div>
          <h2 className="text-4xl font-playful font-bold rainbow-text mb-4">سؤالات متداول</h2>
          <p className="text-xl text-gray-600">پاسخ سؤالات رایج درباره شهربازی فرشته</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-playful text-purple-700">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <Collapsible key={questionIndex}>
                      <CollapsibleTrigger
                        onClick={() => toggleItem(itemIndex)}
                        className="flex items-center justify-between w-full p-4 text-right bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors"
                      >
                        <span className="font-medium text-gray-800">
                          {questionIndex + 1}. {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-purple-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-purple-600" />
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 py-3 text-gray-700 leading-relaxed bg-gray-50 rounded-b-lg">
                        {item.answer.split('\n').map((line, lineIndex) => (
                          <p key={lineIndex} className={lineIndex > 0 ? 'mt-2' : ''}>
                            {line}
                          </p>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
