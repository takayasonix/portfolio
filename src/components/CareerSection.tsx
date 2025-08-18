'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CareerSection() {
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
  const timelineData = [
    {
      year: '2024 - ',
      title: 'ディップ株式会社',
      description: 'バイトル企画部',
      type: 'career',
      image: '/takayaso-timeline-dip.jpg'
    },
    {
      year: '2022 - 2024',
      title: '神戸大学 大学院',
      description: '理学研究科 惑星学専攻',
      type: 'education',
      image: '/takayaso-timeline-master.jpg'
    },
    {
      year: '2018 - 2022',
      title: '神戸大学',
      description: '理学部 惑星学科',
      type: 'education',
      image: '/takayaso-timeline-bachelor.jpg'
    },
    {
      year: '1999 - 2018',
      title: '兵庫県 丹波市',
      description: '出身',
      type: 'birth',
      image: '/takayaso-timeline-birth.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="timeline" 
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
                <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-gradient-to-r from-gray-600 to-gray-700 shadow-[4px_4px_8px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.1)] px-4 py-1 inline-block rounded-lg">
            経歴
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gray-400 to-gray-300 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className="flex items-center">
                  {/* 左側：点（アイコン入り） */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mr-6 flex-shrink-0 flex items-center justify-center text-gray-700 text-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all duration-300">
                    {item.type === 'career' ? '🏢' : item.type === 'birth' ? '🌾' : '🎓'}
                  </div>
                  {/* 右側：カード */}
                  <div className="flex-1">
                    {/* スマホ：画像の上にテキストを重ねる */}
                    <div className="md:hidden relative rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* 背景画像 */}
                      <div className="w-full h-48 relative">
                        <Image
                          src={item.image}
                          alt="背景画像"
                          fill
                          className="object-cover"
                          style={{
                            opacity: 0.5
                          }}
                        />
                        {/* 画像の上にグラデーションオーバーレイ */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      </div>
                      {/* テキスト（画像の上に重ねる） */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="mb-3">
                          <div className="text-sm font-medium text-white/90">
                            {item.year}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* デスクトップ：左右分割レイアウト */}
                    <div className="hidden md:block bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300">
                      <div className="flex">
                        {/* 左半分：テキスト */}
                        <div className="w-1/2 p-6 text-left">
                          <div className="mb-3">
                            <div className="text-sm font-medium text-gray-600">
                              {item.year}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        {/* 右半分：画像 */}
                        <div className="w-1/2 relative">
                          <Image
                            src={item.image}
                            alt="背景画像"
                            fill
                            className="object-cover"
                            style={{
                              maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                              opacity: 0.95
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
