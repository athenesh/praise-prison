import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "긍정 교화소 - 칭찬으로 치유하는 멘탈 케어 서비스 | Praise Prison",
  description: "우울하고 지친 하루를 칭찬과 유머로 바꿔드립니다. AI 교도관이 당신의 잠재력을 발견하고 히어로 등록증을 발급해드려요. 무료 멘탈 케어, 자존감 향상, 긍정 에너지 충전! 팩트 취조실에서 낭비한 시간의 가치도 확인하세요.",
  authors: [{ name: "Praise Prison Team" }],
  creator: "Praise Prison",
  publisher: "Praise Prison",
  openGraph: {
    title: "긍정 교화소 - 칭찬으로 치유하는 멘탈 케어",
    description: "우울한 죄를 고백하면 칭찬으로 가둬드립니다. AI가 당신의 잠재력을 발견합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "긍정 교화소 (Praise Prison)",
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google AdSense Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-7379075324068520" />
        {/* Google AdSense Script */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
