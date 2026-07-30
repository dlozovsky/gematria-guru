import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "@/app/GematriaCalculatorClient";
import {
  CIPHER_SYSTEMS,
  HEBREW_LETTER_TABLE,
  HEBREW_FINAL_TABLE,
  WORKED_EXAMPLES,
} from "@/lib/gematriaReference";

const PAGE_TITLE = "Hebrew Gematria Calculator and Letter Value Chart";
const PAGE_DESCRIPTION =
  "Free Hebrew gematria calculator. Get any Hebrew word's value in Mispar Hechrachi, Mispar Gadol and Ordinal at once, with the full 22-letter chart.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/hebrew-gematria-calculator";

const HEBREW_SYSTEMS = CIPHER_SYSTEMS.filter((c) => c.script === "Hebrew");
const HEBREW_EXAMPLES = WORKED_EXAMPLES.filter((e) =>
  HEBREW_SYSTEMS.some((s) => s.method === e.method)
);

const FAQ: { q: string; a: string }[] = [
  {
    q: "What is Hebrew gematria?",
    a: "Hebrew gematria is the practice of reading the 22 letters of the Hebrew alphabet as numbers and adding them together to give a word or phrase a numerical value. Aleph is 1, Bet is 2, and the sequence continues in tens and then hundreds up to Tav at 400. It is used in Jewish textual scholarship, where commentators note words that share a value and draw thematic connections between them.",
  },
  {
    q: "How is Hebrew gematria calculated?",
    a: "Replace each letter with its value and add the values together. In the standard system the first nine letters are 1 to 9, the next nine count in tens from 10 to 90, and the last four count in hundreds from 100 to 400. The word חי is Chet(8) + Yod(10) = 18.",
  },
  {
    q: "What is the difference between Mispar Hechrachi and Mispar Gadol?",
    a: "They differ only on the five final (sofit) letter forms. Mispar Hechrachi gives a final letter the same value as its base form, so מלך is 40 + 30 + 20 = 90. Mispar Gadol gives the final forms their own values from 500 to 900, so the same word is 40 + 30 + 500 = 570. For a word with no final letter the two systems always agree.",
  },
  {
    q: "What is Hebrew Ordinal, or Mispar Siduri?",
    a: "Hebrew Ordinal numbers the letters 1 to 22 by their position in the alphabet rather than by their traditional value. Aleph is 1 and Tav is 22, so Tav is 400 in the standard system but 22 in Ordinal. Final forms take the same ordinal as their base letter.",
  },
  {
    q: "Is Jewish gematria the same as Hebrew gematria?",
    a: "In ordinary use the terms are interchangeable, and the standard method is also called Mispar Hechrachi or Standard Value. This calculator labels that method Jewish Gematria.",
  },
  {
    q: "Can I calculate Hebrew gematria from English letters?",
    a: "Yes, but the result is an estimate rather than a fixed value. English input is transliterated into Hebrew first and the Hebrew values are then applied, so the total depends on how the word is spelled in Hebrew. The calculator shows the Hebrew spelling it used and lets you correct it.",
  },
  {
    q: "Does the calculator handle vowel points?",
    a: "Yes. Niqqud carries no numerical value in gematria, so vowel points and cantillation marks are stripped before the letters are counted. Pasting pointed text from a Hebrew Bible gives the same result as pasting the unpointed consonants.",
  },
  {
    q: "Is the Hebrew gematria calculator free?",
    a: "Yes. It runs in the browser on any device and needs no account, signup or payment.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to calculate Hebrew gematria",
  description:
    "Convert each Hebrew letter to its numerical value and add the values together.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Write the word in Hebrew consonants",
      text: "Vowel points carry no value, so only the consonants are counted.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Look up each letter's value",
      text: "Aleph to Tet are 1 to 9, Yod to Tsadi count in tens, and Qof to Tav count in hundreds up to 400.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Check for final letter forms",
      text: "If the word ends in Kaf, Mem, Nun, Pe or Tsadi, the standard system uses the base value while Mispar Gadol uses 500 to 900.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add the values together",
      text: "The sum is the word's gematria value. Chet(8) + Yod(10) gives חי a value of 18.",
    },
  ],
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "hebrew gematria",
    "hebrew gematria calculator",
    "jewish gematria calculator",
    "hebrew gematria chart",
    "hebrew letter values",
    "mispar hechrachi",
    "mispar gadol",
    "hebrew numerology",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_CANONICAL_URL,
  },
  alternates: {
    canonical: PAGE_CANONICAL_URL,
  },
};

export default function Page() {
  return (
    <>
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
        <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
          <h1 className="text-3xl font-bold mb-4">Hebrew Gematria Calculator</h1>
          <p className="text-muted-foreground mb-8">
            Hebrew gematria reads each of the 22 Hebrew letters as a number and adds them together to
            give a word its value. Enter Hebrew text below to see the result in all three Hebrew
            systems at once, with the value of every letter shown. The complete letter chart and the
            five final forms are further down the page.
          </p>

          <Suspense fallback={<div className="w-full h-40" />}>
            <GematriaCalculatorClient initialPreset="hebrew" />
          </Suspense>

          <section id="what-is-it" className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-3">What Hebrew gematria is</h2>
            <p className="text-muted-foreground mb-4">
              The Hebrew alphabet has no separate numerals. The same 22 letters serve as both script
              and numbers, which is why a Hebrew word can be read as a quantity as well as a term.
              Aleph is 1, Bet is 2, and the sequence runs through the tens and the hundreds to Tav at
              400. Adding a word&apos;s letters gives its gematria value.
            </p>
            <p className="text-muted-foreground">
              The practice is documented in rabbinic literature and developed further in Kabbalistic
              commentary, where two words sharing a value are treated as thematically linked. The
              arithmetic is fixed and reproducible. What a shared value means is a matter of
              interpretation, and this calculator reports the numbers without asserting a connection.
            </p>
          </section>

          <section id="systems" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">
              The {HEBREW_SYSTEMS.length} Hebrew systems, and how they differ
            </h2>
            <div className="space-y-3">
              {HEBREW_SYSTEMS.map(({ method, alsoKnownAs, rule }) => (
                <div key={method} className="border border-border rounded-lg p-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <h3 className="font-semibold">{method}</h3>
                    {alsoKnownAs && (
                      <span className="text-xs text-muted-foreground">also called {alsoKnownAs}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="examples" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Worked examples</h2>
            <p className="text-muted-foreground mb-5">
              Each sum is shown in full so it can be checked by hand.
            </p>
            <div className="space-y-3">
              {HEBREW_EXAMPLES.map(({ input, transliteration, gloss, method, arithmetic, total }) => (
                <div key={`${input}-${method}`} className="border border-border rounded-lg p-4">
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

          <section id="chart" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Hebrew gematria chart</h2>
            <p className="text-muted-foreground mb-4">
              All 22 letters with their value in each of the three systems. Aleph is 1 and Tav is 400
              in the standard system.
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Hebrew letter values in Mispar Hechrachi, Mispar Gadol and Hebrew Ordinal
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
                  {HEBREW_LETTER_TABLE.map((row) => (
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
          </section>

          <section id="final-forms" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">The five final (sofit) forms</h2>
            <p className="text-muted-foreground mb-4">
              Five Hebrew letters change shape when they end a word. These are the only letters where
              the standard system and Mispar Gadol disagree, which is why the two systems return the
              same total for most words and diverge for others.
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Hebrew final letter forms and their values in each system
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
                  {HEBREW_FINAL_TABLE.map((row) => (
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
          </section>

          <section id="faq" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {FAQ.map(({ q, a }) => (
                <div key={q} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{q}</h3>
                  <p className="text-muted-foreground text-sm">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <nav className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/hebrew-gematria-reference-chart-2026"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Printable Hebrew reference chart
            </Link>
            <Link
              href="/english-gematria-calculator"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              English gematria calculator
            </Link>
            <Link
              href="/learning/hebrew-alphabet"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              The Hebrew alphabet as numbers
            </Link>
            <Link
              href="/english-to-hebrew-gematria"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              English to Hebrew gematria
            </Link>
          </nav>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
