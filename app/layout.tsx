import Navigation from "@/components/navigation/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/navigation/footer";
import siteConfig from "@/config/site";
import Script from "next/script";

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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @TODO: Maybe there's a better way to not cache and revalidate the data.
  // was buggy when putting "page" in the type inside the revalidate tag, sometimes the home page revalidated, sometimes not
  // sometimes only the post revalidated

  if (process.env.NODE_ENV === "development") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?token=${process.env.ADMIN_TOKEN}`,
      { cache: "no-store" } // Ensures no caching
    );

    const data = await response.json();
    console.log("nothing cached, new data: ", data);
  }
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LEDQYCMCN3"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LEDQYCMCN3')`}
      </Script>
      <body className={inter.className}>
        <Navigation />
        <div className="pt-10 min-h-[calc(100vh-400px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
