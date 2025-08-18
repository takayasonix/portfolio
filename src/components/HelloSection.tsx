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
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-gradient-to-r from-gray-700 to-gray-800 shadow-[4px_4px_8px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.1)] px-4 py-1 inline-block rounded-none">
            こんにちは
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                         {/* 左側：画像 */}
               <div className="flex items-center justify-center">
                 <div className="w-full aspect-video md:aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300">
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
            <div className="w-full aspect-video md:aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 md:p-5 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] flex flex-col justify-center transition-all duration-300">

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
