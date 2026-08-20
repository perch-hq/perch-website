import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const viewport = {
  themeColor: "#0c0b0a",
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${copy.meta.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: copy.meta.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: site.url },
  applicationName: site.name,
  keywords: [
    "Perch",
    "Solana",
    "Hummingbot",
    "Condor",
    "hummingbot-api",
    "hosted Hummingbot",
    "Meteora",
    "Colosseum",
  ],
  authors: [{ name: "Perch" }],
  openGraph: {
    title: site.name,
    description: copy.meta.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: copy.meta.tagline,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: copy.meta.tagline,
    creator: "@poroburu",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: site.url,
  description: copy.meta.description,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body className="bg-bg font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          {copy.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
