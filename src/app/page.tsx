import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "./GematriaCalculatorClient";

const HOMEPAGE_TITLE = "Free Online Gematria Calculator | Hebrew & English Gematria";
const HOMEPAGE_DESCRIPTION =
  "Free gematria calculator for Hebrew and English — get instant values across 6 cipher systems including Mispar Hechrachi, English Simple, Ordinal, and Reverse. No signup, no ads, works on any device.";
const HOMEPAGE_CANONICAL_URL = "https://www.gematriaguru.com";

export const metadata: Metadata = {
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    url: HOMEPAGE_CANONICAL_URL,
    type: "website",
  },
  alternates: {
    canonical: HOMEPAGE_CANONICAL_URL,
  },
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  url: HOMEPAGE_CANONICAL_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a gematria calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gematria calculator converts letters into numbers using ancient Hebrew and English cipher systems, revealing the numerical value of any word or phrase.",
      },
    },
    {
      "@type": "Question",
      name: "Which gematria systems does this calculator support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hebrew Standard (Mispar Hechrachi), Mispar Gadol, Hebrew Ordinal, English Simple, English Ordinal, and English Reverse.",
      },
    },
    {
      "@type": "Question",
      name: "Is this gematria calculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — completely free with no account, signup, or payment required.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work for both Hebrew and English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it supports full Hebrew and English gematria calculation simultaneously across all cipher systems.",
      },
    },
  ],
};

export default function HomePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) {
  const preset = typeof searchParams?.preset === "string" ? searchParams.preset : undefined;
  const initialPreset = preset === "english" || preset === "hebrew" ? preset : undefined;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col items-center justify-start px-4 py-8">
          <Suspense fallback={<div className="w-full h-40" />}>
            <GematriaCalculatorClient initialPreset={initialPreset} />
          </Suspense>

          <section className="w-full mt-10 mb-6">
            <h2 className="text-2xl font-bold mb-6">Explore Gematria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Learn Gematria",
                  href: "/learning",
                  description:
                    "New to gematria? Start with the basics of Hebrew and English cipher methods.",
                },
                {
                  title: "Number Reference Maps",
                  href: "/number-maps",
                  description:
                    "Browse visual charts of gematria values for Hebrew and English alphabets.",
                },
                {
                  title: "Gematria Blog",
                  href: "/blog",
                  description:
                    "Guides, number meanings, and tips for getting more from your calculations.",
                },
                {
                  title: "About Gematria Guru",
                  href: "/about",
                  description:
                    "How this calculator works and what cipher methods are supported.",
                },
              ].map(({ title, href, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block border border-border rounded-lg p-5 hover:border-primary hover:bg-accent transition-colors"
                >
                  <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="w-full mt-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">About This Gematria Calculator</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Gematria Guru is a free, comprehensive gematria calculator that supports Hebrew, English, and
                multiple traditional numerical systems. Whether you are studying Kabbalah, exploring biblical
                numerology, or simply curious about the hidden numerical patterns in language, our tool makes
                gematria accessible and intuitive.
              </p>
              <p>
                The practice of gematria dates back thousands of years in Jewish tradition, where scholars would
                find connections between words sharing the same numerical value. Our calculator supports the most
                widely-used gematria systems: Hebrew Standard (Mispar Hechrachi), Mispar Gadol, Hebrew Ordinal,
                English Simple (A=1 through Z=26), English Reverse, Pythagorean Numerology, and more.
              </p>
            </div>
          </section>

          <section className="w-full mt-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is gematria?",
                  a: "Gematria is an ancient practice of assigning numerical values to letters and words, originating in Hebrew tradition. Each letter has a fixed numerical value, allowing words and phrases to be compared by their numerical equivalents.",
                },
                {
                  q: "How do I calculate the gematria of a word?",
                  a: "Simply type or paste your word or phrase into the input field above. The calculator automatically computes the values across all supported systems as you type.",
                },
                {
                  q: "What is the difference between Hebrew and English gematria?",
                  a: "Hebrew gematria assigns values based on the traditional positions of the 22 Hebrew letters (Aleph=1, Bet=2, etc.). English gematria adapts similar principles to the Latin alphabet using various methods.",
                },
                {
                  q: "Is this gematria calculator free to use?",
                  a: "Yes, Gematria Guru is completely free with no registration or account required.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{q}</h3>
                  <p className="text-muted-foreground text-sm">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
