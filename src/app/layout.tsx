import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gematriaguru.com"),
  title: {
    default: "Free Online Gematria Calculator | Gematria Guru",
    template: "%s | Gematria Guru",
  },
  description:
    "Calculate gematria values for Hebrew, English, and other systems. Explore numerology, kabbalah, and biblical numerology with our free gematria calculator.",
  keywords: [
    "gematria calculator",
    "Hebrew gematria",
    "English gematria",
    "numerology",
    "kabbalah",
    "biblical numerology",
    "gematria value",
    "gematria tool",
  ],
  authors: [{ name: "Gematria Guru" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gematriaguru.com",
    siteName: "Gematria Guru",
    title: "Free Online Gematria Calculator | Gematria Guru",
    description: "Calculate gematria values for Hebrew, English, and other systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Gematria Calculator | Gematria Guru",
    description: "Calculate gematria values for Hebrew, English, and other systems.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gematria Guru",
  url: "https://www.gematriaguru.com",
  logo: "https://www.gematriaguru.com/logo.png",
  sameAs: [],
  description:
    "Free online gematria calculator and educational resource for Hebrew, English, and other gematria systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
