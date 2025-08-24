'use client';

import React, { useEffect, useState, useRef } from 'react';
import { getRepositoryContributions, generateObsidianVaultDummyContributions, RepositoryContributions } from '../lib/github';
import Image from 'next/image';

interface BrainSectionProps {
  username: string;
  repositoryName?: string;
}

export default function BrainSection({ username, repositoryName = 'obsidian-vault' }: BrainSectionProps) {
  const [contributions, setContributions] = useState<RepositoryContributions | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (loading) return;

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

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const fetchRepositoryContributions = async () => {
      try {
        console.log('Environment check:', {
          NODE_ENV: process.env.NODE_ENV,
          hasToken: !!process.env.NEXT_PUBLIC_GITHUB_TOKEN,
          tokenLength: process.env.NEXT_PUBLIC_GITHUB_TOKEN?.length || 0,
          tokenPreview: process.env.NEXT_PUBLIC_GITHUB_TOKEN ? `${process.env.NEXT_PUBLIC_GITHUB_TOKEN.substring(0, 10)}...` : 'undefined'
        });
        
        let data: RepositoryContributions | null = null;
        
        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
          console.log('Attempting to fetch from GitHub API...');
          data = await getRepositoryContributions(username, repositoryName);
          console.log('GitHub API response:', data);
        } else {
          console.log('No GitHub token found, will use dummy data');
        }
        
        if (!data) {
          console.log('Using dummy data...');
          data = generateObsidianVaultDummyContributions();
        }
        
        console.log('Final data to display:', data);
        console.log('Weeks count:', data.contributions.weeks.length);
        console.log('First week:', data.contributions.weeks[0]);
        
        setContributions(data);
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
        const fallbackData = generateObsidianVaultDummyContributions();
        console.log('Fallback data:', fallbackData);
        setContributions(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositoryContributions();
  }, [username, repositoryName]);

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] border border-white border-opacity-20 p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4"></div>
            <div className="grid grid-cols-13 gap-1">
              {Array.from({ length: 91 }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gray-200 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!contributions) {
    console.log('Contributions is null, returning null');
    return null;
  }

  console.log('Rendering with contributions:', contributions);
  console.log('Weeks array:', contributions.contributions.weeks);
  console.log('Weeks length:', contributions.contributions.weeks?.length);
  console.log('First week:', contributions.contributions.weeks?.[0]);

  const getColorClass = (count: number): string => {
    if (count === 0) return 'bg-gray-100';
    if (count <= 3) return 'bg-green-200';
    if (count <= 6) return 'bg-green-300';
    if (count <= 9) return 'bg-green-400';
    return 'bg-green-500';
  };

  const getTooltipText = (count: number, date: string): string => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (count === 0) return `${formattedDate}: 0 contributions`;
    if (count === 1) return `${formattedDate}: 1 contribution`;
    return `${formattedDate}: ${count} contributions`;
  };

  return (
    <section id="brain" className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300" ref={sectionRef}>
      <div 
        className={`container mx-auto px-4 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-gradient-to-r from-gray-700 to-gray-800 shadow-[4px_4px_8px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.1)] px-4 py-1 inline-block rounded-none">
            脳内
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* 左側：Obsidianカード */}
            <div className="flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300">
                {/* 画像 */}
                <div className="w-full h-48 md:h-48 bg-gray-200 relative">
                  <Image
                    src="/takayaso_obsidian_official.jpg"
                    alt="Obsidian"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* コンテンツ */}
                <div className="p-4 md:p-5">
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className="text-xl md:text-2xl mr-2 md:mr-3">📝</div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">Obsidian</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    記憶と思考をAIリーダブルな情報として入出力し、資産化することにハマっています。一部は<a href="https://brain.takayaso.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">brain.takayaso.com</a>で公開しています。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 右側：草の表示カード */}
            <div className="flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 md:p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] transition-all duration-300">
                {/* 見出し */}
                <div className="mb-3 md:mb-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700">Obsidian Contributions</h3>
                </div>
                
                {/* リポジトリリンク */}
                <div className="mb-3 md:mb-4 text-center">
                  <a
                    href={contributions.repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {username}/{repositoryName}
                  </a>
                </div>

                {/* 草の表示 */}
                <div className="space-y-1 md:space-y-2 flex flex-col items-center mb-4 md:mb-0">
                  {!contributions.contributions.weeks || contributions.contributions.weeks.length === 0 ? (
                    <div className="text-center py-3 md:py-4">
                      <p className="text-gray-600 text-sm md:text-base">データがありません</p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        Weeks: {contributions.contributions.weeks?.length || 0}
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* 月のラベル（横軸の上部） */}
                      <div className="flex items-center space-x-1 mb-1 md:mb-2">
                        {contributions.contributions.weeks.slice(-13).map((week, weekIndex) => {
                          const weekStart = new Date(week.contributionDays[0]?.date || '');
                          const isFirstWeekOfMonth = weekStart.getDate() <= 7;
                          
                          // 月名を英語3文字表記に変換
                          const monthNames = [
                            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                          ];
                          const monthName = monthNames[weekStart.getMonth()];
                          
                          return (
                            <div key={weekIndex} className="w-3 md:w-4 text-center">
                              {isFirstWeekOfMonth && (
                                <span className="text-xs md:text-sm text-gray-500">
                                  {monthName}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* 曜日ごとの草を縦に表示 */}
                      {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                        return (
                          <div key={dayOfWeek} className="flex items-center space-x-1 md:space-x-2">
                            {/* その曜日の草を横に表示（過去3ヶ月分） */}
                            <div className="flex space-x-1 md:space-x-2">
                              {contributions.contributions.weeks.slice(-13).map((week, weekIndex) => {
                                const day = week.contributionDays[dayOfWeek];
                                if (!day) return <div key={weekIndex} className="w-3 h-3 md:w-4 md:h-4"></div>;
                                
                                const dayDate = new Date(day.date);
                                const isToday = dayDate.toDateString() === new Date().toDateString();
                                
                                return (
                                  <div key={weekIndex} className="relative">
                                    <div
                                      className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer ${
                                        getColorClass(day.contributionCount)
                                      } ${isToday ? 'ring-1 ring-blue-500' : ''}`}
                                      title={getTooltipText(day.contributionCount, day.date)}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
