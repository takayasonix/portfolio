'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HobbiesSection() {
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
  const interests = [
    {
      title: '宇宙',
      description: '幼少期に星新一の作品で宇宙に思いを馳せ、『宇宙兄弟』に背中を押されて、大学院まで宇宙の研究をしていました。',
      icon: '🚀',
      image: '/takayaso-space.jpg'
    },
    {
      title: 'アカペラ',
      description: '大学では4年間アカペラサークルにいました。メンバーに恵まれ全国優勝やハモネプ出演を経験しました。',
      icon: '🎵',
      image: '/takayaso-acappella.jpg'
    },
    {
      title: '自作キーボード',
      description: '大学時代に3つのキーボードをビルドしました。左右交互打鍵に特化した、takayaso配列も考案しました。',
      icon: '⌨️',
      image: '/takayaso-keyboard.jpg'
    },
    {
      title: 'Obsidian',
      description: '記憶と思考をAIリーダブルな情報として入出力し、資産化することにハマっています。一部は[brain.takayaso.com]で公開しています。',
      icon: '📝',
      image: '/takayaso_obsidian.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="interests" 
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-gradient-to-r from-gray-600 to-gray-700 shadow-[4px_4px_8px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.1)] px-4 py-1 inline-block rounded-lg">
            趣味
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] overflow-hidden hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] transition-all duration-300">
                {/* 画像 */}
                <div className="w-full h-48 bg-gray-200 relative">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* コンテンツ */}
                <div className="p-4 md:p-5">
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className="text-xl md:text-2xl mr-2 md:mr-3">{interest.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {interest.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {interest.description.includes('[brain.takayaso.com]') ? (
                      <>
                        {interest.description.split('[brain.takayaso.com]').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <a
                                href="https://brain.takayaso.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                こちら
                              </a>
                            )}
                          </span>
                        ))}
                      </>
                    ) : (
                      interest.description.split('takayaso配列').map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <a
                              href="https://note.com/takayasonix/n/n1ffd210aefe3"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline"
                            >
                              takayaso配列
                            </a>
                          )}
                        </span>
                      ))
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
