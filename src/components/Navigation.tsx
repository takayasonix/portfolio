'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'こんにちは', href: '#about' },
    { name: '性格', href: '#strengths' },
    { name: '経歴', href: '#timeline' },
    { name: '趣味', href: '#interests' },
    { name: '脳内', href: '#brain' },
    { name: '記事', href: '#notes' },
    { name: '記録', href: '#projects' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* ハンバーガーメニューボタン（浮かせて表示） */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-gray-900"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 全画面モーダル */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-lg mx-4">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-center py-4 text-gray-900 hover:text-gray-700 transition-all duration-300 text-xl font-bold cursor-pointer hover:scale-105"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
