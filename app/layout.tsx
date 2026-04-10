import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoTour — AI 智慧語音導覽服務",
  description: "為博物館、美術館、觀光景點打造的 AI 語音導覽與智慧客服解決方案",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
