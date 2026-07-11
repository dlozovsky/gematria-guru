import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gematriaguru.com"),
  title: {
    default: "Gematria Calculator — Hebrew & English, 6 Cipher Systems",
    template: "%s | Gematria Guru",
  },
  description:
    "Calculate Hebrew and English gematria instantly across six cipher systems — Mispar Hechrachi, English Simple, Ordinal, Reverse and more. Free, no signup.",
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
    title: "Gematria Calculator — Hebrew & English, 6 Cipher Systems",
    description: "Calculate Hebrew and English gematria instantly across six cipher systems — Mispar Hechrachi, English Simple, Ordinal, Reverse and more. Free, no signup.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gematria Calculator — Hebrew & English, 6 Cipher Systems",
    description: "Calculate Hebrew and English gematria instantly across six cipher systems — free, no signup.",
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
        <script
          data-harbor-site="nd737jypeadr69kydz2121xexx83ew2f"
          src="https://outgoing-oyster-428.convex.site/api/harbor-seo.js?siteId=nd737jypeadr69kydz2121xexx83ew2f"
          async
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
