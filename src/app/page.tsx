import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "./GematriaCalculatorClient";
import {
  CIPHER_SYSTEMS,
  CIPHER_COUNT,
  CALCULATION_STEPS,
  WORKED_EXAMPLES,
  HEBREW_LETTER_TABLE,
  HEBREW_FINAL_TABLE,
  ENGLISH_LETTER_TABLE,
} from "@/lib/gematriaReference";

const HOMEPAGE_TITLE = `Free Gematria Calculator — Hebrew, English & Greek, ${CIPHER_COUNT} Systems`;
const HOMEPAGE_DESCRIPTION =
  "Free gematria calculator for Hebrew, English and Greek. Type a word and see all 7 cipher values at once, with the full letter tables and worked arithmetic. No signup.";
const HOMEPAGE_OG_DESCRIPTION =
  "Type a word, see instant gematria values across 7 Hebrew, English and Greek cipher systems. Free, no signup required.";
const HOMEPAGE_CANONICAL_URL = "https://www.gematriaguru.com";

const HOMEPAGE_FAQ: { q: string; a: string }[] = [
  {
    q: "How is gematria calculated?",
    a: "Each letter is replaced by its numerical value and the values are added together. In standard Hebrew gematria the 22 letters run Aleph=1 through Tav=400, so חי is Chet(8) + Yod(10) = 18. In English ordinal gematria the letters run A=1 through Z=26, so LOVE is L(12) + O(15) + V(22) + E(5) = 54.",
  },
  {
    q: `Which gematria systems does this calculator support?`,
    a: `${CIPHER_COUNT} systems, calculated simultaneously: ${CIPHER_SYSTEMS.map((s) => s.method).join(", ")}. Three use the Latin alphabet, three use Hebrew, and one uses Greek.`,
  },
  {
    q: "What is the difference between Mispar Hechrachi and Mispar Gadol?",
    a: "They are identical except for the five Hebrew final (sofit) letter forms. Mispar Hechrachi gives a final letter the same value as its base form, so מלך is 40 + 30 + 20 = 90. Mispar Gadol gives the final forms values of 500 to 900, so the same word is 40 + 30 + 500 = 570.",
  },
  {
    q: "What is the difference between English Ordinal and English Reverse?",
    a: "English Ordinal counts forwards, A=1 through Z=26. English Reverse counts backwards, Z=1 through A=26. Every letter's two values sum to 27, so the two totals for a word differ unless the word happens to be symmetric across the alphabet.",
  },
  {
    q: "Does this calculator work for Hebrew and Greek, or only English?",
    a: "All three. Hebrew input is calculated in Mispar Hechrachi, Mispar Gadol and Hebrew Ordinal. Greek input is calculated in isopsephy, including the archaic letters digamma (6), qoppa (90) and sampi (900). Latin input is calculated in English Ordinal, English Reverse and Pythagorean reduction.",
  },
  {
    q: "What is the reduced value shown beside each total?",
    a: "The digits of the total are added together repeatedly until a single digit remains. The Hebrew word שלום totals 376, which reduces 3+7+6=16, then 1+6=7.",
  },
  {
    q: "Is this gematria calculator free?",
    a: "Yes. It is free to use with no account, signup or payment, and it runs in the browser on any device.",
  },
];

export const metadata: Metadata = {
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_OG_DESCRIPTION,
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

// Built from the same array the page renders, so the structured data can never
// advertise an answer the visible page does not contain.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to calculate the gematria value of a word",
  description: `Convert each letter to its numerical value and add the values together. This calculator applies all ${CIPHER_COUNT} supported systems at once.`,
  step: CALCULATION_STEPS.map(({ title, detail }, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: title,
    text: detail,
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col items-center justify-start px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Free Gematria Calculator — Hebrew, English &amp; Greek
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Type a word or phrase and see its value in all {CIPHER_COUNT} cipher systems at once, with
            the arithmetic shown for every letter.
          </p>
          <Suspense fallback={<div className="w-full h-40" />}>
            <GematriaCalculatorClient initialPreset={initialPreset} />
          </Suspense>

          <section className="w-full mt-10 mb-6">
            <h2 className="text-2xl font-bold mb-6">Explore Gematria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Hebrew Gematria Calculator",
                  href: "/hebrew-gematria-calculator",
                  description:
                    "Convert Hebrew words using Mispar Hechrachi, Mispar Gadol, and Hebrew Ordinal, with the full letter table.",
                },
                {
                  title: "English Gematria Calculator",
                  href: "/english-gematria-calculator",
                  description:
                    "Convert English words using Ordinal (A=1–Z=26), Reverse (Z=1–A=26), and Pythagorean reduction.",
                },
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

          <section id="how-it-works" className="w-full mt-6 mb-8">
            <h2 className="text-2xl font-bold mb-3">How this gematria calculator works</h2>
            <p className="text-muted-foreground mb-5">
              Gematria assigns a number to every letter and adds those numbers together to give a word or
              phrase a numerical value. This calculator performs that in five steps, and runs all{" "}
              {CIPHER_COUNT} supported systems on the same input at once.
            </p>
            <ol className="space-y-3">
              {CALCULATION_STEPS.map(({ title, detail }, i) => (
                <li key={title} className="flex gap-3">
                  <span className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="font-semibold">{title}.</strong>{" "}
                    <span className="text-muted-foreground">{detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section id="systems" className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-3">
              The {CIPHER_COUNT} gematria systems this calculator supports
            </h2>
            <p className="text-muted-foreground mb-5">
              Each system uses a different letter-value table, so the same word normally produces a
              different number in each one.
            </p>
            <div className="space-y-3">
              {CIPHER_SYSTEMS.map(({ method, alsoKnownAs, script, rule }) => (
                <div key={method} className="border border-border rounded-lg p-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <h3 className="font-semibold">{method}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {script}
                    </span>
                    {alsoKnownAs && (
                      <span className="text-xs text-muted-foreground">also called {alsoKnownAs}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="examples" className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-3">Worked examples</h2>
            <p className="text-muted-foreground mb-5">
              Each example shows the full arithmetic, so the result can be checked by hand.
            </p>
            <div className="space-y-3">
              {WORKED_EXAMPLES.map(({ input, transliteration, gloss, method, arithmetic, total }, i) => (
                <div key={`${input}-${method}-${i}`} className="border border-border rounded-lg p-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 mb-2">
                    <span className="text-lg font-semibold">{input}</span>
                    {transliteration && (
                      <span className="text-sm text-muted-foreground">({transliteration})</span>
                    )}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {method}
                    </span>
                  </div>
                  <p className="text-sm mb-2">
                    <span className="text-muted-foreground">{arithmetic} = </span>
                    <strong className="font-semibold">{total}</strong>
                  </p>
                  <p className="text-muted-foreground text-xs">{gloss}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="hebrew-values" className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-3">Hebrew letter values</h2>
            <p className="text-muted-foreground mb-4">
              The 22 Hebrew letters and their values in each Hebrew system. Aleph is 1 and Tav is 400 in
              the standard system.
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Hebrew letter values in Mispar Hechrachi, Mispar Gadol, and Hebrew Ordinal
                </caption>
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th scope="col" className="px-3 py-2 font-medium">Letter</th>
                    <th scope="col" className="px-3 py-2 font-medium">Name</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Standard</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Gadol</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Ordinal</th>
                  </tr>
                </thead>
                <tbody>
                  {[...HEBREW_LETTER_TABLE, ...HEBREW_FINAL_TABLE].map((row) => (
                    <tr key={row.name} className="border-t border-border">
                      <td className="px-3 py-1.5 text-lg">{row.glyph}</td>
                      <td className="px-3 py-1.5 text-muted-foreground">{row.name}</td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.standard}</td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.gadol}</td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.ordinal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-xs mt-2">
              The last five rows are the final (sofit) forms, used when a letter ends a word. They are the
              only place the standard and Gadol systems differ.
            </p>
          </section>

          <section id="english-values" className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-3">English letter values</h2>
            <p className="text-muted-foreground mb-4">
              All 26 English letters and their values in each Latin-script system.
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  English letter values in English Ordinal, English Reverse, and Pythagorean reduction
                </caption>
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th scope="col" className="px-3 py-2 font-medium">Letter</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Ordinal</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Reverse</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Pythagorean</th>
                  </tr>
                </thead>
                <tbody>
                  {ENGLISH_LETTER_TABLE.map((row) => (
                    <tr key={row.letter} className="border-t border-border">
                      <td className="px-3 py-1.5 font-semibold">{row.letter}</td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.ordinal}</td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.reverse}</td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.pythagorean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="w-full mt-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {HOMEPAGE_FAQ.map(({ q, a }) => (
                <div key={q} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{q}</h3>
                  <p className="text-muted-foreground text-sm">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-3">About these results</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p>
                Gematria is a historical interpretive practice with deep roots in Jewish textual
                scholarship, where commentators noted words sharing a numerical value and drew thematic
                connections between them. It also has parallels in Greek isopsephy and Arabic abjad
                numerals.
              </p>
              <p>
                The numbers this calculator returns are arithmetic. Adding letter values is a well-defined
                operation and the results here are reproducible — every table and worked example on this
                page is generated from the same code that computes your result. What a given number
                <em> means</em> is a matter of interpretation, and this tool does not claim that a shared
                value establishes a factual connection between two words.
              </p>
            </div>
          </section>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
