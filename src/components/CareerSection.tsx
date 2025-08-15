import Image from 'next/image';

export default function CareerSection() {
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
      title: '神戸大学院',
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
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            経歴
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className="flex items-center">
                  {/* 左側：点（アイコン入り） */}
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full mr-6 flex-shrink-0 flex items-center justify-center text-gray-700 text-lg shadow-lg border border-gray-200/50">
                    {item.type === 'career' ? '🏢' : '🎓'}
                  </div>
                  {/* 右側：カード */}
                  <div className="flex-1">
                    {/* スマホ：画像の上にテキストを重ねる */}
                    <div className="md:hidden relative rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 overflow-hidden transition-all duration-300">
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
                    <div className="hidden md:block bg-white/20 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 overflow-hidden transition-all duration-300">
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
