import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "@/app/GematriaCalculatorClient";

const PAGE_TITLE = "English Gematria Calculator — Simple, Ordinal & Reverse";
const PAGE_DESCRIPTION =
  "Free English gematria calculator. Convert any word to its English Simple (A=1–Z=26), Ordinal, and Reverse cipher values instantly, with a full A–Z letter value chart.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/english-gematria-calculator";

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
      name: "How is English gematria calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In English Simple (Ordinal) gematria each letter is given its position in the alphabet — A=1, B=2, through Z=26 — and the values of every letter in a word are added together to get the total.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Simple and Reverse English gematria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple (Ordinal) counts A=1 up to Z=26. Reverse counts the alphabet backwards, so Z=1 up to A=26. Both produce a numerical value for the same word using different letter assignments.",
      },
    },
    {
      "@type": "Question",
      name: "Is the English gematria calculator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The calculator is completely free, works on any device, and requires no account or signup.",
      },
    },
  ],
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
          <h1 className="text-3xl font-bold mb-4">English Gematria Calculator</h1>
          <p className="text-muted-foreground mb-8">
            English gematria assigns a number to every letter of the Latin alphabet and adds them
            together to give a word or phrase its numerical value. This calculator computes the most
            common English methods at once — English Simple (Ordinal, A=1 through Z=26), and English
            Reverse — so you can compare results side by side as you type.
          </p>

          <Suspense fallback={<div className="w-full h-40" />}>
            <GematriaCalculatorClient initialPreset="english" />
          </Suspense>

          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-4">How English gematria works</h2>
            <p className="text-muted-foreground mb-4">
              The most widely used English system is <strong className="text-foreground">English
              Simple</strong>, also called English Ordinal. Each letter takes its ordinal position in
              the alphabet, and the word total is the sum of those positions. For example, the word{" "}
              <strong className="text-foreground">LOVE</strong> is L(12) + O(15) + V(22) + E(5) ={" "}
              <strong className="text-foreground">54</strong>.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">English Reverse</strong> uses the same idea but
              counts the alphabet backwards (Z=1 through A=26), which gives most words a different
              value and is often compared against the Simple result to look for matching numbers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">English gematria chart (A–Z values)</h2>
            <p className="text-muted-foreground mb-4">
              English Simple (Ordinal) letter values from A=1 to Z=26:
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {ALPHABET.map((letter, i) => (
                <div
                  key={letter}
                  className="flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm"
                >
                  <span className="font-semibold">{letter}</span>
                  <span className="text-muted-foreground">{i + 1}</span>
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
              href="/hebrew-gematria-calculator"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Hebrew gematria calculator →
            </Link>
            <Link
              href="/learning/systems"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Learn the gematria systems →
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
