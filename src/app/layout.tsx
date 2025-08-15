import type { Metadata } from "next";
import { Noto_Sans_JP, Lato } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Takaya Onishi - takayaso",
  description: "背が小さくて服が大きいプロダクトマネージャー見習いです。 好きな言葉は「サバイブ」。ネプチューンの名倉潤が11親等の親戚。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
