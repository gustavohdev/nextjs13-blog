import Navigation from "@/components/navigation/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/navigation/footer";
import siteConfig from "@/config/site";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Avide - Software Engineer",
  description:
    "Welcome to my portfolio and tech blog where I share insights on technology, coding, and personal projects.",
  keywords:
    "portfolio, tech blog, Gustavo Avide, web development, JavaScript, React, AWS, Next, TypeScript, Nodejs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gustavoavide.com",
    title: "Gustavo Avide - Software Engineer",
    description: "Insights on technology, coding, and personal projects.",
    images: [
      {
        url: siteConfig.photo,
        width: 150,
        height: 100,
        alt: "Gustavo Avide - Portfolio Banner",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10 min-h-[calc(100vh-400px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
