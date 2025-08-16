import Image from 'next/image';

export default function HobbiesSection() {
  const interests = [
    {
      title: '宇宙',
      description: '「惑星の旅」「星新一」に魅了され、『宇宙兄弟』の愛読者を経て、大学院まで宇宙の研究をしていました。',
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
      description: '大学時代に自作で3つビルドしました。左右交互打鍵に特化した、takayaso配列も自作しました。',
      icon: '⌨️',
      image: '/takayaso-keyboard.jpg'
    },
    {
      title: 'Obsidian',
      description: '記憶と思考をAIリーダブルな情報として入出力し、資産化することにハマっています。一部はこちら[brain.takayaso.com]で公開しています。',
      icon: '📝',
      image: '/takayaso_obsidian.jpg'
    }
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            趣味
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
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
                                className="text-gray-600 hover:text-gray-800 underline"
                              >
                                こちら
                              </a>
                            )}
                          </span>
                        ))}
                      </>
                    ) : (
                      interest.description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < interest.description.split('\n').length - 1 && <br />}
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
