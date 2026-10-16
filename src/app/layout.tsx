import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: {
    default: "إنسان ENSAN | استشارة أوضح، وخطوة أهدى",
    template: "%s | إنسان ENSAN",
  },
  description:
    "منصة عربية لاكتشاف المستشارين في مجالات متعددة وقراءة ملفاتهم والتواصل معهم بالطريقة المناسبة — بخطوات واضحة وتجربة بسيطة.",
  keywords: ["استشارات", "مستشارين", "تطوير مهني", "ريادة أعمال", "استشارة عربية", "ENSAN"],
  authors: [{ name: "ENSAN" }],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "إنسان ENSAN",
    title: "إنسان ENSAN | استشارة أوضح، وخطوة أهدى",
    description:
      "اكتشف مستشارين في مجالات متعددة، وتواصل بالطريقة التي تناسبك — بخطوات واضحة وتجربة بسيطة.",
  },
  twitter: {
    card: "summary_large_image",
    title: "إنسان ENSAN | استشارة أوضح، وخطوة أهدى",
    description: "كل سؤال مهم… يستحق الشخص المناسب.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arabic.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-sm focus:font-bold"
        >
          تخطَّ إلى المحتوى
        </a>
        <Header />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
