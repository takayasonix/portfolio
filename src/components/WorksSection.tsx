"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function WorksSection() {
  const [showAll, setShowAll] = useState(false);
  const initialShowCount = 6;
  
  const projects = [
    {
      title: 'どるふぃんずさんの撮影をしました',
      description: 'ハモネプで対バンした縁もあり、ヨネダ2000愛さん、京極さんなどなどが所属する「どるふぃんず」さんの撮影をさせていただきました。',
      image: '/takayaso_work_20240723.webp',
      category: '動画編集',
      date: '2024/07/23',
      link: 'https://youtu.be/NrjodXXQh5Y?si=7NwugutRg67R_lhd'
    },
    {
      title: '『8Law LIVE 〜After Party!!!』に出演しました',
      description: 'ハモネプで対バンした8Lawさんの主催ライブに呼んでいただきました。人生で一番楽しいライブでした。バリバリのみんなも来てくださったみなさんもサイコー！',
      image: '/takayaso_work_20240331.webp',
      category: 'アカペラ',
      date: '2024/03/31',
      link: '#'
    },
    {
      title: '『丸の内サディスティック / ハイカラ使節団』が公開されました',
      description: '千本桜に続き、丸サの動画も「PLUS Unison.」さんで公開されました。ハモネプ尺なので気軽に聞いてみてくださいな。',
      image: '/takayaso_work_20240322.webp',
      category: 'アカペラ',
      date: '2024/03/22',
      link: 'https://youtu.be/0Mi9ZkodHeU?si=MjNv-FWVJ5HbRs1b'
    },
    {
      title: 'プラユニライブ『+Universe』に出演しました',
      description: '昨年は観客席で見ていたプラユニライブに、なんとなんと出演させていただきました。クソデカステージで1200人のお客さんに向けて歌える経験は人生で最初で最後の経験かも。',
      image: '/takayaso_work_20240317.webp',
      category: 'アカペラ',
      date: '2024/03/17',
      link: 'https://youtu.be/NrjodXXQh5Y?si=7NwugutRg67R_lhd'
    },
    {
      title: '『千本桜 / ハイカラ使節団』が公開されました',
      description: 'ハモネプの予選で披露した千本桜を、「PLUS Unison.」さんに動画化していただきました。ハモネプとは少し違ったアレンジになっているのでぜひぜひ。',
      image: '/takayaso_work_20240303.webp',
      category: 'アカペラ',
      date: '2024/03/03',
      link: 'https://www.youtube.com/watch?v=xDoXlmX9DK4'
    },
    {
      title: '『全国ハモネプ大リーグ2024春』に出演しました',
      description: 'ハヰカラ使節団でハモネプに出演しました。結果は予選落ち！点数もなんかドベ3！でも最高に楽しかったのでオールオッケーです！',
      image: '/takayaso_work_20240302.webp',
      category: 'アカペラ',
      date: '2024/03/02',
      link: 'https://x.com/Hawikara_Ghanna/status/1763921374287130905?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1763921374287130905%7Ctwgr%5Edfe6a6f78b436761124113d79df3b3599e8b2832%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.notion.so%2Ftakayaso%2F94b4e168c3674923be85a8c04bbb318e'
    },
    {
      title: '『50fes ハイパーゲストステージ』に出演しました',
      description: 'ご縁があって、ハヰカラ使節団で大きなステージに立たせていただきました。',
      image: '/takayaso_work_20230321.webp',
      category: 'アカペラ',
      date: '2023/03/21',
      link: '#'
    },
    {
      title: '『嵐ラブソングメドレー / Ya☆Chai☆Nayo』の動画編集をしました',
      description: 'ガーナの2〜4年目バンド「Ya☆Chai☆Nayo」の動画編集をさせていただきました！後輩たちの思い出の作品になればと思います！',
      image: '/takayaso_work_20221210.webp',
      category: '動画編集',
      date: '2022/12/10',
      link: 'https://youtu.be/kXtN_CRMeOw'
    },
    {
      title: '『I wish × Superstition - ONEDAY』の動画編集をしました',
      description: 'おかのやともかさん（27万人）のチャンネルでアカペラ動画の編集をさせていただきました！',
      image: '/takayaso_work_20221111.webp',
      category: '動画編集',
      date: '2022/11/11',
      link: 'https://youtu.be/qG3xuA3HFtg'
    },
    {
      title: '『Love so sweet / 嵐 [ Acapella Cover ]』の動画編集をしました',
      description: 'MAVI CHANNELでのアカペラ動画を編集させていただきました。',
      image: '/takayaso_work_20220915.webp',
      category: '動画編集',
      date: '2022/09/15',
      link: 'https://youtu.be/DJCMoaXT3Es'
    },
    {
      title: '『アカペラロマンスメドレー / ハヰカラ使節団』が公開されました',
      description: 'PLUS Unison. さんのチャンネルで、自身が所属する「ハヰカラ使節団」の動画を作成していただきました。',
      image: '/takayaso_work_20220806.webp',
      category: 'アカペラ',
      date: '2022/08/06',
      link: 'https://youtu.be/tMsVul5Ff5A'
    },
    {
      title: '『PLUS Unison. 2022卒業生メドレー』に出演しました',
      description: 'PLUS Unison.さんの卒業生メドレーに、パーカスで出演させていただきました。すげー再生回数だ。',
      image: '/takayaso_work_20220331.webp',
      category: 'アカペラ',
      date: '2022/03/31',
      link: 'https://youtu.be/er77bOHI1Os'
    },
    {
      title: 'Around The World (ハモネプアレンジ / ペンタゴンズver.) が配信開始されました',
      description: 'ハモネプ出演記念で、自分たちの演奏がサブスク配信されました。Monkey Magicの「Around The World」の演奏を配信していただきました。',
      image: '/takayaso_work_20220318.webp',
      category: 'アカペラ',
      date: '2022/03/18',
      link: 'https://youtu.be/BolMrFHg9I4'
    },
    {
      title: 'ハヰカラ使節団ラストライブ『ハヰカラ博覧会』を主催しました',
      description: '自身が所属する「ハヰカラ使節団」のラストライブ『ハヰカラ博覧会』を主催しました。',
      image: '/takayaso_work_20220307.webp',
      category: 'アカペラ',
      date: '2022/03/07',
      link: 'https://youtube.com/playlist?list=PL46eKsY-Ddewp_FXMJ__JEAcjhEebbWUe'
    },
    {
      title: 'A cappella Spirits 2021 全国決勝大会に出場しました（ハヰカラ使節団）',
      description: '4年目の終わりにクラブチッタのステージに立ちました。',
      image: '/takayaso_work_20220225.webp',
      category: 'アカペラ',
      date: '2022/02/25',
      link: '#'
    },
    {
      title: 'GhannaGhanna WinterLive2021『この声に耳を傾けて』に出演しました',
      description: '4年目冬のライブです。シェア班とチア班長として委員に関わり、PANDEMIX、ハヰカラ使節団、Meta-Montageの3バンドと4回生ステージで出演しました。',
      image: '/takayaso_work_20211212.webp',
      category: 'アカペラ',
      date: '2021/12/12',
      link: 'https://youtu.be/0W5k7C0kHvU'
    },
    {
      title: 'A cappella Spirits 2021 4年生全国大会で優勝しました（ハヰカラ使節団）',
      description: 'ハヰカラ使節団で4年生全国大会、優勝しました。関西最終で悔しい思いしたのでリベンジ果たせたんじゃないかと。',
      image: '/takayaso_work_20211121.webp',
      category: 'アカペラ',
      date: '2021/11/21',
      link: 'https://youtu.be/bMYtq7UwiY0'
    },
    {
      title: '『Lady Gaga Medley - Artpop / VoicePlay』が公開されました（ハヰカラ使節団）',
      description: '「あえてのArtpop」が映像に。感慨深いですね。映像のコンセプトは"岩倉使節団"のオマージュで、ちゃんはまの背筋にも注目です。',
      image: '/takayaso_work_20211115.webp',
      category: 'アカペラ',
      date: '2021/11/15',
      link: 'https://youtu.be/am1WFS3ip5g'
    },
    {
      title: 'Daft Punk / Pentatonix（PANDEMIX）が公開されました',
      description: 'ハモネプ出演にあたって、Pentatonixの代表曲「Daft Punk」をカバーしました。',
      image: '/takayaso_work_20210815.webp',
      category: 'アカペラ',
      date: '2021/08/15',
      link: 'https://youtu.be/Uk6b5j8V9No'
    },
    {
      title: '『全国ハモネプリーグ2021夏』にペンタゴンズで出演しました',
      description: '『全国ハモネプリーグ2021夏』に、「PANDEMIX」あらため「ペンタゴンズ」で出演させていただきました。',
      image: '/takayaso_work_20210814.webp',
      category: 'アカペラ',
      date: '2021/08/14',
      link: 'https://x.com/Pandemix_Ghanna/status/1423863102982918150?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1423863102982918150%7Ctwgr%5Edfe6a6f78b436761124113d79df3b3599e8b2832%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.notion.so%2Ftakayaso%2F94b4e168c3674923be85a8c04bbb318e'
    },
    {
      title: '『MotownFillie - The Filharmonic』が公開されました（ハヰカラ使節団）',
      description: 'サークル内で、4年目同期バンドを結成しました。動画編集とTwitter広報やりました。お披露目動画は900いいねを超えましたやた。',
      image: '/takayaso_work_20210615.webp',
      category: 'アカペラ',
      date: '2021/06/15',
      link: 'https://x.com/Hawikara_Ghanna/status/1404774724052295686?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1404774724052295686%7Ctwgr%5Edfe6a6f78b436761124113d79df3b3599e8b2832%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.notion.so%2Ftakayaso%2F94b4e168c3674923be85a8c04bbb318e'
    },
    {
      title: '『†卍漆黒の白天使卍† × 狂凛 共催ラストライブ』に出演しました',
      description: '自身が所属するアカペラグループ「狂凛」のラストライブでした。共催は後に「アダムス」としてハモネプに出演する「†卍漆黒の白天使卍†」です。いいバンド、いいライブでした。',
      image: '/takayaso_work_20210309.webp',
      category: 'アカペラ',
      date: '2021/03/09',
      link: '#'
    },
    {
      title: '『The Sound of Silence / Pentatonix』が公開されました（PANDEMIX）',
      description: '冬の六甲山を朝8時に登山し、凍えながら撮影しました。PANDEMIXとしては、2つ目の作品になります。これがハモネプ出演につながったらしい。',
      image: '/takayaso_work_20210309.webp',
      category: 'アカペラ',
      date: '2021/03/09',
      link: 'https://youtu.be/KXgkvrczbKs'
    },
    {
      title: '『勿忘/Awesome City Club - sinfonia × ザ・コンティニューズ』の動画編集をしました',
      description: 'サークルの先輩であるたいせーさんが所属する「ザ・コンティニューズ」と「sinfonia」とのコラボ動画を編集させていただきました。',
      image: '/takayaso_work_20210228.webp',
      category: '動画編集',
      date: '2021/02/28',
      link: 'https://youtu.be/C-hAi7G5foA'
    },
    {
      title: '独自キーボード配列「takayaso配列」を公開しました',
      description: '自作キーボードにハマっていたので、自作配列を作成しました。',
      image: '/takayaso_work_20210124.webp',
      category: 'キーボード',
      date: '2021/01/24',
      link: '#'
    },
    {
      title: '『【ほしのディスコ×ザ・コンティニューズ】Pretender/Official髭男dism』の動画編集をしました',
      description: 'ハモネプ優勝グループ「ザ・コンティニューズ」の、ほしのディスコさんとのコラボ動画を編集させていただきました。',
      image: '/takayaso_work_20201229.webp',
      category: '動画編集',
      date: '2020/12/29',
      link: 'https://www.youtube.com/embed/oaAkT6niyT4'
    },
    {
      title: '『【わがくんコラボ】snow jam / Rin音』の動画編集をしました',
      description: 'たいせーさんの、積分サークル・わがさんとのコラボ動画を編集させていただきました。初の委託の動画編集で緊張しました。',
      image: '/takayaso_work_20201002.webp',
      category: '動画編集',
      date: '2020/10/02',
      link: 'https://youtu.be/PNoqIKhT8vE'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-10 bg-black px-4 py-1 inline-block">
            制作
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, showAll ? projects.length : initialShowCount).map((project, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-white/50 flex flex-col transition-all duration-300">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <p className="text-sm text-gray-500">
                        {project.date}
                      </p>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {project.link !== '#' && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer group"
                      >
                        <span className="text-sm font-medium mr-2">詳細を見る</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {projects.length > initialShowCount && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-gray-600 hover:text-gray-800 px-6 py-3 transition-colors duration-200 flex items-center mx-auto space-x-2"
              >
                <span>{showAll ? '作品を隠す' : `さらに${projects.length - initialShowCount}件表示する`}</span>
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
        </div>
      </div>
    </section>
  );
}
