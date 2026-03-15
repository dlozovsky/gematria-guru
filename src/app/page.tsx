import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "./GematriaCalculatorClient";

export const metadata: Metadata = {
  title: "Free Gematria Calculator | Hebrew & English Gematria Online",
  description:
    "Free online gematria calculator for Hebrew and English. Calculate gematria values instantly — supports standard, ordinal, and reverse cipher methods. No signup required.",
  openGraph: {
    title: "Free Gematria Calculator | Hebrew & English Gematria Online",
    description:
      "Free online gematria calculator for Hebrew and English. Calculate gematria values instantly — supports standard, ordinal, and reverse cipher methods. No signup required.",
    url: "https://www.gematriaguru.com",
  },
  alternates: {
    canonical: "https://www.gematriaguru.com",
  },
};



const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gematria Guru",
  url: "https://www.gematriaguru.com",
  applicationCategory: "UtilitiesApplication",
  description: "Free online gematria calculator for Hebrew and English with multiple cipher methods",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  operatingSystem: "Web",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is gematria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gematria is an ancient practice of assigning numerical values to letters and words. It originates in Hebrew tradition where each letter has a fixed numerical value.",
      },
    },
    {
      "@type": "Question",
      name: "What gematria systems does this calculator support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our calculator supports Hebrew Standard (Mispar Hechrachi), Hebrew Gadol, Hebrew Ordinal, English Simple, English Reverse, English Ordinal, and several other traditional systems.",
      },
    },
    {
      "@type": "Question",
      name: "Is this gematria calculator free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Gematria Guru is completely free. No registration or account required.",
      },
    },
  ],
};

export default function HomePage({
  searchParams,
}: {
  searchParams?: { preset?: string };
}) {
  const initialPreset =
    searchParams?.preset === "english" || searchParams?.preset === "hebrew"
      ? searchParams.preset
      : undefined;
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
          <GematriaCalculatorClient initialPreset={initialPreset} />

          <section className="w-full mt-12 mb-6">
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
