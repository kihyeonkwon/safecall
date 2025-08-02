import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SafeCall - AI 보이스피싱 예방 훈련 서비스",
  description:
    "생성형 AI를 활용한 보이스피싱 예방 훈련으로 부모님의 자산을 지키세요. 딥페이크 음성 사기로부터 가족을 보호하는 가장 확실한 방법입니다.",
  keywords: "보이스피싱, AI, 딥페이크, 사기 예방, 음성 인식, 부모님 보호",
  authors: [{ name: "SafeCall Team" }],
  creator: "SafeCall",
  publisher: "SafeCall",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://safecall.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SafeCall - AI 보이스피싱 예방 훈련 서비스",
    description: "딥페이크 음성 사기로부터 부모님을 보호하는 가장 확실한 방법",
    url: "https://safecall.kr",
    siteName: "SafeCall",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeCall - AI 보이스피싱 예방 훈련 서비스",
    description: "딥페이크 음성 사기로부터 부모님을 보호하는 가장 확실한 방법",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        {/* Hotjar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
