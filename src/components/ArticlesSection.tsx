import Image from 'next/image';
import { getNoteArticles } from '@/lib/note';

export default async function ArticlesSection() {
  const articles = await getNoteArticles();

  return (
    <section id="notes" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            記事
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                          {new Date(article.pubDate).toLocaleDateString('ja-JP')}
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
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                記事が見つかりませんでした
              </h3>
              <p className="text-gray-500">
                記事の取得に失敗したか、記事が存在しません。<br />
                設定を確認するか、しばらく時間をおいて再度お試しください。
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
