'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HelloSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            こんにちは
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                         {/* 左側：画像 */}
               <div className="flex items-center justify-center">
                 <div className="w-full aspect-video md:aspect-[4/3] bg-gradient-to-br from-gray-100 to-slate-200 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300">
                   <Image
                     src="/takayaso_about_image.jpg"
                     alt="About画像"
                     width={400}
                     height={300}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
          
          {/* 右側：テキストカード */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-video md:aspect-[4/3] bg-white/70 backdrop-blur-sm rounded-2xl p-5 md:p-5 shadow-xl hover:shadow-2xl flex flex-col justify-center transition-all duration-300">

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                神戸大学大学院惑星学専攻を修了後、ディップ株式会社にプロダクト企画職で入社。<br />
                バイトルでのサイト改善の経験を経て、新卒1年目からバイトルNEXTアプリのPOを担当。<br />
                現在はバイトルアプリのグロースと運用を全部やるひとりディレクター。<br />
                学生時代はアカペラに没頭し、全国優勝やテレビ特番『ハモネプリーグ』出演を経験。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
