import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "@/app/GematriaCalculatorClient";

const PAGE_TITLE = "Hebrew Gematria Calculator — Mispar Hechrachi & Gadol";
const PAGE_DESCRIPTION =
  "Free Hebrew gematria calculator. Convert Hebrew words to their numerical values using Mispar Hechrachi (standard), Mispar Gadol, and Ordinal methods, with a full Hebrew letter value chart.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/hebrew-gematria-calculator";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_CANONICAL_URL,
  },
  alternates: {
    canonical: PAGE_CANONICAL_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Hebrew gematria calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In standard Hebrew gematria (Mispar Hechrachi) each of the 22 Hebrew letters has a fixed value — Aleph=1, Bet=2 up to Yod=10, then 20, 30 and so on to Tav=400 — and the value of a word is the sum of its letters.",
      },
    },
    {
      "@type": "Question",
      name: "What is Mispar Gadol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mispar Gadol is a Hebrew gematria method that gives the five final letter forms (sofit) their own higher values — Final Kaf=500, Final Mem=600, Final Nun=700, Final Pe=800, Final Tsadi=900 — instead of the standard values used in Mispar Hechrachi.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Hebrew gematria calculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The calculator is completely free, works on any device, and requires no account or signup.",
      },
    },
  ],
};

const HEBREW_LETTERS: [string, string, number][] = [
  ["א", "Aleph", 1], ["ב", "Bet", 2], ["ג", "Gimel", 3], ["ד", "Dalet", 4],
  ["ה", "He", 5], ["ו", "Vav", 6], ["ז", "Zayin", 7], ["ח", "Chet", 8],
  ["ט", "Tet", 9], ["י", "Yod", 10], ["כ", "Kaf", 20], ["ל", "Lamed", 30],
  ["מ", "Mem", 40], ["נ", "Nun", 50], ["ס", "Samech", 60], ["ע", "Ayin", 70],
  ["פ", "Pe", 80], ["צ", "Tsadi", 90], ["ק", "Qof", 100], ["ר", "Resh", 200],
  ["ש", "Shin", 300], ["ת", "Tav", 400],
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
          <h1 className="text-3xl font-bold mb-4">Hebrew Gematria Calculator</h1>
          <p className="text-muted-foreground mb-8">
            Hebrew gematria is an ancient alphanumeric system in which each of the 22 Hebrew letters
            carries a numerical value. Originating in classical Jewish tradition, it is widely used in
            Torah study and Kabbalistic interpretation to uncover relationships between words that
            share the same value. Type Hebrew text below to see its value across Mispar Hechrachi
            (standard), Mispar Gadol, and Ordinal methods at once.
          </p>

          <Suspense fallback={<div className="w-full h-40" />}>
            <GematriaCalculatorClient initialPreset="hebrew" />
          </Suspense>

          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-4">How Hebrew gematria works</h2>
            <p className="text-muted-foreground mb-4">
              The standard method, <strong className="text-foreground">Mispar Hechrachi</strong>,
              assigns each letter a fixed value: the first nine letters are 1–9, the next nine count
              in tens (10–90), and the final four count in hundreds (100–400). A word&apos;s value is
              simply the sum of its letters. For example, <strong className="text-foreground">חי</strong>{" "}
              (&quot;chai&quot;, life) is Chet(8) + Yod(10) = <strong className="text-foreground">18</strong>,
              the well-known number associated with life.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Mispar Gadol</strong> gives the five final letter
              forms their own higher values (500–900), while <strong className="text-foreground">Hebrew
              Ordinal</strong> (Mispar Siduri) numbers the letters 1–22 by their position.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Hebrew gematria chart (letter values)</h2>
            <p className="text-muted-foreground mb-4">
              Standard Mispar Hechrachi values for the 22 Hebrew letters:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {HEBREW_LETTERS.map(([glyph, name, value]) => (
                <div
                  key={name}
                  className="flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{glyph}</span>
                    <span className="text-muted-foreground">{name}</span>
                  </span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <nav className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/english-gematria-calculator"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              English gematria calculator →
            </Link>
            <Link
              href="/learning/hebrew-alphabet"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              The Hebrew alphabet as numbers →
            </Link>
            <Link
              href="/number-maps"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Number reference maps →
            </Link>
          </nav>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
