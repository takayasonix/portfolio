'use client';

import Image from 'next/image';
import { Github, Twitter, Linkedin, Instagram, ExternalLink, Dna, File } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
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
  const socialLinks = [
    {
      name: '脳内',
      url: 'https://brain.takayaso.com',
      icon: Dna,
      color: 'text-gray-700 md:hover:text-gray-900'
    },
    {
      name: 'X',
      url: 'https://x.com/takayaso',
      icon: Twitter,
      color: 'text-blue-400 md:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/takayasonix',
      icon: Instagram,
      color: 'text-pink-500 md:hover:text-pink-500'
    },
    {
      name: 'note',
      url: 'https://note.com/takayasonix',
      icon: File,
      color: 'text-green-500 md:hover:text-green-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-slate-100"
    >
      <div 
        className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="mb-8">
          <div className="relative w-[200px] h-[200px] mx-auto mb-6">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <Image
              src="/takayaso_profile_image.jpg"
              alt="プロフィール画像"
              width={200}
              height={200}
              className="rounded-full shadow-2xl hover:border-4 hover:border-white transition-all duration-300 relative z-10"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          大西 貴也
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
          @takayaso
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          背が小さくて服が大きいPdM見習いです。<br />
          好きな言葉は「サバイブ」。<br />
          ネプチューンの名倉潤が11親等の親戚。
        </p>
        
        {/* SNSリンク */}
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-4 md:gap-6 max-w-72 md:max-w-none mx-auto place-items-center md:place-items-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 aspect-square rounded-full border border-white/50 bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${social.color} ${
                social.name === '脳内' ? 'w-full md:w-auto md:px-6 col-span-3 md:col-span-1' : ''
              }`}
            >
              <div className={`${social.name === '脳内' ? 'w-12 h-12 md:w-16 md:h-16' : 'w-12 h-12 md:w-16 md:h-16'} aspect-square flex items-center justify-center`}>
                <social.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              {social.name === '脳内' && (
                <span className="block ml-2 text-base md:text-lg font-medium text-gray-700 tracking-wide">
                  brain.takayaso.com
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
