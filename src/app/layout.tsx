import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { profile, seo } from "@/data/profile";
import { getSiteUrl } from "@/lib/site-url";
import { Analytics } from "@/components/analytics";
import { PersonJsonLd } from "@/components/person-json-ld";
import "./globals.css";

// display "optional": no late font swap, so text never repaints after first paint (better LCP/CLS).
const inter = Inter({ subsets: ["latin"], display: "optional", variable: "--font-inter" });

// Absolute URL: getSiteUrl() already includes any base path (e.g. /Portfolio).
const ogImage = `${getSiteUrl()}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: `${getSiteUrl()}/` },
  openGraph: {
    type: "profile",
    url: `${getSiteUrl()}/`,
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
    firstName: "Abdessamad",
    lastName: "Belahcen",
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${profile.name} — ${profile.title}` }],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [ogImage] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        <PersonJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
