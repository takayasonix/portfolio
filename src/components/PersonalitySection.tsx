'use client';

import { useEffect, useRef, useState } from 'react';

export default function PersonalitySection() {
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
  const strengths = [
          {
        icon: '🛠️',
        name: '戦略性',
        description: '複雑な状況を整理し、最適な道筋を見つける'
      },
      {
        icon: '📦',
        name: '収集心',
        description: '情報や知識を集め、蓄積することを好む'
      },
      {
        icon: '🥅',
        name: '目標志向',
        description: '明確な目標を設定し、効率的に達成する'
      },
      {
        icon: '🔥',
        name: '達成欲',
        description: '目標達成に向けて粘り強く取り組む'
      },
      {
        icon: '💨',
        name: '活発性',
        description: '行動的で、新しいことに挑戦する'
      },
      {
        icon: '💭',
        name: '未来志向',
        description: '将来の可能性やビジョンを描く'
      },
      {
        icon: '🤔',
        name: '内省',
        description: '深く考え、自己理解を深める'
      },
      {
        icon: '📊',
        name: '分析思考',
        description: '論理的に物事を分析し、理解する'
      },
      {
        icon: '👣',
        name: '自我',
        description: '自分の価値観や信念に基づいて行動する'
      }
  ];

  return (
    <section 
      ref={sectionRef}
      id="strengths" 
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-gradient-to-r from-gray-700 to-gray-800 shadow-[4px_4px_8px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.1)] px-4 py-1 inline-block rounded-none">
            性格
          </h2>
          <p className="text-center text-gray-600 mb-8">
            ストレングスファインダー
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-3 md:gap-4 justify-items-center">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-1.5 md:p-2 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all duration-300 w-24 md:w-22">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl mb-1.5 md:mb-2">{strength.icon}</div>
                  <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
                    {strength.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
