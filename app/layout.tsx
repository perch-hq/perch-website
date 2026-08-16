import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Perch";
const description =
  "We let anyone securely colocate next to a Solana TPU. Condor anywhere; hummingbot-api on colo; programs bind the keys.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://poroburu.github.io/perch-website"),
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-bg font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
