import Image from 'next/image';
import { getNoteArticles } from '@/lib/note';
import ArticlesAccordion from '@/components/ArticlesAccordion';

export default async function ArticlesSection() {
  const articles = await getNoteArticles();
  console.log('Articles fetched:', articles); // デバッグ用

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
            <ArticlesAccordion articles={articles} />
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
