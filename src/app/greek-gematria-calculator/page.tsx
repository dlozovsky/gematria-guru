import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "@/app/GematriaCalculatorClient";
import {
  CIPHER_SYSTEMS,
  GREEK_LETTER_TABLE,
  GREEK_EXAMPLES,
} from "@/lib/gematriaReference";

const PAGE_TITLE = "Greek Gematria Calculator: Isopsephy and Letter Values";
const PAGE_DESCRIPTION =
  "Free Greek gematria (isopsephy) calculator. Get any Greek word's value with every letter shown, plus the full chart including digamma, qoppa and sampi.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/greek-gematria-calculator";

const GREEK_SYSTEM = CIPHER_SYSTEMS.find((c) => c.script === "Greek");

const FAQ: { q: string; a: string }[] = [
  {
    q: "What is Greek gematria?",
    a: "Greek gematria is called isopsephy, from the Greek for equal pebbles. Each letter of the Greek alphabet stands for a number, and the values of a word's letters are added to give the word a total. Alpha is 1, Iota is 10, Rho is 100 and Omega is 800. Words that share a total were treated by some ancient writers as connected, and the practice appears in graffiti, magical texts and early Christian commentary.",
  },
  {
    q: "How is Greek isopsephy calculated?",
    a: "Replace each letter with its value and add the values together. The first nine letters are 1 to 9, the next nine are 10 to 90 in tens, and the last nine are 100 to 900 in hundreds. The name Ἰησοῦς is Iota(10) + Eta(8) + Sigma(200) + Omicron(70) + Upsilon(400) + Final Sigma(200) = 888.",
  },
  {
    q: "What are digamma, qoppa and sampi?",
    a: "They are archaic letters that dropped out of everyday Greek writing but stayed in the number system. Digamma (ϛ, also called stigma) is 6, qoppa (ϟ) is 90 and sampi (ϡ) is 900. Without them the 24 letters of the classical alphabet would leave gaps at 6, 90 and 900. The calculator uses them as values, but you will rarely type them, because ordinary Greek words do not contain them.",
  },
  {
    q: "Does the final sigma change the value?",
    a: "No. The sigma (σ) and the final form used at the end of a word (ς) both count as 200. The calculator converts a word-final sigma to ς for display and counts both the same way.",
  },
  {
    q: "Do accents and breathing marks matter?",
    a: "No. Accents, breathing marks and diaeresis carry no numerical value, so the calculator strips them before counting. Pasting polytonic text such as ἀλήθεια gives the same result as the unaccented ἀληθεια.",
  },
  {
    q: "What is the difference between Greek isopsephy and Hebrew gematria?",
    a: "Both assign values to letters in alphabetical order and add them up, and the standard Hebrew system runs from 1 to 400 while Greek runs from 1 to 900. They differ in the alphabets, in the number of letters (22 Hebrew against 27 Greek including the archaic three) and in tradition. Hebrew gematria belongs to Jewish textual scholarship, while isopsephy is attested in Greek and Roman inscriptions and in early Christian writing.",
  },
  {
    q: "Can I calculate Greek gematria from English letters?",
    a: "Yes, but the result is an estimate rather than a fixed value. English input is transliterated into Greek first, so the total depends on how the word is spelled in Greek. The calculator shows the Greek spelling it used and lets you correct it. For a reliable value, paste the word in Greek.",
  },
  {
    q: "Is the Greek gematria calculator free?",
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
  name: "How to calculate Greek gematria (isopsephy)",
  description:
    "Convert each Greek letter to its numerical value and add the values together.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Write the word in Greek letters",
      text: "Accents and breathing marks carry no value, so only the letters are counted.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Look up each letter's value",
      text: "Alpha to Theta are 1 to 9, Iota to Qoppa count in tens, and Rho to Sampi count in hundreds up to 900.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Count both sigmas as 200",
      text: "The word-final sigma (ς) has the same value as the ordinary sigma (σ).",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add the values together",
      text: "The sum is the word's isopsephy value. Alpha(1) + Gamma(3) + Alpha(1) + Pi(80) + Eta(8) gives ἀγάπη a value of 93.",
    },
  ],
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "greek gematria",
    "greek gematria calculator",
    "isopsephy",
    "isopsephy calculator",
    "greek letter values",
    "greek numerology",
    "greek alphabet numbers",
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

const linkClass = "text-primary underline underline-offset-4 hover:opacity-80";

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
          <h1 className="text-3xl font-bold mb-4">Greek Gematria Calculator</h1>
          <p className="text-muted-foreground mb-8">
            Greek gematria, known as isopsephy, reads each letter of the Greek alphabet as a number
            and adds them together to give a word its value. Enter Greek text below to see the total
            with the value of every letter shown. The complete letter chart, including the archaic
            digamma, qoppa and sampi, is further down the page.
          </p>

          <Suspense fallback={<div className="w-full h-40" />}>
            <GematriaCalculatorClient initialPreset="greek" />
          </Suspense>

          <section id="what-is-it" className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-3">What isopsephy is</h2>
            <p className="text-muted-foreground mb-4">
              Like Hebrew, Greek had no separate numerals for much of its history. The letters served
              as numbers, so a word could be read as a quantity. Alpha is 1, Iota is 10, Rho is 100,
              and the sequence runs to 900. Adding a word&apos;s letters gives its isopsephy value.
            </p>
            <p className="text-muted-foreground mb-4">
              The practice is attested well outside scholarly circles. Graffiti at Pompeii pairs
              names with numbers, and Greek magical papyri and early Christian writers use letter
              totals in their commentary. {GREEK_SYSTEM?.rule}
            </p>
            <p className="text-muted-foreground">
              The arithmetic is fixed and reproducible. What a shared value means is a matter of
              interpretation, and this calculator reports the numbers without asserting a connection.
              For the Hebrew counterpart of the same idea, see the{" "}
              <Link href="/hebrew-gematria-calculator" className={linkClass}>
                Hebrew gematria calculator
              </Link>
              .
            </p>
          </section>

          <section id="examples" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Worked examples</h2>
            <p className="text-muted-foreground mb-5">
              Each sum is shown in full so it can be checked by hand. Accents are ignored, and a
              word-final sigma counts as 200 like any other.
            </p>
            <div className="space-y-3">
              {GREEK_EXAMPLES.map(({ input, transliteration, gloss, arithmetic, total }) => (
                <div key={input} className="border border-border rounded-lg p-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 mb-2">
                    <span className="text-lg font-semibold">{input}</span>
                    {transliteration && (
                      <span className="text-sm text-muted-foreground">({transliteration})</span>
                    )}
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
            <h2 className="text-2xl font-bold mb-3">Greek gematria chart</h2>
            <p className="text-muted-foreground mb-4">
              All 27 letters with their isopsephy value. The three archaic letters are marked. Sigma
              takes the same value, 200, in its final form ς.
            </p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <caption className="sr-only">Greek letter values in isopsephy</caption>
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th scope="col" className="px-3 py-2 font-medium">Letter</th>
                    <th scope="col" className="px-3 py-2 font-medium">Name</th>
                    <th scope="col" className="px-3 py-2 font-medium text-right">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {GREEK_LETTER_TABLE.map((row) => (
                    <tr key={row.name} className="border-t border-border">
                      <td className="px-3 py-1.5 text-lg">{row.glyph}</td>
                      <td className="px-3 py-1.5 text-muted-foreground">
                        {row.name}
                        {row.archaic && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-muted">
                            archaic
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-1.5 text-right tabular-nums">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="archaic" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">The three archaic letters</h2>
            <p className="text-muted-foreground mb-4">
              The classical Greek alphabet has 24 letters, but the number system needs 27 to cover
              1 to 9, 10 to 90 and 100 to 900. Three letters that had left everyday writing kept their
              place as numerals: digamma at 6, qoppa at 90 and sampi at 900. They explain why the
              chart jumps from epsilon (5) to zeta (7) and from pi (80) to rho (100) in the modern
              alphabet. Ordinary Greek words do not contain them, so they only matter if you paste
              them in deliberately.
            </p>
          </section>

          <section id="greek-vs-hebrew" className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Greek and Hebrew compared</h2>
            <p className="text-muted-foreground mb-4">
              The two systems share a design: letters in alphabetical order take the values 1 to 9,
              then tens, then hundreds. Hebrew stops at Tav, 400, while Greek reaches 900 through
              the archaic letters. Hebrew gematria also has variants such as Mispar Gadol and
              Hebrew Ordinal, which the{" "}
              <Link href="/hebrew-gematria-calculator" className={linkClass}>
                Hebrew calculator
              </Link>{" "}
              reports side by side. Greek isopsephy has a single standard system, which this page
              reports. To see Hebrew, English and Greek values for the same text together, use the{" "}
              <Link href="/" className={linkClass}>
                main gematria calculator
              </Link>
              .
            </p>
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
            <Link href="/" className={linkClass}>Gematria calculator</Link>
            <Link href="/hebrew-gematria-calculator" className={linkClass}>Hebrew gematria calculator</Link>
            <Link href="/english-gematria-calculator" className={linkClass}>English gematria calculator</Link>
            <Link href="/learning/systems" className={linkClass}>Gematria systems compared</Link>
            <Link href="/blog/famous-gematria-numbers-meanings" className={linkClass}>Famous gematria numbers</Link>
          </nav>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
