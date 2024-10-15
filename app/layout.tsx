import Navigation from "@/components/navigation/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/navigation/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Avide - Portfolio/Tech Blog",
  description: "A minimal portofolio and blog website.",
  keywords:
    "portfolio, tech blog, Gustavo Avide, web development, JavaScript, React, AWS, Next",
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
