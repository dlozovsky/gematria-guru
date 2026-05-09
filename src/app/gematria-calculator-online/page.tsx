import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "@/app/GematriaCalculatorClient";

const PAGE_TITLE = "Gematria Calculator Online — Free Hebrew & English Tool";
const PAGE_DESCRIPTION =
  "Free online gematria calculator — no download, no signup. Instant values across Hebrew Standard, English Simple, Ordinal, Reverse, and more cipher systems.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/gematria-calculator-online";

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
      name: "Is this gematria calculator free to use online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no account or signup required.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the calculator works on any device including mobile, tablet, and desktop.",
      },
    },
    {
      "@type": "Question",
      name: "Which cipher systems are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hebrew Standard (Mispar Hechrachi), Mispar Gadol, Hebrew Ordinal, English Simple, English Ordinal, and English Reverse.",
      },
    },
  ],
};

const CIPHER_SYSTEMS = [
  "Hebrew Standard (Mispar Hechrachi)",
  "Mispar Gadol",
  "Hebrew Ordinal",
  "English Simple",
  "English Ordinal",
  "English Reverse",
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
        <h1 className="text-3xl font-bold mb-4">Free Online Gematria Calculator</h1>
        <p className="text-muted-foreground mb-8">
          An online gematria calculator lets you instantly convert any word or phrase into its
          numerical value using traditional Hebrew and English cipher systems — right in your
          browser, with no software to install. Type your text below and results appear across
          all six supported systems simultaneously.
        </p>

        <Suspense fallback={<div className="w-full h-40" />}>
          <GematriaCalculatorClient />
        </Suspense>

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4">Why use an online gematria calculator?</h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            <li>
              <strong className="text-foreground">Instant results, any device.</strong> No
              download or installation — open the page and start calculating from any phone,
              tablet, or desktop.
            </li>
            <li>
              <strong className="text-foreground">Six cipher systems at once.</strong> Rather
              than switching between tools, every supported cipher calculates in parallel so you
              can compare values side by side.
            </li>
            <li>
              <strong className="text-foreground">No account or payment required.</strong> The
              calculator is completely free and works without signup, ads, or hidden limits.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Supported cipher systems</h2>
          <ul className="space-y-2">
            {CIPHER_SYSTEMS.map((cipher) => (
              <li key={cipher} className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {cipher}
              </li>
            ))}
          </ul>
        </section>

        <nav className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-primary underline underline-offset-4 hover:opacity-80">
            ← Back to homepage
          </Link>
          <Link
            href="/learning"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            Learn gematria →
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
