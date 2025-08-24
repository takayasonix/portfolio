import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:thumbnail']
  }
});

export interface NoteArticle {
  title: string;
  link: string;
  pubDate: string;
  image?: string;
  source?: string; // 記事の出典（note、Qiita、ブログなど）
  color?: string; // 出典の色（tailwindの色クラス）
}

// 手動で追加する記事
const manualArticles: NoteArticle[] = [
  {
    title: '「変だから採用」宇宙オタク院生がプロダクトオーナーに！成功の秘訣とは…？',
    link: 'https://dippeople.dip-net.jp/20152/',
    pubDate: '2025-05-08T00:00:00.000Z',
    image: '/takayaso_visual_rectangle.jpg', // 実際に存在するファイル名に修正
    source: 'dip people'
  }
];

export async function getNoteArticles(): Promise<NoteArticle[]> {
  try {
    // 実際のnoteのRSS URL
    const rssUrl = 'https://note.com/takayasonix/rss';
    
    const feed = await parser.parseURL(rssUrl);
    
    const rssArticles: NoteArticle[] = feed.items.slice(0, 5).map(item => {
      // noteのRSSでは enclosure.url がOGPに近いサムネイル画像を含む
      let imageUrl = undefined;
      
      // 1. enclosure.url を優先（noteのサムネイル画像）
      if (item.enclosure?.url) {
        imageUrl = item.enclosure.url;
      }
      // 2. media:thumbnail をフォールバック
      else if (item['media:thumbnail']) {
        imageUrl = item['media:thumbnail'];
      }
      
      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        image: imageUrl,
        source: 'note'
      };
    });

    // RSS記事と手動記事を統合
    const allArticles = [...rssArticles, ...manualArticles];
    
    // 日付順でソート（新しい順）
    return allArticles.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime();
      const dateB = new Date(b.pubDate).getTime();
      return dateB - dateA;
    }).slice(0, 8); // 最新8件を表示
    
  } catch (error) {
    console.error('Note RSS取得エラー:', error);
    
    // エラー時は手動記事のみを返す
    return manualArticles.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime();
      const dateB = new Date(b.pubDate).getTime();
      return dateB - dateA;
    });
  }
}
