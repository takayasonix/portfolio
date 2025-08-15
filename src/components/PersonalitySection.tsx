export default function PersonalitySection() {
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
    <section id="strengths" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            性格
          </h2>
          <p className="text-center text-gray-600 mb-8">
            ストレングスファインダー
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-3 md:gap-4 justify-items-center">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-1.5 md:p-2 hover:shadow-2xl transition-all duration-300 w-24 md:w-22">
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
