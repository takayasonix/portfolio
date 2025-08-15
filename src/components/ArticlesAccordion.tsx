'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NoteArticle {
  title: string;
  description?: string;
  link: string;
  pubDate: string;
  image?: string;
  source?: string;
  color?: string;
}

interface ArticlesAccordionProps {
  articles: NoteArticle[];
}

export default function ArticlesAccordion({ articles }: ArticlesAccordionProps) {
  const [showAll, setShowAll] = useState(false);
  const initialShowCount = 4;

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.slice(0, showAll ? articles.length : initialShowCount).map((article, index) => (
          <div
            key={index}
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 bg-gray-200">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/no-image.png"
                  alt="画像なし"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <p className="text-sm text-gray-500">
                    {new Date(article.pubDate).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    }).replace(/\//g, '/')}
                  </p>
                  {article.source && (
                                            <span className={`text-xs font-medium px-3 py-1 rounded-full shadow-sm ${article.color || 'bg-gray-100 text-black'}`}>
                          {article.source}
                        </span>
                  )}
                </div>
                <a
                  href={article.link}
                  target={article.link.startsWith('http') ? "_blank" : "_self"}
                  rel={article.link.startsWith('http') ? "noopener noreferrer" : ""}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer group"
                >
                  <span className="text-sm font-medium mr-2">記事を読む</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {articles.length > initialShowCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-600 hover:text-gray-800 px-6 py-3 transition-colors duration-200 flex items-center mx-auto space-x-2"
          >
            <span>{showAll ? '記事を隠す' : `さらに${articles.length - initialShowCount}件表示する`}</span>
            <svg 
              className={`w-5 h-5 transform transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
