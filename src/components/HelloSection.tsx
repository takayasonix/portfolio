import Image from 'next/image';

export default function HelloSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            こんにちは
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                         {/* 左側：画像 */}
               <div className="flex items-center justify-center">
                 <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-slate-200 rounded-2xl shadow-xl border border-white/50 overflow-hidden">
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
            <div className="w-full aspect-video bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
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
